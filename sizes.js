(function(){
var S=[['10×7',10],['15×21',15],['20×30',20]];
var st=document.createElement('style');
st.textContent='.card>div .szs{padding:0;display:flex;flex-direction:row;gap:6px;width:100%}.card>div .szs button{position:static;transform:none;border-radius:12px;width:auto;height:auto;flex:1;padding:8px 2px;font-size:.95rem;line-height:1.25;font-weight:700;direction:ltr}.card>div .szs button::after{content:none}.card>div .szs button small{display:block;font-weight:500;font-size:.78rem}.card>div .szs button.added{background:#5fae7a}.card>div button.orig{display:none}.szlbl{font-size:.85rem;font-weight:600}';
document.head.appendChild(st);
document.querySelectorAll('#posters .card').forEach(function(c){
var o=c.querySelector('button[data-id]');if(!o)return;
var base=o.getAttribute('data-n');o.classList.add('orig');
var p=c.querySelector('.price');if(p){p.textContent='اختار المقاس لإضافته للسلة'}
var w=document.createElement('div');w.className='szs';
S.forEach(function(s){
var b=document.createElement('button');b.type='button';b.setAttribute('data-sz',s[0]);
b.innerHTML=s[0]+'<small>'+s[1]+' ج</small>';
b.onclick=function(){o.dataset.n=base+' - مقاس \u2066'+s[0]+'\u2069 ('+s[1]+' ج)';o.click();b.classList.add('added');setTimeout(function(){b.classList.remove('added')},900)};
w.appendChild(b)});
o.parentNode.appendChild(w)});
})();
