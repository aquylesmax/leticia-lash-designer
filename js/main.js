document.getElementById('y').textContent=new Date().getFullYear();
const bg=document.querySelector('.burger'),mn=document.getElementById('menu');
bg.onclick=()=>{const o=mn.classList.toggle('open');bg.setAttribute('aria-expanded',o);bg.setAttribute('aria-label',o?'Fechar menu':'Abrir menu')};
mn.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{mn.classList.remove('open');bg.setAttribute('aria-expanded',false)}));
const io=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(r=>io.observe(r));
const lb=document.getElementById('lb'),li=lb.querySelector('img');
document.querySelectorAll('.gi').forEach(b=>b.onclick=()=>{li.src=b.querySelector('img').src;li.alt=b.querySelector('img').alt;lb.showModal()});
lb.querySelector('button').onclick=()=>lb.close();lb.addEventListener('click',e=>{if(e.target===lb)lb.close()});