(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))m(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&m(d)}).observe(document,{childList:!0,subtree:!0});function i(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function m(r){if(r.ep)return;r.ep=!0;const o=i(r);fetch(r.href,o)}})();const x=document.querySelector(".signInForm"),u=document.querySelector(".signUpForm"),t=document.querySelector(".infoOrErrorNotice"),I=document.querySelector(".dots__list"),c=document.querySelector(".nextButton"),b=document.querySelector(".backButton"),g=document.querySelector(".signUpForm__title"),B=document.getElementById("email"),C=document.getElementById("password"),y=document.getElementById("signUpEmail"),v=document.getElementById("location"),h=document.getElementById("signUpPassword"),f=document.querySelector(".email-error"),p=document.querySelector(".password-error"),l=[...u.children].slice(1,u.children.length),L=[...I.children];let e=0;const E={0:"Who are you",1:"What is your age",2:"I am from",3:"Your email adress",4:"Create your password"},a={0:"",1:"",2:"E.g.: New Roads or 70760 We don’t use postal addresses to contact members directly!",3:"",4:'By clicking the button above you agree to our <a href="#">Terms of Use</a><a href="#">Privacy Policy</a> including use of cookies and to receive newsletters, account updates and offers sent by StarCompany.'};function S(s){return/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(s)}function P(s){return s.length>=4}x.addEventListener("submit",function(s){f.style.display="none",p.style.display="none",S(B.value)||(f.style.display="flex",s.preventDefault()),P(C.value)||(p.style.display="block",s.preventDefault())});const w=(s,n)=>{n.forEach(i=>i.classList.remove("active-step"));for(let i=0;i<=s;i++)n[i].classList.add("active-step")},q=()=>{c.classList.add("startButton"),c.innerHTML='Start now <img src="/star_company/img/svg/start.svg" alt="arrow" />'};c.addEventListener("click",()=>{if(e!==5){if(e===2&&v.value.trim().length<=3){t.textContent="Please enter a valid address",t.classList.add("hasError");return}if(e===3){if(!S(y.value)){t.textContent="Please enter a valid email addres",t.classList.add("hasError");return}q()}if(e===4){if(h.value.trim().length<=4){t.textContent="Please enter a valid password",t.classList.add("hasError");return}u.submit();return}e++,w(e,L),e>4?t.textContent=a[e]:t.innerHTML=a[e],g.textContent=E[e],l.forEach(s=>s.classList.remove("active")),l[e].classList.add("active")}});b.addEventListener("click",()=>{e!==0&&(e===4&&(c.classList.remove("startButton"),c.innerHTML='Next step <img src="/star_company/img/svg/arrow_hover.svg" alt="arrow" />'),t.classList.remove("hasError"),e--,w(e,L),t.textContent=a[e],g.textContent=E[e],l.forEach(s=>s.classList.remove("active")),l[e].classList.add("active"))});y.addEventListener("focus",()=>{t.classList.remove("hasError"),t.textContent=a[e]});v.addEventListener("focus",()=>{t.classList.remove("hasError"),t.textContent=a[e]});h.addEventListener("focus",()=>{t.classList.remove("hasError"),t.textContent=a[e]});