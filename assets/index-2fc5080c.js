(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))m(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&m(l)}).observe(document,{childList:!0,subtree:!0});function i(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function m(r){if(r.ep)return;r.ep=!0;const o=i(r);fetch(r.href,o)}})();const I=document.querySelector(".signInForm"),d=document.querySelector(".signUpForm"),t=document.querySelector(".infoOrErrorNotice"),w=document.querySelector(".dots__list"),u=document.querySelector(".nextButton"),b=document.querySelector(".backButton"),g=document.querySelector(".signUpForm__title"),C=document.getElementById("email"),B=document.getElementById("password"),y=document.getElementById("signUpEmail"),v=document.getElementById("location"),h=document.getElementById("signUpPassword"),f=document.querySelector(".email-error"),p=document.querySelector(".password-error"),c=[...d.children].slice(1,d.children.length),E=[...w.children];let e=0;const L={0:"Who are you",1:"What is your age",2:"I am from",3:"Your email adress",4:"Create your password"},a={0:"",1:"",2:"E.g.: New Roads or 70760 We don’t use postal addresses to contact members directly!",3:"",4:'By clicking the button above you agree to our <a href="#">Terms of Use</a><a href="#">Privacy Policy</a> including use of cookies and to receive newsletters, account updates and offers sent by StarCompany.'};function S(s){return/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(s)}function P(s){return s.length>=4}I.addEventListener("submit",function(s){f.style.display="none",p.style.display="none",S(C.value)||(f.style.display="flex",s.preventDefault()),P(B.value)||(p.style.display="block",s.preventDefault())});const x=(s,n)=>{n.forEach(i=>i.classList.remove("active-step"));for(let i=0;i<=s;i++)n[i].classList.add("active-step")},q=()=>{u.classList.add("startButton"),u.innerHTML='Start now <img src="/img/svg/start.svg" alt="arrow" />'};u.addEventListener("click",()=>{if(e!==5){if(e===2&&v.value.trim().length<=3){t.textContent="Please enter a valid address",t.classList.add("hasError");return}if(e===3){if(!S(y.value)){t.textContent="Please enter a valid email addres",t.classList.add("hasError");return}q()}if(e===4){if(h.value.trim().length<=4){t.textContent="Please enter a valid password",t.classList.add("hasError");return}d.submit();return}e++,x(e,E),e>4?t.textContent=a[e]:t.innerHTML=a[e],g.textContent=L[e],c.forEach(s=>s.classList.remove("active")),c[e].classList.add("active")}});b.addEventListener("click",()=>{e!==0&&(t.classList.remove("hasError"),e--,x(e,E),t.textContent=a[e],g.textContent=L[e],c.forEach(s=>s.classList.remove("active")),c[e].classList.add("active"))});y.addEventListener("focus",()=>{t.classList.remove("hasError"),t.textContent=a[e]});v.addEventListener("focus",()=>{t.classList.remove("hasError"),t.textContent=a[e]});h.addEventListener("focus",()=>{t.classList.remove("hasError"),t.textContent=a[e]});
