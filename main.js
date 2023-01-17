(()=>{"use strict";const e=(()=>{let e=[],t=-1,a=!1;return{getCurrentPlayer:()=>e[t],addPlayer:t=>{e.push(t)},clear:()=>{e=[],t=-1},changeCurrentPlayer:()=>{if(a)return;t+=1,(t>=e.length||t<0)&&(t=0);let r=t+1;r>=e.length&&(r=0);const n=e[t];n.setMyTurn(!0);const l=e[r];if(l.setMyTurn(!1),n.getAutoPlay()){const e=n.getGameboard().getBoard().length;for(;n.getAutoPlay();){let a=Math.floor(Math.random()*e),r=Math.floor(Math.random()*e);if(n.canAttack(a,r)){n.attack(l,a,r),n.setMyTurn(!1),t=0;break}}}for(const t of e)if(t.getGameboard().allShipsSunk()){a=!0,document.getElementById("status").textContent="Game over";break}},isGameOver:()=>a}})(),t=e=>{if(!e||e<1)throw"length must be greater than 0";if(e>5)throw"length must be less than 5";const t=e,a=Array(t).fill(!1);let r=0,n=-1,l=-1;return{getLength:()=>t,hit:(e,c)=>{if(e!==n)return!1;const d=c-l;return d>=0&&d<a.length&&(!1===a[d]&&(a[d]=!0,r<t&&(r+=1)),!0)},getHits:()=>r,isSunk:()=>r===t,setCoord:(e,t)=>{n=e,l=t}}},a=(a,r,n,l=!0,c=!1)=>{const d=((e,a=!1)=>{const r=e,n=a;let l=null;const c=[];let d=!1;return{getId:()=>r,getAutoPlay:()=>n,getMyTurn:()=>d,setMyTurn:e=>{d=e},createGameboard:e=>{for(let t=0;t<e;t++){const t=[];c.push(t);for(let a=0;a<e;a++)t.push(!1)}l=(e=>{const t=e,a=[],r=[];for(let t=0;t<e;t++){const t=[];a.push(t);for(let a=0;a<e;a++)t.push(null)}return{getBoard:()=>a,receiveAttack:(e,t)=>{for(const n of r)if(n.hit(e,t))return a[e][t]=-1*a[e][t],!0;return!1},canPlaceShip:(e,r,n)=>{if(r<0||n<0||r>=t||n>=t)return!1;if(r+e.getLength()>=t)return!1;for(let t=0;t<e.getLength();t++)if(null!=a[r][n+t])return!1;return!0},placeShip:(e,t,n)=>{e.setCoord(t,n);for(let r=0;r<e.getLength();r++)a[t][n+r]=1;r.push(e)},allShipsSunk:()=>r.every((e=>e.isSunk()))}})(e);let a=0,r=5;for(;a<=5;){let e=Math.floor(5*Math.random()),n=Math.floor(5*Math.random());const c=t(r);l.canPlaceShip(c,e,n)&&(l.placeShip(c,e,n),r>=3&&(r-=1),a+=1)}},getGameboard:()=>l,canAttack:(e,t)=>!c[e][t],attack:(e,t,a)=>e.receiveAttack(t,a),receiveAttack:(e,t)=>{const a=l.receiveAttack(e,t),n=document.getElementById(`${r}_${e}_${t}`);return a?n.classList.add("cell-hit"):n.classList.add("cell-miss"),a}}})(n,c);d.createGameboard(r);const s=d.getGameboard().getBoard(),o=document.createElement("div"),i=document.createElement("div");i.classList.add("player-name"),i.textContent=a,o.appendChild(i);const u=document.createElement("div");u.id=n,u.classList.add("gameboard"),o.appendChild(u);for(let t=0;t<r;t++)for(let a=0;a<r;a++){const r=document.createElement("div");r.id=`${n}_${t}_${a}`,r.classList.add("cell"),s[t][a]>0&&l?r.classList.add("cell-safe"):s[t][a]<0&&r.classList.add("cell-hit"),"computer"===n&&r.addEventListener("click",(()=>{e.isGameOver()||d.getMyTurn()||(!0===d.receiveAttack(t,a)?r.classList.add("cell-hit"):r.classList.add("cell-miss"),e.changeCurrentPlayer())})),u.appendChild(r)}return{element:o,player:d}},r=(()=>{const t=document.createElement("div");t.id="app";const r=document.createElement("button");r.id="newGame",r.classList.add("btn","btn-primary"),r.textContent="New game",t.appendChild(r);const n=document.createElement("div");n.id="boards",n.classList.add("boards"),t.appendChild(n),r.addEventListener("click",(()=>{e.clear(),n.innerHTML="";const t=a("Player",10,"player",!0,!1),r=a("Computer",10,"computer",!1,!0);n.appendChild(t.element),n.appendChild(r.element),e.addPlayer(t.player),e.addPlayer(r.player),e.changeCurrentPlayer()}));const l=document.createElement("div");return l.id="status",t.appendChild(l),t})();document.getElementById("root").appendChild(r)})();