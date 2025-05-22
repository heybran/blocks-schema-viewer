(()=>{"use strict";const t=window.wp.i18n,e=window.wp.components,s=window.wp.data,i=window.wp.editor,r=window.wp.plugins,n=window.wp.element,o=globalThis,a=o.ShadowRoot&&(void 0===o.ShadyCSS||o.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,l=Symbol(),h=new WeakMap;class c{constructor(t,e,s){if(this._$cssResult$=!0,s!==l)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(a&&void 0===t){const s=void 0!==e&&1===e.length;s&&(t=h.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&h.set(e,t))}return t}toString(){return this.cssText}}const d=(t,e)=>{if(a)t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const s of e){const e=document.createElement("style"),i=o.litNonce;void 0!==i&&e.setAttribute("nonce",i),e.textContent=s.cssText,t.appendChild(e)}},u=a?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return(t=>new c("string"==typeof t?t:t+"",void 0,l))(e)})(t):t,{is:p,defineProperty:f,getOwnPropertyDescriptor:$,getOwnPropertyNames:m,getOwnPropertySymbols:g,getPrototypeOf:_}=Object,v=globalThis,y=v.trustedTypes,b=y?y.emptyScript:"",A=v.reactiveElementPolyfillSupport,w=(t,e)=>t,S={toAttribute(t,e){switch(e){case Boolean:t=t?b:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},E=(t,e)=>!p(t,e),x={attribute:!0,type:String,converter:S,reflect:!1,hasChanged:E};Symbol.metadata??=Symbol("metadata"),v.litPropertyMetadata??=new WeakMap;class k extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=x){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);void 0!==i&&f(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:r}=$(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return i?.call(this)},set(e){const n=i?.call(this);r.call(this,e),this.requestUpdate(t,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??x}static _$Ei(){if(this.hasOwnProperty(w("elementProperties")))return;const t=_(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(w("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(w("properties"))){const t=this.properties,e=[...m(t),...g(t)];for(const s of e)this.createProperty(s,t[s])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,s]of e)this.elementProperties.set(t,s)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const s=this._$Eu(t,e);void 0!==s&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(u(t))}else void 0!==t&&e.push(u(t));return e}static _$Eu(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return d(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EC(t,e){const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(void 0!==i&&!0===s.reflect){const r=(void 0!==s.converter?.toAttribute?s.converter:S).toAttribute(e,s.type);this._$Em=t,null==r?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(t,e){const s=this.constructor,i=s._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=s.getPropertyOptions(i),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:S;this._$Em=i,this[i]=r.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,s){if(void 0!==t){if(s??=this.constructor.getPropertyOptions(t),!(s.hasChanged??E)(this[t],e))return;this.P(t,e,s)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,s){this._$AL.has(t)||this._$AL.set(t,e),!0===s.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,s]of t)!0!==s.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],s)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU()}updated(t){}firstUpdated(t){}}k.elementStyles=[],k.shadowRootOptions={mode:"open"},k[w("elementProperties")]=new Map,k[w("finalized")]=new Map,A?.({ReactiveElement:k}),(v.reactiveElementVersions??=[]).push("2.0.4");const C=globalThis,P=C.trustedTypes,O=P?P.createPolicy("lit-html",{createHTML:t=>t}):void 0,U="$lit$",N=`lit$${Math.random().toFixed(9).slice(2)}$`,j="?"+N,R=`<${j}>`,T=document,M=()=>T.createComment(""),H=t=>null===t||"object"!=typeof t&&"function"!=typeof t,I=Array.isArray,z="[ \t\n\f\r]",D=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,L=/-->/g,B=/>/g,F=RegExp(`>|${z}(?:([^\\s"'>=/]+)(${z}*=${z}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),V=/'/g,q=/"/g,W=/^(?:script|style|textarea|title)$/i,J=t=>(e,...s)=>({_$litType$:t,strings:e,values:s}),K=J(1),Z=(J(2),J(3),Symbol.for("lit-noChange")),X=Symbol.for("lit-nothing"),G=new WeakMap,Q=T.createTreeWalker(T,129);function Y(t,e){if(!I(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==O?O.createHTML(e):e}const tt=(t,e)=>{const s=t.length-1,i=[];let r,n=2===e?"<svg>":3===e?"<math>":"",o=D;for(let e=0;e<s;e++){const s=t[e];let a,l,h=-1,c=0;for(;c<s.length&&(o.lastIndex=c,l=o.exec(s),null!==l);)c=o.lastIndex,o===D?"!--"===l[1]?o=L:void 0!==l[1]?o=B:void 0!==l[2]?(W.test(l[2])&&(r=RegExp("</"+l[2],"g")),o=F):void 0!==l[3]&&(o=F):o===F?">"===l[0]?(o=r??D,h=-1):void 0===l[1]?h=-2:(h=o.lastIndex-l[2].length,a=l[1],o=void 0===l[3]?F:'"'===l[3]?q:V):o===q||o===V?o=F:o===L||o===B?o=D:(o=F,r=void 0);const d=o===F&&t[e+1].startsWith("/>")?" ":"";n+=o===D?s+R:h>=0?(i.push(a),s.slice(0,h)+U+s.slice(h)+N+d):s+N+(-2===h?e:d)}return[Y(t,n+(t[s]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),i]};class et{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let r=0,n=0;const o=t.length-1,a=this.parts,[l,h]=tt(t,e);if(this.el=et.createElement(l,s),Q.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=Q.nextNode())&&a.length<o;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(U)){const e=h[n++],s=i.getAttribute(t).split(N),o=/([.?@])?(.*)/.exec(e);a.push({type:1,index:r,name:o[2],strings:s,ctor:"."===o[1]?ot:"?"===o[1]?at:"@"===o[1]?lt:nt}),i.removeAttribute(t)}else t.startsWith(N)&&(a.push({type:6,index:r}),i.removeAttribute(t));if(W.test(i.tagName)){const t=i.textContent.split(N),e=t.length-1;if(e>0){i.textContent=P?P.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],M()),Q.nextNode(),a.push({type:2,index:++r});i.append(t[e],M())}}}else if(8===i.nodeType)if(i.data===j)a.push({type:2,index:r});else{let t=-1;for(;-1!==(t=i.data.indexOf(N,t+1));)a.push({type:7,index:r}),t+=N.length-1}r++}}static createElement(t,e){const s=T.createElement("template");return s.innerHTML=t,s}}function st(t,e,s=t,i){if(e===Z)return e;let r=void 0!==i?s._$Co?.[i]:s._$Cl;const n=H(e)?void 0:e._$litDirective$;return r?.constructor!==n&&(r?._$AO?.(!1),void 0===n?r=void 0:(r=new n(t),r._$AT(t,s,i)),void 0!==i?(s._$Co??=[])[i]=r:s._$Cl=r),void 0!==r&&(e=st(t,r._$AS(t,e.values),r,i)),e}class it{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??T).importNode(e,!0);Q.currentNode=i;let r=Q.nextNode(),n=0,o=0,a=s[0];for(;void 0!==a;){if(n===a.index){let e;2===a.type?e=new rt(r,r.nextSibling,this,t):1===a.type?e=new a.ctor(r,a.name,a.strings,this,t):6===a.type&&(e=new ht(r,this,t)),this._$AV.push(e),a=s[++o]}n!==a?.index&&(r=Q.nextNode(),n++)}return Q.currentNode=T,i}p(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class rt{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=X,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=st(this,t,e),H(t)?t===X||null==t||""===t?(this._$AH!==X&&this._$AR(),this._$AH=X):t!==this._$AH&&t!==Z&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>I(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==X&&H(this._$AH)?this._$AA.nextSibling.data=t:this.T(T.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,i="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=et.createElement(Y(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new it(i,this),s=t.u(this.options);t.p(e),this.T(s),this._$AH=t}}_$AC(t){let e=G.get(t.strings);return void 0===e&&G.set(t.strings,e=new et(t)),e}k(t){I(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const r of t)i===e.length?e.push(s=new rt(this.O(M()),this.O(M()),this,this.options)):s=e[i],s._$AI(r),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class nt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,r){this.type=1,this._$AH=X,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=X}_$AI(t,e=this,s,i){const r=this.strings;let n=!1;if(void 0===r)t=st(this,t,e,0),n=!H(t)||t!==this._$AH&&t!==Z,n&&(this._$AH=t);else{const i=t;let o,a;for(t=r[0],o=0;o<r.length-1;o++)a=st(this,i[s+o],e,o),a===Z&&(a=this._$AH[o]),n||=!H(a)||a!==this._$AH[o],a===X?t=X:t!==X&&(t+=(a??"")+r[o+1]),this._$AH[o]=a}n&&!i&&this.j(t)}j(t){t===X?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class ot extends nt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===X?void 0:t}}class at extends nt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==X)}}class lt extends nt{constructor(t,e,s,i,r){super(t,e,s,i,r),this.type=5}_$AI(t,e=this){if((t=st(this,t,e,0)??X)===Z)return;const s=this._$AH,i=t===X&&s!==X||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==X&&(s===X||i);i&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class ht{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){st(this,t)}}const ct=C.litHtmlPolyfillSupport;ct?.(et,rt),(C.litHtmlVersions??=[]).push("3.2.1");class dt extends k{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,s)=>{const i=s?.renderBefore??e;let r=i._$litPart$;if(void 0===r){const t=s?.renderBefore??null;i._$litPart$=r=new rt(e.insertBefore(M(),t),t,void 0,s??{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Z}}dt._$litElement$=!0,dt.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:dt});const ut=globalThis.litElementPolyfillSupport;ut?.({LitElement:dt}),(globalThis.litElementVersions??=[]).push("4.1.1");const pt={attribute:!0,type:String,converter:S,reflect:!1,hasChanged:E},ft=(t=pt,e,s)=>{const{kind:i,metadata:r}=s;let n=globalThis.litPropertyMetadata.get(r);if(void 0===n&&globalThis.litPropertyMetadata.set(r,n=new Map),n.set(s.name,t),"accessor"===i){const{name:i}=s;return{set(s){const r=e.get.call(this);e.set.call(this,s),this.requestUpdate(i,r,t)},init(e){return void 0!==e&&this.P(i,void 0,t),e}}}if("setter"===i){const{name:i}=s;return function(s){const r=this[i];e.call(this,s),this.requestUpdate(i,r,t)}}throw Error("Unsupported decorator location: "+i)};function $t(t){return(e,s)=>"object"==typeof s?ft(t,e,s):((t,e,s)=>{const i=e.hasOwnProperty(s);return e.constructor.createProperty(s,i?{...t,wrapped:!0}:t),i?Object.getOwnPropertyDescriptor(e,s):void 0})(t,e,s)}function mt(t){return $t({...t,state:!0,attribute:!1})}let gt;class _t{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}const vt=(t=>(...e)=>({_$litDirective$:t,values:e}))(class extends _t{constructor(t){if(super(t),1!==t.type||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(e)}const s=t.element.classList;for(const t of this.st)t in e||(s.remove(t),this.st.delete(t));for(const t in e){const i=!!e[t];i===this.st.has(t)||this.nt?.has(t)||(i?(s.add(t),this.st.add(t)):(s.remove(t),this.st.delete(t)))}return Z}});function yt(t,e,s){return t?e(t):s?.(t)}var bt=Object.defineProperty,At=Object.getOwnPropertyDescriptor,wt=(t,e,s,i)=>{for(var r,n=i>1?void 0:i?At(e,s):e,o=t.length-1;o>=0;o--)(r=t[o])&&(n=(i?r(e,s,n):r(n))||n);return i&&n&&bt(e,s,n),n};function St(t){return null===t?"null":Array.isArray(t)?"array":t.constructor.name.toLowerCase()}function Et(t){return t!==Object(t)}function*xt(t){const e=[[t,"",[]]];for(;e.length;){const[t,s,i]=e.shift();if(s&&(yield[t,s,i]),!Et(t))for(const[r,n]of Object.entries(t))e.push([n,`${s}${s?".":""}${r}`,[...i,s]])}}var kt={fromAttribute:t=>t&&t.trim()?JSON.parse(t):void 0,toAttribute:t=>JSON.stringify(t)},Ct=t=>void 0!==t,Pt=(t,e)=>e instanceof RegExp?!!t.match(e):function(t,e){const s=t.split("."),i=e.split("."),r=t=>"*"===t,n=t=>"**"===t;let o=0,a=0;for(;o<s.length;){const t=i[a];if(t===s[o]||r(t))a++,o++;else{if(!n(t))return!1;a++,o=s.length-(i.length-a)}}return a===i.length}(t,e),Ot=(t,e)=>s=>({expanded:{...s.expanded,[t]:Ct(e)?!!e:!s.expanded[t]}}),Ut=(t,e)=>(s,i)=>{const r={};if(t)for(const[,s,n]of xt(i.data))Pt(s,t)&&(r[s]=e,n.forEach((t=>r[t]=e)));return{expanded:r}},Nt=t=>()=>({highlight:t}),jt=((t,...e)=>{const s=1===t.length?t[0]:e.reduce(((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1]),t[0]);return new c(s,t,l)})`
    :where(:host) {
        --background-color: #2a2f3a;
        --color: #f8f8f2;
        --string-color: #a3eea0;
        --number-color: #d19a66;
        --boolean-color: #4ba7ef;
        --null-color: #df9cf3;
        --property-color: #6fb3d2;
        --preview-color: rgba(222, 175, 143, 0.9);
        --highlight-color:  #c92a2a;
        --outline-color: #e0e4e5;
        --outline-width: 1px;
        --outline-style: dotted;

        --font-family: Nimbus Mono PS, Courier New, monospace;
        --font-size: 1rem;
        --line-height: 1.2rem;

        --indent-size: 0.5rem;
        --indentguide-size: 1px;
        --indentguide-style: solid;
        --indentguide-color: #495057;
        --indentguide-color-active: #ced4da;
        --indentguide: var(--indentguide-size) var(--indentguide-style) var(--indentguide-color);
        --indentguide-active: var(--indentguide-size) var(--indentguide-style) var(--indentguide-color-active);
    }

    :host {
        display: block;
        background-color: var(--background-color);
        color: var(--color);
        font-family: var(--font-family);
        font-size: var(--font-size);
        line-height: var(--line-height);
    }

    :focus {
        outline-color: var(--outline-color);
        outline-width: var(--outline-width);
        outline-style: var(--outline-style);
    }

    .preview {
        color: var(--preview-color);
    }

    .null {
        color: var(--null-color);
    }

    .key {
        color: var(--property-color);
        display: inline-flex;
        align-items: flex-start;
    }

    .collapsable::before {
        display: inline-flex;
        font-size: 0.8em;
        content: '▶';
        width: var(--line-height);
        height: var(--line-height);
        align-items: center;
        justify-content: center;

        transition: transform 195ms ease-out;
        transform: rotate(90deg);

        color: inherit;
    }

    .collapsable--collapsed::before {
        transform: rotate(0);
    }

    .collapsable {
        cursor: pointer;
        user-select: none;
    }

    .string {
        color: var(--string-color);
    }

    .number {
        color: var(--number-color);
    }

    .boolean {
        color: var(--boolean-color);
    }

    ul {
        padding: 0;
        clear: both;
    }

    ul,
    li {
        list-style: none;
        position: relative;
    }

    li ul > li {
        position: relative;
        margin-left: calc(var(--indent-size) + var(--line-height));
        padding-left: 0px;
    }

    ul ul::before {
        content: '';
        border-left: var(--indentguide);
        position: absolute;
        left: calc(var(--line-height) / 2 - var(--indentguide-size));
        top: 0.2rem;
        bottom: 0.2rem;
    }

    ul ul:hover::before {
        border-left: var(--indentguide-active);
    }

    mark {
        background-color: var(--highlight-color);
    }
`,Rt=class extends dt{constructor(){super(),this.state={expanded:{},filtered:{},highlight:null},this.lastFocusedItem=null,this.#t=t=>e=>{e.preventDefault(),this.setState(Ot(t))},this.#e=t=>{const e=t.target;t.target===this&&this.#s(this.lastFocusedItem||this.nodeElements[0]),e.matches('[role="treeitem"]')&&(this.lastFocusedItem&&(this.lastFocusedItem.tabIndex=-1),this.lastFocusedItem=e,this.tabIndex=-1,e.tabIndex=0)},this.#i=t=>{const e=t.relatedTarget;e&&this.contains(e)||(this.tabIndex=0)},this.addEventListener("focusin",this.#e),this.addEventListener("focusout",this.#i)}static{this.styles=[jt]}static customRenderer(t,e){return JSON.stringify(t)}async setState(t){const e=this.state;this.state={...e,...t(e,this)}}connectedCallback(){this.hasAttribute("data")||Ct(this.data)||this.setAttribute("data",this.innerText),this.setAttribute("role","node"),this.setAttribute("tabindex","0"),super.connectedCallback()}#t;#e;#i;#r(t){if(!["ArrowDown","ArrowUp","ArrowRight","ArrowLeft","Home","End"].includes(t.key))return;const e=[...this.nodeElements],s=this.matches(":dir(ltr)"),i=this.matches(":dir(rtl)");if(e.length>0){t.preventDefault();const n=e.findIndex((t=>t.matches(":focus"))),o=e[n],a=this.state.expanded[o.dataset.path],l=Et((r=this.data,o.dataset.path.split(".").reduce(((t,e)=>t[e]),r))),h=t=>{const s=e[Math.max(Math.min(t,e.length-1),0)];this.#s(s)},c=t=>{this.setState(Ot(o.dataset.path,t))};"ArrowDown"===t.key?h(n+1):"ArrowUp"===t.key?h(n-1):s&&"ArrowRight"===t.key||i&&"ArrowLeft"===t.key?!o||a||l?h(n+1):c(!0):s&&"ArrowLeft"===t.key||i&&"ArrowRight"===t.key?o&&a&&!l?c(!1):h(n-1):"Home"===t.key?h(0):"End"===t.key&&h(e.length-1)}var r}#s(t){t.focus()}expand(t){this.setState(Ut(t,!0))}expandAll(){this.setState(Ut("**",!0))}collapseAll(){this.setState(Ut("**",!1))}collapse(t){this.setState(Ut(t,!1))}*search(t){for(const[e,s]of xt(this.data))Et(e)&&String(e).match(t)&&(this.expand(s),this.updateComplete.then((()=>{const t=this.shadowRoot.querySelector(`[data-path="${s}"]`);t.scrollIntoView({behavior:"smooth",inline:"center",block:"center"}),t.focus()})),this.setState(Nt(s)),yield{value:e,path:s});this.setState(Nt(null))}filter(t){var e;this.setState((e=t,(t,s)=>{const i={};if(e)for(const[,t,r]of xt(s.data))Pt(t,e)?(i[t]=!1,r.forEach((t=>i[t]=!1))):i[t]=!0;return{filtered:i}}))}resetFilter(){this.setState((()=>({filtered:{}})))}renderObject(t,e){return K`
            <ul part="object" role="group">
                ${function*(t,e){if(void 0!==t){let s=0;for(const i of t)yield e(i,s++)}}(Object.entries(t),(([t,s])=>{const i=e?`${e}.${t}`:t,r=Et(s),n=this.state.expanded[i];return this.state.filtered[i]?X:K`
                              <li
                                  part="property"
                                  role="treeitem"
                                  data-path="${i}"
                                  aria-expanded="${n?"true":"false"}"
                                  tabindex="-1"
                                  .hidden="${this.state.filtered[i]}"
                                  aria-hidden="${this.state.filtered[i]}"
                              >
                                  <span
                                      part="key"
                                      class="${vt({key:t,collapsable:!r,"collapsable--collapsed":!this.state.expanded[i]})}"
                                      @click="${r?null:this.#t(i)}"
                                  >
                                      ${t}:
                                      ${yt(!r&&!n,(()=>this.renderNodePreview(s)))}
                                  </span>

                                  ${yt(r||n,(()=>this.renderValue(s,i)))}
                              </li>
                          `}))}
            </ul>
        `}renderValue(t,e=""){return Et(t)?this.renderPrimitive(t,e):this.renderObject(t,e)}renderNodePreview(t){return K`<span part="preview" class="preview"> ${function(t,{nodeCount:e=3,maxLength:s=15}={}){const i=Array.isArray(t),r=Object.keys(t),n=r.slice(0,e),o=[],a=t=>{switch(St(t)){case"object":return 0===Object.keys(t).length?"{ }":"{ ... }";case"array":return 0===t.length?"[ ]":"[ ... ]";case"string":return`"${t.substring(0,s)}${t.length>s?"...":""}"`;default:return String(t)}},l=[];for(const e of n){const s=[],r=t[e];i||s.push(`${e}: `),s.push(a(r)),l.push(s.join(""))}r.length>e&&l.push("..."),o.push(l.join(", "));const h=o.join("");return i?`[ ${h} ]`:`{ ${h} }`}(t)} </span>`}renderPrimitive(t,e){const s=this.state.highlight,i=St(t),r=this.constructor.customRenderer(t,e),n=K`
            <span part="primitive primitive-${i}" class="${St(t)}"> ${r} </span>
        `;return e===s?K`<mark part="highlight">${n}</mark>`:n}render(){const t=this.data;return K`
            <div
                part="base"
                @keydown=${this.#r}
                @focusin="${this.#e}"
                @focusout="${this.#i}"
            >
                ${yt(Ct(t),(()=>this.renderValue(t)))}
            </div>
        `}};wt([$t({converter:kt,type:Object})],Rt.prototype,"data",2),wt([mt()],Rt.prototype,"state",2),wt([mt()],Rt.prototype,"lastFocusedItem",2),wt([(t,e)=>((t,e,s)=>(s.configurable=!0,s.enumerable=!0,Reflect.decorate&&"object"!=typeof e&&Object.defineProperty(t,e,s),s))(t,e,{get(){return(this.renderRoot??(gt??=document.createDocumentFragment())).querySelectorAll('[role="treeitem"]')}})],Rt.prototype,"nodeElements",2),customElements.define("json-viewer",Rt);const Tt=window.ReactJSXRuntime;if(document.querySelector("#editor")){const o=()=>{const[r,o]=(0,n.useState)(!1),a=(0,s.useSelect)((t=>t("core/block-editor").getBlocks()),[]),l=JSON.stringify(a,null,2),h=(0,n.useRef)(null),[c,d]=(0,n.useState)(""),[u,p]=(0,n.useState)(null);return(0,Tt.jsxs)(i.PluginDocumentSettingPanel,{name:"blocks-schema-viewer",className:"blocks-schema-viewer",icon:"networking",title:(0,t.__)("Blocks Schema","blocks-schema-viewer"),children:[(0,Tt.jsx)(e.Button,{variant:"secondary",className:"blocks-schema-viewer__button",onClick:()=>o(!0),children:(0,t.__)("View in Modal","blocks-schema-viewer")}),(0,Tt.jsx)(e.TextareaControl,{label:(0,t.__)("Blocks Schema","blocks-schema-viewer"),className:"blocks-schema-viewer__textarea",value:l,rows:25}),r&&(0,Tt.jsxs)(e.Modal,{title:(0,t.__)("Blocks Schema","blocks-schema-viewer"),onRequestClose:()=>o(!1),className:"blocks-schema-viewer__modal",bodyOpenClassName:"blocks-schema-viewer-modal-open",children:[(0,Tt.jsxs)(e.Flex,{justify:"flex-start",children:[(0,Tt.jsx)(e.Button,{variant:"primary",className:"blocks-schema-viewer__button",onClick:()=>{h.current?.expandAll()},children:(0,t.__)("Expand all","blocks-schema-viewer")}),(0,Tt.jsx)(e.Button,{variant:"secondary",className:"blocks-schema-viewer__button",onClick:()=>{h.current?.collapseAll()},children:(0,t.__)("Collapse all","blocks-schema-viewer")}),(0,Tt.jsx)(e.SearchControl,{className:"blocks-schema-viewer__search",value:c,onChange:t=>{d(t),p(h.current?.search(t))}}),(0,Tt.jsx)(e.Button,{variant:"secondary",className:"blocks-schema-viewer__button",onClick:()=>u.next(),children:(0,t.__)("Next","blocks-schema-viewer")})]}),(0,Tt.jsx)("json-viewer",{ref:h,children:l})]})]})};(0,r.registerPlugin)("blocks-schema-viewer",{render:o})}})();