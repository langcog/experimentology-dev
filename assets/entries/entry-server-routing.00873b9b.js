import{_ as c,s as d,d as g,r as u,q as s,h as p,C as f,t as y,j as h,O as v,P as _,M as C,L as F}from"../chunks/chunk-aed556df.js";const i={},x={},b={},m={},E=[],w={},L=!0,P=[],R={onBeforeRoute:null},S=null,z=Object.assign({}),j={...z};i[".page"]=j;const H=Object.assign({"/src/index.page.client.jsx":()=>c(()=>import("./src_index.page.client.c567c3d9.js"),["assets/entries/src_index.page.client.c567c3d9.js","assets/static/index.page.client.51f615d5.css"])}),O={...H};i[".page.client"]=O;const A=Object.freeze(Object.defineProperty({__proto__:null,invalidator:S,isGeneratedFile:L,neverLoaded:w,pageConfigGlobal:R,pageConfigs:P,pageFilesEager:x,pageFilesExportNamesEager:m,pageFilesExportNamesLazy:b,pageFilesLazy:i,pageFilesList:E},Symbol.toStringTag,{value:"Module"}));d(A);const l=g({withoutHash:!0});async function B(){const e=u();return s(e,{isHydration:!0,isBackwardNavigation:null}),s(e,await U(e._pageId)),I(),e}function I(){const e=g({withoutHash:!0});p(l===e,`URL manipulated before hydration finished (\`${l}\` to \`${e}\`). Ensure the hydration finishes with \`onHydrationEnd()\` before manipulating the URL.`)}async function U(e){const a={},{pageFilesAll:t,pageConfigs:r}=await f(!0);return s(a,{_pageFilesAll:t,_pageConfigs:r}),s(a,await y(t,r,e)),t.filter(n=>n.fileType!==".page.server").forEach(n=>{var o;h(!(!((o=n.fileExports)===null||o===void 0)&&o.onBeforeRender),`\`export { onBeforeRender }\` of ${n.filePath} is loaded in the browser but never executed (because you are using Server-side Routing). In order to reduce the size of you browser-side JavaScript, define \`onBeforeRender()\` in \`.page.server.js\` instead. See https://vite-plugin-ssr.com/onBeforeRender-isomorphic#server-routing`,{showStackTrace:!1,onlyOnce:!0})}),a}v();_(!0);T();async function T(){var e,a;const t=await B();await C(t,!1),F(t,"onHydrationEnd"),await((a=(e=t.exports).onHydrationEnd)===null||a===void 0?void 0:a.call(e,t))}
