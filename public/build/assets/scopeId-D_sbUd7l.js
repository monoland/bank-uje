import{I as te}from"./VSheet-BjPcy6k6.js";import{p as P,i as V,e as y,r as oe,ah as w,as as j,F as H,n as M,B as Z,H as ne,s as ae,at as se,au as ue,E as le,U as R,av as ie,aw as re}from"./app-AY_n_tr-.js";const $=Symbol.for("vuetify:layout"),F=Symbol.for("vuetify:layout-item"),K=1e3,fe=P({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),me=P({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function pe(){const o=V($);if(!o)throw new Error("[Vuetify] Could not find injected layout");return{layoutIsReady:M(),getLayoutItem:o.getLayoutItem,mainRect:o.mainRect,mainStyles:o.mainStyles}}function ge(o){const e=V($);if(!e)throw new Error("[Vuetify] Could not find injected layout");const n=o.id??`layout-item-${ne()}`,l=H("useLayoutItem");Z(F,{id:n});const s=ae(!1);se(()=>s.value=!0),ue(()=>s.value=!1);const r=M(),{layoutItemStyles:u,layoutItemScrimStyles:c}=e.register(l,{...o,active:y(()=>s.value?!1:o.active.value),id:n});return le(()=>e.unregister(n)),{layoutItemStyles:u,layoutRect:e.layoutRect,layoutItemScrimStyles:c,layoutIsReady:r}}const ce=(o,e,n,l)=>{let s={top:0,left:0,right:0,bottom:0};const r=[{id:"",layer:{...s}}];for(const u of o){const c=e.get(u),f=n.get(u),L=l.get(u);if(!c||!f||!L)continue;const g={...s,[c.value]:parseInt(s[c.value],10)+(L.value?parseInt(f.value,10):0)};r.push({id:u,layer:g}),s=g}return r};function Ie(o){const e=V($,null),n=y(()=>e?e.rootZIndex.value-100:K),l=oe([]),s=w(new Map),r=w(new Map),u=w(new Map),c=w(new Map),f=w(new Map),{resizeRef:L,contentRect:g}=te(),I=j(()=>{const a=[...new Set([...u.values()].map(t=>t.value))].sort((t,m)=>t-m),d=[];for(const t of a){const m=l.value.filter(i=>{var p;return((p=u.get(i))==null?void 0:p.value)===t});d.push(...m)}return ce(d,s,r,c)}),O=y(()=>!Array.from(f.values()).some(a=>a.value)),h=y(()=>I.value[I.value.length-1].layer),X=y(()=>({"--v-layout-left":R(h.value.left),"--v-layout-right":R(h.value.right),"--v-layout-top":R(h.value.top),"--v-layout-bottom":R(h.value.bottom),...O.value?void 0:{transition:"none"}})),x=j(()=>I.value.slice(1).map((a,d)=>{let{id:t}=a;const{layer:m}=I.value[d],i=r.get(t),p=s.get(t);return{id:t,...m,size:Number(i.value),position:p.value}})),T=a=>x.value.find(d=>d.id===a),z=H("createLayout"),k=M();Z($,{register:(a,d)=>{let{id:t,order:m,position:i,layoutSize:p,elementSize:S,active:A,disableTransitions:B,absolute:Y}=d;u.set(t,m),s.set(t,i),r.set(t,p),c.set(t,A),B&&f.set(t,B);const U=ie(F,z==null?void 0:z.vnode).indexOf(a);U>-1?l.value.splice(U,0,t):l.value.push(t);const D=y(()=>x.value.findIndex(b=>b.id===t)),C=y(()=>n.value+I.value.length*2-D.value*2),_=y(()=>{const b=i.value==="left"||i.value==="right",E=i.value==="right",J=i.value==="bottom",N=S.value??p.value,Q=N===0?"%":"px",ee={[i.value]:0,zIndex:C.value,transform:`translate${b?"X":"Y"}(${(A.value?0:-(N===0?100:N))*(E||J?-1:1)}${Q})`,position:Y.value||n.value!==K?"absolute":"fixed",...O.value?void 0:{transition:"none"}};if(D.value<0)throw new Error(`Layout item "${t}" is missing`);const v=x.value[D.value];if(!v)throw new Error(`[Vuetify] Could not find layout item "${t}"`);return{...ee,height:b?`calc(100% - ${v.top}px - ${v.bottom}px)`:S.value?`${S.value}px`:void 0,left:E?void 0:`${v.left}px`,right:E?`${v.right}px`:void 0,top:i.value!=="bottom"?`${v.top}px`:void 0,bottom:i.value!=="top"?`${v.bottom}px`:void 0,width:b?S.value?`${S.value}px`:void 0:`calc(100% - ${v.left}px - ${v.right}px)`}}),G=y(()=>({zIndex:C.value-1}));return{layoutItemStyles:_,layoutItemScrimStyles:G,zIndex:C}},unregister:a=>{u.delete(a),s.delete(a),r.delete(a),c.delete(a),f.delete(a),l.value=l.value.filter(d=>d!==a)},mainRect:h,mainStyles:X,getLayoutItem:T,items:x,layoutRect:g,rootZIndex:n,layoutIsReady:k});const q=y(()=>["v-layout",{"v-layout--full-height":o.fullHeight}]),W=y(()=>({zIndex:e?n.value:void 0,position:e?"relative":void 0,overflow:e?"hidden":void 0}));return{layoutClasses:q,layoutStyles:W,getLayoutItem:T,items:x,layoutRect:g,layoutIsReady:k,layoutRef:L}}const he=P({closeDelay:[Number,String],openDelay:[Number,String]},"delay");function xe(o,e){let n=()=>{};function l(u){n==null||n();const c=Number(u?o.openDelay:o.closeDelay);return new Promise(f=>{n=re(c,()=>{e==null||e(u),f(u)})})}function s(){return l(!0)}function r(){return l(!1)}return{clearDelay:n,runOpenDelay:s,runCloseDelay:r}}function Se(){const e=H("useScopeId").vnode.scopeId;return{scopeId:e?{[e]:""}:void 0}}export{$ as V,pe as a,me as b,ge as c,xe as d,fe as e,Ie as f,he as m,Se as u};