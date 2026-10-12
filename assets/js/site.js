(()=>{const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];const root=document.documentElement,st=localStorage.getItem('fg_theme');if(st)root.dataset.theme=st;const th=$('#theme');if(th)th.onclick=()=>{const n=root.dataset.theme==='dark'?'light':'dark';root.dataset.theme=n;localStorage.setItem('fg_theme',n);th.textContent=n==='dark'?'☀':'◐'};const m=$('#menu'),nav=$('#navlinks');if(m&&nav)m.onclick=()=>nav.classList.toggle('open');$$('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{const t=$(a.getAttribute('href'));if(t){e.preventDefault();t.scrollIntoView({behavior:'smooth',block:'start'})}}));$$('.filter').forEach(b=>b.addEventListener('click',()=>{const f=b.dataset.filter;$$('.filter').forEach(x=>x.classList.toggle('active',x===b));$$('.article-card').forEach(c=>c.style.display=(f==='all'||c.dataset.cat===f)?'block':'none');$$('.desk').forEach(d=>{const any=[...d.querySelectorAll('.article-card')].some(c=>c.style.display!=='none');d.style.display=any?'block':'none'})}));const keys=['utm_source','utm_medium','utm_campaign','utm_content','utm_term','source','campaign','adset','creative','subid','tbclid'];const qs=new URLSearchParams(location.search),tr={};keys.forEach(k=>{let v=qs.get(k);if(v)sessionStorage.setItem('fg_'+k,v);else v=sessionStorage.getItem('fg_'+k)||'';tr[k]=v});$$('[data-track]').forEach(i=>i.value=tr[i.dataset.track]||'');const c=$('#cookie');if(c&&!localStorage.getItem('fg_cookie'))c.classList.add('show');window.FGCookie=v=>{localStorage.setItem('fg_cookie',v);if(c)c.classList.remove('show')};function fgUpdateLegacyLinks(){
 const isArticle=/\/articles\//.test(location.pathname);
 $$('a[href*="quiz.html"],a[href$="#assessment"]').forEach(a=>{
  if(isArticle){
   a.href='#assessment';
   if(/Platform Risk Check|Subscribe to Digest|Weekly Digest/i.test(a.textContent))a.textContent='Platform Risk Check';
  }else{
   a.href='index.html#newsletter';
   if(/Platform Risk Check|Subscribe to Digest/i.test(a.textContent))a.textContent='Weekly Digest';
  }
 });
 $$('a.btn.sm[href*="#newsletter"]').forEach(a=>{if(/Platform Risk Check|Subscribe to Digest/i.test(a.textContent))a.textContent='Weekly Digest'});
 $$('a[href$="watchlist.html"]').forEach(a=>{if(a.textContent.trim()==='Platform Watchlist')a.textContent='Regulatory Hub'});
 $$('.brand small').forEach(el=>el.textContent='Financial Safety & Regulatory Intelligence');
}
fgUpdateLegacyLinks();
const newsletterForm=$('#newsletter-form');
if(newsletterForm)newsletterForm.addEventListener('submit',e=>{
 e.preventDefault();
 const name=$('input[name="name"]',newsletterForm)?.value.trim()||'';
 const email=$('input[name="email"]',newsletterForm)?.value.trim()||'';
 const consent=$('input[name="newsletter_consent"]',newsletterForm);
 const status=$('#newsletter-status',newsletterForm);
 if(!name||!email||!consent?.checked){if(status)status.textContent='Please complete your name, email and consent before continuing.';return}
 const subject=encodeURIComponent('FinGuard Insights weekly digest subscription request');
 const body=encodeURIComponent('Please register my request for the weekly FinGuard Insights digest.\n\nName: '+name+'\nEmail: '+email+'\nConsent: I request the weekly digest and consent to the editorial team using my email for this purpose.\n\nPlease confirm when subscription is active.');
 if(status)status.textContent='Opening your email app with a prefilled request. Send the message to complete the request; no automatic mailing-list signup is active yet.';
 window.location.href='mailto:compliance@finguard-insights.com?subject='+subject+'&body='+body;
});
const FG_ARTICLES=[["broker-chart-manipulation-signs","Forex & CFD Market Risk","5 Hidden Signs Your Online Broker May Be Manipulating Price Displays","How to distinguish a normal feed difference from a platform-side price anomaly using timestamps, executable quotes and independent references.","forex"],["offshore-forex-regulatory-perimeter","Forex & CFD Market Risk","The Illusion of Regulation: How Offshore Forex Brokers Can Sit Outside Familiar Investor Protections","A company-registration number can be real while the service still falls outside the financial-services framework a retail client expects.","forex"],["cfd-slippage-liquidation","Forex & CFD Market Risk","The “Slippage” Exploit: How to Test an Unexpected CFD Liquidation","Technical checklist for spread widening, execution delay, stop-outs and broker-side evidence without assuming every price difference is manipulation.","forex"],["margin-call-pressure","Forex & CFD Market Risk","Margin Call Pressure: When an Account Manager Says Another Deposit Will “Save” the Position","How to separate a genuine margin requirement from sales pressure, unexplained insurance fees or escalating rescue deposits.","forex"],["phantom-liquidity-counterparty-risk","Forex & CFD Market Risk","The Phantom Liquidity Trap: Understanding Counterparty Risk in OTC CFD Trading","What B-book, internalisation and market-making actually mean — and which facts would indicate a genuine conflict or execution concern.","forex"],["defi-rug-pull-contract-risk","Crypto & DeFi Security","The Smart Contract Trap: How DeFi Rug Pulls Can Hide in Plain Sight","Admin keys, minting powers, transfer restrictions and liquidity ownership are visible on-chain — if the correct contract is examined.","defi"],["hyip-ai-yield-math","Crypto & DeFi Security","Guaranteed 20% Returns? How to Stress-Test a High-Yield Crypto Investment Model","Use cash-flow math, custody checks and withdrawal behaviour to test whether advertised yield is economically plausible.","defi"],["blockchain-escrow-deception","Crypto & DeFi Security","The Blockchain Escrow Deception: How Fake “Ledger Audits” Create a Balance You Cannot Control","A visible balance or transaction animation is not the same thing as assets controlled by your wallet.","defi"],["wallet-approval-drainer-risk","Crypto & DeFi Security","Liquidity Mining Traps: How Token Approvals Can Expose a Web3 Wallet","What ERC-20 approve/allowance does, why unlimited permissions matter and how a malicious dApp can abuse an approval.","defi"],["ico-presale-exit-risk","Crypto & DeFi Security","The Anatomy of Pre-Sale Manipulation: How to Verify an ICO Before Founder Liquidity Becomes Exit Liquidity","Token allocation, vesting, treasury control and liquidity plans matter more than marketing velocity.","defi"],["fake-exchange-withdrawal-lockout","Crypto Exchange & P2P Risk","How Fake Crypto Exchanges Ghost Investors: The Mechanics of Withdrawal Lockouts","A withdrawal tax, AML deposit or wallet activation fee should be analysed by recipient, legal basis and whether it existed before the withdrawal.","exchange"],["p2p-triangular-fraud","Crypto Exchange & P2P Risk","The P2P Ledger Problem: How Triangular Fraud Can Pull an Innocent Seller Into a Bank Investigation","Why the payer, exchange counterparty and crypto recipient may be three different people — and what records reduce confusion.","exchange"],["crypto-exchange-phishing-clones","Crypto Exchange & P2P Risk","Phishing the Blockchain: How Look-Alike Crypto Exchange Domains Capture Credentials and 2FA","Domain similarity, reverse-proxy phishing and API-key abuse can be investigated without exposing more credentials.","exchange"],["wash-trading-synthetic-volume","Crypto Exchange & P2P Risk","The Synthetic Volume Illusion: How Wash Trading Can Make an Unverified Exchange Look Liquid","Displayed volume matters only if orders are executable and independently corroborated.","exchange"],["blockchain-traceability-limits","Crypto Exchange & P2P Risk","Blockchain Traceability: What a Permanent Transaction Trail Can — and Cannot — Prove","Transaction hashes, clustering and exchange touchpoints help investigations, but tracing is not recovery.","exchange"],["binary-options-payout-math","Binary Options & High-Risk Products","Binary Options: Why the Payout Math Is Unfavourable — and How Unlicensed Platforms Add Extra Risk","A fixed payout can require a win rate above 50% just to break even; provider integrity adds another layer of risk.","binary"],["binary-bonus-turnover","Binary Options & High-Risk Products","The Bonus Turnover Clause: How a “Free” Credit Can Lock a Binary-Options Account","A welcome bonus can convert a withdrawal request into a large trading-volume obligation.","binary"],["telegram-signal-affiliate-risk","Binary Options & High-Risk Products","The “Luxury Lifestyle” Trap: How Signal Groups Can Hide Broker-Affiliate Incentives","A signal seller may earn from deposits, trading activity or losses — incentives that should be understood before the advice is trusted.","binary"],["platform-side-execution-delay","Binary Options & High-Risk Products","Platform-Side Data Feeds: How to Investigate Execution Delay in Short-Duration Options","With 60-second products, a one-second timing mismatch can change the result — evidence has to be precise.","binary"],["retail-binary-options-regulation","Binary Options & High-Risk Products","The Retail Binary Ban: What UK and European Regulatory Restrictions Actually Mean","The UK prohibition is permanent; EU treatment should be verified nationally rather than described as one permanent EU-wide rule.","binary"],["bank-transfer-authorised-fraud","Bank Wire, SEPA & SWIFT","Bank Transfer Liability: Can You Reverse a Wire Payment If You Were Deceived?","A completed authorised transfer is not a cancel button. The bank needs beneficiary data, chronology and the correct process.","wire"],["swift-escrow-dispute","Bank Wire, SEPA & SWIFT","International Escrow Disputes: What a Sending Bank Can Check After a High-Value SWIFT Transfer","Map the originating bank, correspondent path, beneficiary bank and commercial representation before assuming a wire can be reversed.","wire"],["sepa-recall-procedure","Bank Wire, SEPA & SWIFT","The SEPA Recall Procedure: What the Current SCT Rulebook Actually Allows","The EPC rulebook has defined recall reasons and deadlines; it is not a general right to cancel any transfer.","wire"],["correspondent-bank-aml-role","Bank Wire, SEPA & SWIFT","Correspondent Banks in a Suspicious Wire: What AML Controls Can — and Cannot — Do for Senders","Financial-crime controls may detect or stop activity, but they do not create a universal reimbursement guarantee.","wire"],["beneficiary-name-mismatch","Bank Wire, SEPA & SWIFT","The Name Mismatch Problem: What Verification of Payee Changes — and What It Does Not","A name/IBAN check can warn of mismatches, but liability still depends on the payment context, warnings and rules.","wire"],["cardholder-dispute-rules","Card Payments & Dispute Frameworks","Payment Network Arbitration: How Card Rules Distinguish Unauthorized Debits from Merchant Disputes","The first question is whether the cardholder authorised the payment; that leads to a different path from a merchant-service complaint.","card"],["merchant-category-code-risk","Card Payments & Dispute Frameworks","The Merchant Category Code (MCC) Problem: When a Financial Service Appears as Something Else on the Card Statement","A surprising MCC is evidence to investigate — not automatic proof of fraud or dispute eligibility.","card"],["card-dispute-120-540-days","Card Payments & Dispute Frameworks","120 Days or 540 Days? What Visa and Mastercard Dispute Windows Actually Mean","The 540-day figure is an outside limit in specific conditions, not a universal extended chargeback period.","card"],["acquirer-reserves-high-risk","Card Payments & Dispute Frameworks","The Payment Gateway Buffer: How Acquirers Use Reserves and Monitoring for High-Risk Merchants","Rolling reserves and network monitoring manage merchant risk; they do not mean every complaint is backed by money earmarked for the cardholder.","card"],["recovery-scam-second-loss","Card Payments & Dispute Frameworks","The “Recovery Scam” Trap: How Fraudsters Target People Who Already Lost Money","A caller who knows the old loss may have data — not recovered assets. Verify identity and the claimed process before paying anything.","recovery"]];

const FG_HOME_PHOTOS={
 "merchant-category-code-risk":"https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1600&q=85",
 "card-dispute-120-540-days":"https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1600&q=85",
 "offshore-forex-regulatory-perimeter":"https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=85",
 "broker-chart-manipulation-signs":"https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&w=1600&q=85",
 "hyip-ai-yield-math":"https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1600&q=85",
 "recovery-scam-second-loss":"https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1600&q=85",
 "fake-exchange-withdrawal-lockout":"https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&w=1600&q=85"
};
function fgEscapeHtml(value){
 return String(value??'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
}
function fgRenderFeaturedHome(){
 const host=$("#rotating-investigations");
 if(!host||host.querySelector(".story"))return;
 const order=["fake-exchange-withdrawal-lockout","offshore-forex-regulatory-perimeter","card-dispute-120-540-days","broker-chart-manipulation-signs","hyip-ai-yield-math","recovery-scam-second-loss"];
 host.innerHTML=order.map((slug,i)=>{
  const a=FG_ARTICLES.find(item=>item[0]===slug);
  if(!a)return "";
  const photo=FG_HOME_PHOTOS[slug]||FG_HOME_PHOTOS["merchant-category-code-risk"];
  return '<article class="story '+(i===0?'featured':'')+'"><a class="story-link" href="articles/'+slug+'.html"><img src="'+photo+'" alt="'+fgEscapeHtml(a[2])+'" loading="'+(i===0?'eager':'lazy')+'" decoding="async"><div class="meta">'+fgEscapeHtml(a[1])+'</div><h3>'+fgEscapeHtml(a[2])+'</h3><p>'+fgEscapeHtml(a[3])+'</p><span class="read">Read Analysis →</span></a></article>';
 }).join("");
}
function fgApplyPhotoPresentation(){
 const fallback=location.pathname.includes("/articles/")?"../assets/img/hero-cyber-shield.svg":"assets/img/hero-cyber-shield.svg";
 $$('img').forEach(img=>{
  const card=img.closest('a.story-link,a.card-link');
  const figure=img.closest('.article-image');
  const cardTitle=card?.querySelector('h3')?.textContent.trim();
  const articleTitle=$('.article h1')?.textContent.trim();
  if((!img.alt||/editorial.*image/i.test(img.alt))&&(cardTitle||articleTitle))img.alt=cardTitle||articleTitle;
  if(card&&!img.hasAttribute('loading'))img.loading='lazy';
  if(figure&&!img.hasAttribute('loading'))img.loading=figure.classList.contains('secondary')?'lazy':'eager';
  img.decoding='async';
  img.classList.add('photo-image');
  if(!img.dataset.fgPhotoFallbackBound){
   img.dataset.fgPhotoFallbackBound='1';
   img.addEventListener('error',()=>{
    if(!img.dataset.fgPhotoFallback){
     img.dataset.fgPhotoFallback='1';
     img.src=fallback;
    }
   });
  }
 });
}
function fgInitQuizzes(){
 $$('.quiz').forEach(quiz=>{
  const steps=$$('.quiz-step',quiz);
  if(!steps.length)return;
  const answers={};
  const form=$('form',quiz);
  const country=quiz.querySelector('[data-country],select[name="country"]');
  const dial=$("select[name=\"dial_code\"]",quiz);
  if(dial){
   const regions={GB:"+44",DE:"+49",FR:"+33",ES:"+34",IT:"+39",NL:"+31",AT:"+43",CH:"+41",IE:"+353",PT:"+351",PL:"+48",SE:"+46",NO:"+47",DK:"+45",FI:"+358",AU:"+61"};
   try{const locale=new Intl.Locale(navigator.languages?.[0]||navigator.language||"en-GB");if(regions[locale.region])dial.value=regions[locale.region]}catch(e){}
  }
  const endpoint=quiz.dataset.endpoint||'../submit.php';
  const thankyou=quiz.dataset.thankyou||'../thank-you.html';
  let status=null;
  if(form){
   let answerField=$('input[name="answers"]',form);
   if(!answerField){answerField=document.createElement('input');answerField.type='hidden';answerField.name='answers';form.appendChild(answerField)}
   status=document.createElement('p');status.className='quiz-submit-status';status.setAttribute('role','status');status.setAttribute('aria-live','polite');form.appendChild(status);
  }
  steps.forEach(step=>{
   if(Number(step.dataset.step)>1&&!$('.quiz-back',step)){
    const back=document.createElement('button');back.type='button';back.className='quiz-back';back.textContent='← Back';step.insertBefore(back,step.firstChild);
   }
  });
  function showStep(number){
   const n=Math.max(1,Math.min(steps.length,number));
   steps.forEach(step=>step.classList.toggle('active',Number(step.dataset.step)===n));
   quiz.dataset.currentStep=String(n);
   const label=$('[data-step-label]',quiz);
   if(label)label.textContent='Step '+n+' of '+steps.length;
   const bar=$('.progress > div',quiz);
   if(bar)bar.style.width=(n/steps.length*100)+'%';
   if(status)status.textContent='';
  }
  function validation(step,message){
   let note=$('.quiz-validation',step);
   if(!note){
    note=document.createElement('p');note.className='quiz-validation';note.setAttribute('role','alert');
    const options=$('.option-grid',step);
    if(options)options.parentNode.insertBefore(note,options);else step.appendChild(note);
   }
   note.textContent=message;
  }
  quiz.addEventListener('click',event=>{
   const back=event.target.closest('.quiz-back');
   if(back){event.preventDefault();showStep(Number(quiz.dataset.currentStep||1)-1);return}
   const option=event.target.closest('.qopt');
   if(!option||!quiz.contains(option))return;
   event.preventDefault();
   const step=option.closest('.quiz-step');
   const key=option.dataset.key;
   if(!key)return;
   if(key==='timing'&&country&&!country.value){
    validation(step,'Please select your country of residence before continuing.');
    country.focus();
    return;
   }
   answers[key]=option.dataset.answer||'';
   if(key==='timing'&&country)answers.country=country.value;
   $$('[data-key="'+key+'"]',step).forEach(button=>button.classList.toggle('sel',button===option));
   const note=$('.quiz-validation',step);if(note)note.textContent='';
   showStep(Number(step.dataset.step)+1);
  });
  if(country)country.addEventListener('change',()=>{
   answers.country=country.value;
   const step=country.closest('.quiz-step');
   const note=step&&$('.quiz-validation',step);if(note)note.textContent='';
  });
  if(form)form.addEventListener('submit',async event=>{
   event.preventDefault();
   if(!form.reportValidity())return;
   const requiredKeys=['service','status','payment','timing'];
   const missing=requiredKeys.find(key=>!answers[key]);
   if(missing){
    const target=steps.find(step=>step.querySelector('.qopt[data-key="'+missing+'"]'));
    if(target){showStep(Number(target.dataset.step));validation(target,'Please choose one option to continue.')}
    return;
   }
   if(country&&!country.value){
    const target=country.closest('.quiz-step');showStep(Number(target.dataset.step));validation(target,'Please select your country of residence.');country.focus();return;
   }
   const honeypot=$('input[name="website"]',form);
   if(honeypot&&honeypot.value)return;
   if(country)answers.country=country.value;
   const fd=new FormData(form);
   fd.set('answers',JSON.stringify(answers));
   if(country)fd.set('country',country.value);
   fd.set('consent',$('input[type="checkbox"][required]',form)?.checked?'yes':'no');
   const name=String(fd.get('first_name')||'').trim();
   const email=String(fd.get('email')||'').trim();
   const phone=(String(fd.get('dial_code')||'')+' '+String(fd.get('phone')||'')).trim();
   if(status)status.textContent='Sending your request…';
   try{
    const response=await fetch(endpoint,{method:'POST',body:fd,headers:{Accept:'application/json'}});
    const payload=await response.json().catch(()=>({ok:false}));
    if(response.ok&&payload.ok){location.href=thankyou;return}
    throw new Error('Lead endpoint unavailable');
   }catch(error){
    const lines=[
     'FinGuard Insights — Transaction & Platform Assessment request',
     '',
     'Name: '+name,
     'Email: '+email,
     'Phone: '+phone,
     'Article: '+(fd.get('article')||location.pathname.split('/').pop()),
     'Phone dial code: '+(fd.get('dial_code')||'Not provided'),
     '',
     'Assessment answers:',
     'Service: '+(answers.service||'Not provided'),
     'Current issue: '+(answers.status||'Not provided'),
     'Payment method: '+(answers.payment||'Not provided'),
     'Timing: '+(answers.timing||'Not provided'),
     '',
     'Campaign tracking:',
     'UTM source: '+(fd.get('utm_source')||''),
     'UTM campaign: '+(fd.get('utm_campaign')||''),
     'Campaign: '+(fd.get('campaign')||''),
     'Ad set: '+(fd.get('adset')||''),
     'Creative: '+(fd.get('creative')||''),
     'Sub-ID: '+(fd.get('subid')||''),
     '',
     'Consent: I agree that my information may be used to provide the requested checklist and respond to my enquiry.'
    ];
    if(status)status.textContent='Automatic submission is unavailable on this static site. Your email app should open with the completed request; review and send the message to submit it. If no email app opens, contact compliance@finguard-insights.com.';
    const subject=encodeURIComponent('FinGuard Insights — assessment request');
    const body=encodeURIComponent(lines.join('\n'));
    location.href='mailto:compliance@finguard-insights.com?subject='+subject+'&body='+body;
   }
  });
  showStep(1);
 });
}
function fgInitArticlePhotoViewer(){
 const figures=$$('.article .article-image');
 if(!figures.length)return;
 const dialog=document.createElement('dialog');
 dialog.className='photo-lightbox';
 dialog.setAttribute('aria-label','Article photograph');
 dialog.innerHTML='<button type="button" class="photo-close" aria-label="Close enlarged image">×</button><img alt=""><p class="photo-lightbox-caption"></p>';
 document.body.appendChild(dialog);
 const enlarged=$('img',dialog);
 const caption=$('.photo-lightbox-caption',dialog);
 const close=()=>{if(dialog.open)dialog.close()};
 $('.photo-close',dialog).addEventListener('click',close);
 dialog.addEventListener('click',event=>{if(event.target===dialog)close()});
 figures.forEach(figure=>{
  const img=$('img',figure);
  if(!img)return;
  const trigger=document.createElement('button');
  trigger.type='button';
  trigger.className='article-photo-trigger';
  trigger.setAttribute('aria-label','Enlarge article photograph');
  trigger.title='Click to enlarge photograph';
  img.parentNode.insertBefore(trigger,img);
  trigger.appendChild(img);
  trigger.addEventListener('click',()=>{
   enlarged.src=img.currentSrc||img.src;
   enlarged.alt=img.alt;
   caption.textContent=$('figcaption',figure)?.textContent||'Editorial photograph';
   if(typeof dialog.showModal==='function')dialog.showModal();
   else window.open(img.src,'_blank','noopener,noreferrer');
  });
 });
}
fgRenderFeaturedHome();
fgApplyPhotoPresentation();
fgInitArticlePhotoViewer();
fgInitQuizzes();

})();