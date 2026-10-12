import {readdirSync,readFileSync,existsSync} from 'node:fs';
import {join,dirname,relative} from 'node:path';
const root=process.cwd();
const articles=readdirSync('articles').filter(x=>x.endsWith('.html')).sort();
const read=p=>readFileSync(join(root,p),'utf8');
const failures=[];
function assert(condition,message){if(!condition)failures.push(message)}
assert(articles.length===30,'Expected 30 article pages; found '+articles.length);
const home=read('index.html');
assert(home.includes('id="newsletter-form"'),'Homepage newsletter form is missing');
assert(!home.includes('id="assessment"'),'Homepage must not contain an assessment');
assert((home.match(/<article class="story/g)||[]).length===6,'Homepage must have six static feature cards');
assert(home.includes('class="hero-editorial-photo"'),'Homepage hero editorial photo is missing');
const js=read('assets/js/site.js');
assert(js.includes('function fgInitQuizzes()'),'Quiz controller is missing');
assert(js.includes('function fgInitArticlePhotoViewer()'),'Article photo viewer is missing');
for(const file of articles){
 const p='articles/'+file,s=read(p);
 assert(s.includes('id="assessment"'),p+': missing assessment anchor');
 assert(s.includes('class="quiz"'),p+': missing quiz');
 assert((s.match(/class="quiz-step/g)||[]).length===5,p+': expected five quiz steps');
 assert(s.includes('name="article" value="'+file.slice(0,-5)+'"'),p+': missing source article field');
 assert(!s.includes('data-country required'),p+': obsolete country select');
 assert(s.includes('href="#assessment"'),p+': missing assessment link');
 assert((s.match(/<figure class="article-image/g)||[]).length===2,p+': expected two editorial figures');
 assert((s.match(/<img /g)||[]).length>=2,p+': missing photographs');
 assert(s.includes('name="first_name"')&&s.includes('name="email"')&&s.includes('name="phone"'),p+': missing enquiry fields');
}
const pages=['index.html','investigations.html','watchlist.html','consumer-rights.html','about.html','contact.html','privacy.html',...articles.map(x=>'articles/'+x)];
for(const p of pages){
 if(!existsSync(join(root,p)))continue;
 const s=read(p);
 const links=[...s.matchAll(/\b(?:href|src)=["']([^"']+)["']/g)].map(x=>x[1]);
 for(const href of links){
  if(!href||href.startsWith('#')||/^(?:https?:|mailto:|tel:|data:|javascript:)/i.test(href))continue;
  const path=href.split('#')[0].split('?')[0];
  if(!path)continue;
  const resolved=join(root,dirname(p),decodeURIComponent(path));
  assert(existsSync(resolved),p+': broken local reference '+href);
 }
}
if(failures.length){console.error('Site checks failed:\n'+failures.map(x=>' - '+x).join('\n'));process.exit(1)}
console.log('Site checks passed: '+articles.length+' articles, six static homepage cards, article quizzes, photos and local links.');
