import {readdirSync,readFileSync,writeFileSync,mkdirSync} from 'node:fs';
import {join} from 'node:path';
const paths=['index.html','investigations.html',...readdirSync('articles').filter(f=>f.endsWith('.html')).map(f=>'articles/'+f)];
const imagePattern=/https:\/\/images\.unsplash\.com\/(photo-[a-z0-9-]+)\?[^"'<>\s]*/g;
const ids=new Set();
for(const p of paths){
 const html=readFileSync(p,'utf8');
 for(const match of html.matchAll(imagePattern))ids.add(match[1]);
}
mkdirSync('assets/photos',{recursive:true});
const cached=new Set();
const all=[...ids];
async function cacheOne(id){
 const url='https://images.unsplash.com/'+id+'?fit=crop&w=1200&q=82&fm=jpg';
 try{
  const res=await fetch(url,{signal:AbortSignal.timeout(25000),headers:{'User-Agent':'FinGuardInsights-Editorial-Site/1.0'}});
  const bytes=Buffer.from(await res.arrayBuffer());
  const type=res.headers.get('content-type')||'';
  if(!res.ok||!type.startsWith('image/')||bytes.length<5000)throw new Error('Invalid image response: '+res.status+' '+type);
  writeFileSync(join('assets/photos',id+'.jpg'),bytes);
  cached.add(id);
  console.log('Cached '+id+' ('+Math.round(bytes.length/1024)+' KB)');
 }catch(error){
  console.warn('Keeping original image URL for '+id+': '+error.message);
 }
}
for(let i=0;i<all.length;i+=4)await Promise.all(all.slice(i,i+4).map(cacheOne));
for(const path of paths){
 const html=readFileSync(path,'utf8');
 const prefix=path.startsWith('articles/')?'../':'';
 const changed=html.replace(imagePattern,(url,id)=>cached.has(id)?prefix+'assets/photos/'+id+'.jpg':url);
 if(changed!==html)writeFileSync(path,changed);
}
console.log('Editorial photo cache: '+cached.size+'/'+all.length+' images; pages use local files when available.');
