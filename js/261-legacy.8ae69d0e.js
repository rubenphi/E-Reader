"use strict";(self["webpackChunkE_Reader"]=self["webpackChunkE_Reader"]||[]).push([[261],{4261:(t,e,r)=>{r.r(e),r.d(e,{MENU_BACK_BUTTON_PRIORITY:()=>o,OVERLAY_BACK_BUTTON_PRIORITY:()=>i,blockHardwareBackButton:()=>n,startHardwareBackButton:()=>a});
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const n=()=>{document.addEventListener("backbutton",(()=>{}))},a=()=>{const t=document;let e=!1;t.addEventListener("backbutton",(()=>{if(e)return;let r=0,n=[];const a=new CustomEvent("ionBackButton",{bubbles:!1,detail:{register(t,e){n.push({priority:t,handler:e,id:r++})}}});t.dispatchEvent(a);const i=async t=>{try{if(null===t||void 0===t?void 0:t.handler){const e=t.handler(o);null!=e&&await e}}catch(e){console.error(e)}},o=()=>{if(n.length>0){let t={priority:Number.MIN_SAFE_INTEGER,handler:()=>{},id:-1};n.forEach((e=>{e.priority>=t.priority&&(t=e)})),e=!0,n=n.filter((e=>e.id!==t.id)),i(t).then((()=>e=!1))}};o()}))},i=100,o=99}}]);
//# sourceMappingURL=261-legacy.8ae69d0e.js.map