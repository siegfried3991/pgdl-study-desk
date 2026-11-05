(() => {
'use strict';
const $=id=>document.getElementById(id), bank=window.revisionQuestions;
const units=study.units.filter(u=>u.subject==='equity');
const key='pgdl-equity-rounds-v1';
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const shuffle=xs=>{const a=[...xs];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;};
const hkDay=()=>new Intl.DateTimeFormat('sv-SE',{timeZone:'Asia/Hong_Kong',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date());
let saved={correct:[],missed:[],xp:0,days:[],active:null};
try{const data=JSON.parse(localStorage.getItem(key)||'null');if(data&&Array.isArray(data.correct)&&Array.isArray(data.missed)&&Array.isArray(data.days)&&Number.isFinite(data.xp))saved={...saved,...data};localStorage.setItem(key,JSON.stringify(saved));}catch{$('storage-note').hidden=false;}
const validIds=new Set(bank.map(q=>q.id));
saved.correct=saved.correct.filter(id=>validIds.has(id));saved.missed=saved.missed.filter(id=>validIds.has(id));
if(saved.active&&(!Array.isArray(saved.active.items)||!saved.active.items.length||saved.active.items.some(x=>!validIds.has(x.id)||!Array.isArray(x.options))))saved.active=null;
const persist=()=>{try{localStorage.setItem(key,JSON.stringify(saved));}catch{$('storage-note').hidden=false;}};
const streak=()=>{const days=new Set(saved.days);let date=new Date(hkDay()+'T12:00:00Z');if(!days.has(date.toISOString().slice(0,10)))date.setUTCDate(date.getUTCDate()-1);let n=0;while(days.has(date.toISOString().slice(0,10))){n++;date.setUTCDate(date.getUTCDate()-1);}return n;};
let selected=null;
function stats(){ $('xp').textContent=saved.xp; $('mastered').textContent=`${new Set(saved.correct).size} / ${bank.length}`; $('streak').textContent=streak();$('mistake-count').textContent=`(${saved.missed.length})`;$('mistakes').disabled=!saved.missed.length;$('resume').hidden=!saved.active;
$('unit-path').innerHTML=units.map(u=>{const ids=bank.filter(q=>q.unit===u.number).map(q=>q.id),n=ids.filter(id=>saved.correct.includes(id)).length;return `<div class="unit-step"><span class="number">${u.number}</span><button data-unit="${u.number}">${esc(u.title)}</button><span>${n} / ${ids.length}</span></div>`;}).join('');
$('unit-path').querySelectorAll('[data-unit]').forEach(b=>b.onclick=()=>{$('topic').value=b.dataset.unit;start(false);});
}
function screen(id){['setup','round','result'].forEach(x=>$(x).hidden=x!==id);}
function pool(){return bank.filter(q=>($('topic').value==='all'||q.unit===Number($('topic').value))&&($('format').value==='mixed'||q.kind===$('format').value)&&($('level').value==='all'||q.level===$('level').value));}
function start(mistakes,custom){
 if(saved.active&&!window.confirm('Replace your saved round with a new one? Checked answers and earned XP will remain.'))return;
 let qs=custom|| (mistakes?bank.filter(q=>saved.missed.includes(q.id)):pool());
 if(!qs.length){$('setup-status').textContent='No questions in this selection yet. Try another topic or style.';return;}
 // Interleave unmastered and previously correct questions, without losing either question style.
 let ordered=shuffle(qs.filter(q=>!saved.correct.includes(q.id))).concat(shuffle(qs.filter(q=>saved.correct.includes(q.id))));
 if(!mistakes&&!custom&&$('format').value==='mixed'){
 const mc=ordered.filter(q=>q.kind==='mc'),bl=ordered.filter(q=>q.kind==='blank');ordered=[];while(mc.length||bl.length){if(mc.length)ordered.push(mc.shift());if(bl.length)ordered.push(bl.shift());}
 }
 saved.active={items:ordered.slice(0,8).map(q=>({id:q.id,options:shuffle(q.options),chosen:null,correct:null})),index:0,combo:0};persist();render();
}
function current(){const a=saved.active,item=a.items[a.index];return {a,item,q:bank.find(q=>q.id===item.id)};}
function render(){if(!saved.active){screen('setup');stats();return;}screen('round');const {a,item,q}=current();selected=item.chosen;
 $('round-count').textContent=`Question ${a.index+1} of ${a.items.length}`;$('combo').textContent=a.combo>1?`${a.combo} correct in a row`:'';
 $('round-progress').max=a.items.length;$('round-progress').value=a.items.filter(i=>i.correct!==null).length;
 $('question-type').textContent=`Unit ${q.unit} · ${q.level==='advanced'?'Applied / harder':'Foundation'} · ${q.kind==='mc'?'Multiple choice':'Word-bank blank'}`;
 $('question-help').textContent=q.kind==='mc'?'Choose the single best answer.':'Choose the option that completes the rule.';
 $('round-title').innerHTML=esc(q.prompt).replace('___',`<span class="blank">${esc(selected===null?'…':selected)}</span>`);
 $('options').className='options'+(q.kind==='blank'?' wordbank':'');
 $('options').innerHTML=item.options.map((o,i)=>`<button class="option${item.correct!==null&&o===q.answer?' correct':''}${item.correct===false&&o===item.chosen?' incorrect':''}" aria-pressed="${selected===o}" ${item.correct!==null?'disabled':''} data-choice="${i}"><span class="letter" aria-hidden="true">${String.fromCharCode(65+i)}</span><span>${esc(o)}</span></button>`).join('');
 $('options').querySelectorAll('[data-choice]').forEach(b=>b.onclick=()=>{selected=item.options[Number(b.dataset.choice)];$('options').querySelectorAll('button').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));$('round-title').innerHTML=esc(q.prompt).replace('___',`<span class="blank">${esc(selected)}</span>`);$('check').disabled=false;});
 $('check').hidden=item.correct!==null;$('check').disabled=selected===null;$('next').hidden=item.correct===null;$('next').textContent=a.index===a.items.length-1?'See round results':'Next question';
 $('feedback').className='';$('feedback').innerHTML='';
 if(item.correct!==null)feedback(q,item);
 $('round-title').focus({preventScroll:true});
}
function feedback(q,item){const u=units.find(u=>u.number===q.unit);$('feedback').className='feedback'+(item.correct?'':' wrong');$('feedback').innerHTML=`<strong>${item.correct?'Correct — keep going.':'Not quite — here is the distinction.'}</strong><p><b>Best answer:</b> ${esc(q.answer)}</p><p>${esc(q.why)}</p><a href="index.html#eq-${q.unit}" target="_blank" rel="noopener">Review Unit ${q.unit} notes</a><a href="exam-prep.html#read-${q.unit}" target="_blank" rel="noopener">Reading guide &amp; written practice</a><a href="${esc(study.subjects.equity.course)}" target="_blank" rel="noopener">Assigned course materials (sign-in)</a><p class="small">Practice source: ${esc(u.title)}, existing Study Desk revision notes. Follow the unit’s readings for the full rule.</p>`;}
$('check').onclick=()=>{const {a,item,q}=current();if(selected===null||item.correct!==null)return;item.chosen=selected;item.correct=selected===q.answer;if(item.correct){a.combo++;if(!saved.correct.includes(q.id)){saved.correct.push(q.id);saved.xp+=10;}saved.missed=saved.missed.filter(id=>id!==q.id);}else{a.combo=0;if(!saved.missed.includes(q.id))saved.missed.push(q.id);}persist();stats();render();$('next').focus({preventScroll:true});};
function finish(){const a=saved.active;let correct=a.items.filter(x=>x.correct).length;saved.xp+=5;if(!saved.days.includes(hkDay()))saved.days.push(hkDay());const misses=a.items.filter(i=>!i.correct).map(i=>bank.find(q=>q.id===i.id));saved.active=null;persist();stats();screen('result');$('result-title').textContent=`${correct} / ${a.items.length} on your first try`;$('result-message').textContent=misses.length?`Round complete: +5 XP. Revisit ${misses.length} distinction${misses.length===1?'':'s'}, then try those questions again.`:'Round complete: +5 XP. All correct this round. Try another unit or explain each rule aloud without the options.';
$('round-review').innerHTML=a.items.map(i=>{const q=bank.find(q=>q.id===i.id);return `<details><summary>${i.correct?'✓ Correct':'↻ Review'} · ${esc(q.prompt)}</summary><p>Your answer: ${esc(i.chosen)}</p><p><b>Best answer:</b> ${esc(q.answer)}</p><p>${esc(q.why)}</p><a href="index.html#eq-${q.unit}" target="_blank" rel="noopener">Review Unit ${q.unit}</a></details>`;}).join('');$('retry').hidden=!misses.length;$('retry').onclick=()=>start(true,misses);$('result-title').focus({preventScroll:true});}
$('next').onclick=()=>{const {a,item}=current();if(item.correct===null)return;if(a.index===a.items.length-1)finish();else{a.index++;persist();render();}};
$('pause').onclick=()=>{persist();screen('setup');stats();$('resume').focus();};
$('start').onclick=()=>start(false);$('mistakes').onclick=()=>start(true);$('resume').onclick=render;$('another').onclick=()=>{screen('setup');stats();$('start').focus();};
$('reset').onclick=()=>{if(window.confirm('Reset only practice XP, mistakes, streak and saved round? Your main Study Desk progress will stay in place.')){saved={correct:[],missed:[],xp:0,days:[],active:null};persist();screen('setup');stats();}};
units.forEach(u=>{const o=document.createElement('option');o.value=u.number;o.textContent=`Unit ${u.number}: ${u.title}`;$('topic').append(o);});
const requested=new URLSearchParams(location.search);if(['all','foundation','advanced'].includes(requested.get('level')))$('level').value=requested.get('level');if(units.some(u=>String(u.number)===requested.get('unit')))$('topic').value=requested.get('unit');
stats();screen('setup');
})();
