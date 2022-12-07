/**
 * Generated by scripts/prefetch.js
 * Options:
 *     name: "wikiplus-highlight"
 *     url: "https://cdn.jsdelivr.net/npm/wikiplus-highlight"
 *     file: "src/gadgets/wikiplus-highlight/MediaWiki:Gadget-wikiplus-highlight.js"
 */
/**
 * Minified by jsDelivr using Terser v5.15.1.
 * Original file: /npm/wikiplus-highlight@2.21.0/main.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
/**
 * @name Wikiplus-highlight Wikiplus编辑器的CodeMirror语法高亮扩展
 * @author Bhsd <https://github.com/bhsd-harry>
 * @author 机智的小鱼君 <https://github.com/Dragon-Fish>
 * @license GPL-3.0
 */
(async()=>{"use strict";if(mw.libs.wphl)return;mw.libs.wphl={};const e="2.21",i="object"==typeof mw.storage&&"function"==typeof mw.storage.getObject?mw.storage:{getObject(e){const i=localStorage.getItem(e);if(!1===i)return!1;try{return JSON.parse(i)}catch(e){return null}},setObject(e,i){try{return localStorage.setItem(e,JSON.stringify(i))}catch(e){return!1}}},t=Object.fromEntries||(e=>{const i={};for(const[t,o]of e)i[t]=o;return i}),o=e=>"function"==typeof e.flat?e.flat():e.reduce(((e,i)=>e.concat(i)),[]),n=(e="2.21")=>e.split(".").map((e=>Number(e))),a=(e,...i)=>mw.msg(`wphl-${e}`,...i),s=(...e)=>$($.parseHTML(a(...e))),r=(...e)=>()=>{const i=$("<p>",{html:a(...e)});return mw.notify(i,{type:"success",autoHideSeconds:"long",tag:"wikiplus-highlight"}),i},d=n().slice(0,2).join("."),l="//fastly.jsdelivr.net",c="npm/codemirror@5.65.3",m="gh/bhsd-harry/codemirror-mediawiki@1.1.5",g=`npm/wikiplus-highlight@${d}`,{wgPageName:u,wgNamespaceNumber:p,wgPageContentModel:w,wgServerName:h,wgScriptPath:k,wgUserLanguage:f,skin:b}=mw.config.values,y=null!==mw.loader.getState("ext.CodeMirror"),x=i.getObject("InPageEditMwConfig")||{},C=`${h}${k}`,j=x[C]||{},S=!(j.time>Date.now()-2592e6),M={css:"css","sanitized-css":"css",javascript:"javascript",json:"javascript",wikitext:"mediawiki"},v=y?{lib:"ext.CodeMirror.lib",css:"ext.CodeMirror.lib.mode.css",javascript:"ext.CodeMirror.lib.mode.javascript",lua:`${c}/mode/lua/lua.min.js`,mediawiki:S?"ext.CodeMirror.data":[],htmlmixed:"ext.CodeMirror.lib.mode.htmlmixed",xml:[]}:{lib:`${c}/lib/codemirror.min.js`,css:`${c}/mode/css/css.min.js`,javascript:`${c}/mode/javascript/javascript.min.js`,lua:`${c}/mode/lua/lua.min.js`,mediawiki:[],htmlmixed:`${c}/mode/htmlmixed/htmlmixed.min.js`,xml:`${c}/mode/xml/xml.min.js`},W={searchcursor:`${c}/addon/search/searchcursor.min.js`,search:`${g}/search.min.js`,markSelection:`${c}/addon/selection/mark-selection.min.js`,activeLine:`${c}/addon/selection/active-line.min.js`,trailingspace:`${c}/addon/edit/trailingspace.min.js`,matchBrackets:`${c}/addon/edit/matchbrackets.min.js`,closeBrackets:`${c}/addon/edit/closebrackets.min.js`,matchTags:`${g}/matchtags.min.js`,fold:`${g}/fold.min.js`,wikiEditor:"ext.wikiEditor",contextmenu:"mediawiki.Title"},E=[{option:"styleSelectedText",addon:"search",download:"markSelection",only:!0,complex:()=>!O.has("wikiEditor")},{option:"styleActiveLine",addon:"activeLine"},{option:"showTrailingSpace",addon:"trailingspace"},{option:"matchBrackets",complex:(e,i)=>"mediawiki"!==e&&!i||{bracketRegex:/[{}[\]]/}},{option:"autoCloseBrackets",addon:"closeBrackets",complex:(e,i)=>"mediawiki"!==e&&!i||'()[]{}""'},{option:"matchTags",addon:["matchTags","fold"],modes:["mediawiki","widget"]},{option:"fold",modes:["mediawiki","widget"]}];let O=new Set(i.getObject("Wikiplus-highlight-addons")||["search"]),_=i.getObject("Wikiplus-highlight-indent")||4;const z={'"':"quot","'":"apos","<":"lt",">":"gt","&":"amp"," ":"nbsp"},I=e=>i=>{i.replaceSelection(i.getSelection().split("\n").map(e).join("\n"),"around")},T=I((e=>e.split("").map((e=>{if(e in z)return`&${z[e]};`;const i=e.charCodeAt();return i<256?`&#${i};`:`&#x${i.toString(16)};`})).join(""))),A=({keyMap:e})=>e.default===e.pcDefault,L={"Ctrl-/":T,"Ctrl-\\":I(encodeURIComponent)},P={"Cmd-/":T,"Cmd-\\":I(encodeURIComponent)},D=(e,i)=>{if(!["mediawiki","widget"].includes(i)||!O.has("contextmenu"))return;const t=$(e.getWrapperElement()).addClass("CodeMirror-contextmenu"),{functionSynonyms:[o]}=mw.config.get("extCodeMirrorConfig")||{functionSynonyms:[{invoke:"invoke","调用":"invoke",widget:"widget","小工具":"widget"}]},n=e=>Object.keys(o).filter((i=>o[i]===e)).map((e=>e.startsWith("#")?e:`#${e}`)),a=n("invoke"),s=n("widget");t.contextmenu((({pageX:i,pageY:t})=>{const o=e.coordsChar({left:i,top:t}),{line:n,ch:r}=o,d=e.getTokenTypeAt(o);if(!/\bmw-(?:template-name|parserfunction)\b/.test(d))return;const l=e.getLineTokens(n);for(const[e,{type:i,end:t,string:o}]of[...l.entries()].reverse())e>0&&l[e-1].type===i&&(l[e-1].end=t,l[e-1].string+=o,l.splice(e,1));const c=l.findIndex((({start:e,end:i})=>e<r&&i>=r)),m=l[c].string.replace(/\u200e/g,"").replace(/_/g," ").trim();if(/\bmw-template-name\b/.test(d)){const e=new mw.Title(m);return 0!==e.namespace||m.startsWith(":")?open(e.getUrl(),"_blank"):open(mw.util.getUrl(`Template:${m}`),"_blank"),!1}if(c<2||!/\bmw-parserfunction-delimiter\b/.test(l[c-1].type)||!/\bmw-parserfunction-name\b/.test(l[c-2].type))return;const g=l[c-2].string.trim().toLowerCase();if(a.includes(g))open(mw.util.getUrl(`Module:${m}`),"_blank");else{if(!s.includes(g))return;open(mw.util.getUrl(`Widget:${m}`,{action:"edit"}),"_blank")}return!1}))};let N,U=i.getObject("Wikiplus-highlight-i18n");U?((e,i)=>{const[t,o]=n(e),[a,s]=n(i);return t<a||t===a&&o<s})(U["wphl-version"],e)&&(N=r("welcome-upgrade",e,0)):(U={},N=r("welcome"));const F={zh:"zh-hans","zh-hans":"zh-hans","zh-cn":"zh-hans","zh-my":"zh-hans","zh-sg":"zh-hans","zh-hant":"zh-hant","zh-tw":"zh-hant","zh-hk":"zh-hant","zh-mo":"zh-hant",ka:"ka"}[f]||"en",H=`${l}/${g}/i18n/${F}.json`,B=U["wphl-version"]===d,V=async()=>{B&&U["wphl-lang"]===F||(U=await $.ajax(`${H}`,{dataType:"json",cache:!0}),i.setObject("Wikiplus-highlight-i18n",U)),mw.messages.set(U)},Q=Promise.all([mw.loader.using("mediawiki.util"),V()]),q=e=>e.length?mw.loader.using(e):Promise.resolve(),K=e=>e.length?$.ajax(`${l}/${e.length>1?"combine/":""}${e.join()}`,{dataType:"script",cache:!0}):Promise.resolve(),J=async(e,i)=>{const t=e.filter((e=>!e.includes("/"))),o=e.filter((e=>e.includes("/")));return!0===i?(await q(t),K(o)):!1===i?(await K(o),q(t)):Promise.all([q(t),K(o)])};let R;const G=(e,i=!1)=>{const t=[];for(const{option:o,addon:n=o,download:a=(Array.isArray(n)?o:n),only:s}of E)s&&i||o in e.optionHandlers||!X(n,O)||t.push(W[a]);return t},X=(e,i)=>Array.isArray(e)?e.some((e=>i.has(e))):i.has(e),Y=e=>{let i=[];const t="function"==typeof window.CodeMirror,o=t?window.CodeMirror:{modes:{},prototype:{},commands:{},optionHandlers:{}};if(t||(i.push(v.lib),y||mw.loader.load(`${l}/${c}/lib/codemirror.min.css`,"text/css")),"mediawiki"===e&&j.config&&j.config.tags.html&&(e="html"),["mediawiki","widget"].includes(e)&&!o.modes.mediawiki&&(mw.loader.load(`${l}/${m}/mediawiki.min.css`,"text/css"),i.push(`${m}/mediawiki.min.js`)),["widget","html"].includes(e))for(const e of["css","javascript","mediawiki","htmlmixed","xml"])o.modes[e]||(i=i.concat(v[e]));else i=i.concat(v[e]);if(o.prototype.getSearchCursor||!O.has("search")||O.has("wikiEditor")||i.push(W.searchcursor),o.commands.findForward||!O.has("search")||O.has("wikiEditor")||i.push(W.search),O.has("wikiEditor")){const e=mw.loader.getState("ext.wikiEditor");e?"ready"!==e&&i.push(W.wikiEditor):O.delete("wikiEditor")}return"ready"!==mw.loader.getState("mediawiki.Title")&&O.has("contextmenu")&&i.push(W.contextmenu),i.push(...G(o)),J(i,t?void 0:y)},Z=e=>{x[C]={config:e,time:Date.now()},i.setObject("InPageEditMwConfig",x)},ee=async(e,i)=>{if(!["mediawiki","widget"].includes(e))return;y&&S&&await i;let n=mw.config.get("extCodeMirrorConfig");if(n||S||!B||(({config:n}=j),n.tags.ref&&(n.tagModes.ref="text/mediawiki"),mw.config.set("extCodeMirrorConfig",n)),n&&n.redirect&&n.img)return n;if(n)return n;const{query:{magicwords:a,extensiontags:s,functionhooks:r,variables:d}}=await(new mw.Api).get({meta:"siteinfo",siprop:n?"magicwords":"magicwords|extensiontags|functionhooks|variables",formatversion:2}),l=["msg","raw","msgnw","subst","safesubst"],c=e=>o(e.map((({aliases:e,name:i})=>e.map((e=>({alias:e,name:i})))))),m=e=>t(e.map((({alias:e,name:i})=>[e.replace(/:$/,""),i])));if(n){const{functionSynonyms:[e]}=n;e.subst||c(a.filter((({name:e})=>l.includes(e)))).forEach((({alias:i,name:t})=>{e[i.replace(/:$/,"")]=t}))}else{n={tagModes:{pre:"mw-tag-pre",nowiki:"mw-tag-nowiki",ref:"text/mediawiki"},tags:t(s.map((e=>[e.slice(1,-1),!0]))),urlProtocols:mw.config.get("wgUrlProtocols")};const e=new Set([...r,...d,...l]),i=a.filter((({name:i,aliases:t})=>t.some((e=>/^__.+__$/.test(e)))||e.has(i))),o=c(i.filter((e=>e["case-sensitive"]))),g=c(i.filter((e=>!e["case-sensitive"]))).map((({alias:e,name:i})=>({alias:e.toLowerCase(),name:i})));n.doubleUnderscore=[m(g.filter((({alias:e})=>/^__.+__$/.test(e)))),m(o.filter((({alias:e})=>/^__.+__$/.test(e))))],n.functionSynonyms=[m(g.filter((({alias:e})=>!/^__.+__|^#$/.test(e)))),m(o.filter((({alias:e})=>!/^__.+__|^#$/.test(e))))]}return n.redirect=a.find((({name:e})=>"redirect"===e)).aliases,n.img=m(c(a.filter((({name:e})=>e.startsWith("img_"))))),mw.config.set("extCodeMirrorConfig",n),Z(n),n},ie={getContents:()=>R.getValue(),setContents(e){return R.setValue(e),this},getSelection:()=>R.getSelection(),setSelection(e){return R.setSelection(R.posFromIndex(e.start),"end"in e?R.posFromIndex(e.end):void 0),R.focus(),this},replaceSelection(e){return R.replaceSelection(e),this},getCaretPosition(e){const i=R.indexFromPos(R.getCursor("from")),t=R.indexFromPos(R.getCursor("to"));return e.startAndEnd?[i,t]:i},scrollToCaretPosition(){return R.scrollIntoView(),this}},te=async(e,o)=>{const n=o?"javascript":await(async()=>{if([274,828].includes(p)&&!u.endsWith("/doc")){const e=274===p?"Widget":"Lua";return await mw.loader.using(["oojs-ui-windows","oojs-ui.styles.icons-content"]),await OO.ui.confirm(a("contentmodel"),{actions:[{label:e},{label:"Wikitext",action:"accept"}]})?"mediawiki":e.toLowerCase()}return u.endsWith("/doc")?"mediawiki":M[w]})(),s=Y(n),[r]=await Promise.all([ee(n,s),s]);if(!o&&O.has("wikiEditor"))try{if("function"==typeof mw.addWikiEditor)mw.addWikiEditor(e);else{const{config:i}=$.wikiEditor.modules.dialogs;e.wikiEditor("addModule",{...$.wikiEditor.modules.toolbar.config.getDefaultConfig(),...i.getDefaultConfig()}),i.replaceIcons(e)}}catch(e){O.delete("wikiEditor"),mw.notify("WikiEditor工具栏加载失败。",{type:"error"}),console.error(e)}"mediawiki"===n&&r.tags.html?(r.tagModes.html="htmlmixed",await Y("html")):"widget"!==n||CodeMirror.mimeModes.widget||CodeMirror.defineMIME("widget",{name:"htmlmixed",tags:{noinclude:[[null,null,"mediawiki"]]}});const d=e.height();R&&R.toTextArea();const l=o||"json"===w;if(R=CodeMirror.fromTextArea(e[0],$.extend({inputStyle:"contenteditable",lineNumbers:!/Android\b/.test(navigator.userAgent),lineWrapping:!0,mode:n,mwConfig:r,json:l},t(E.map((({option:e,addon:i=e,modes:t,complex:o=(e=>!t||t.includes(e))})=>{const a=Array.isArray(i)?i[0]:i;return[e,O.has(a)&&o(n,l)]}))),"mediawiki"===n?{extraKeys:O.has("escape")&&(A(CodeMirror)?L:P)}:{indentUnit:O.has("indentWithSpace")?_:4,indentWithTabs:!O.has("indentWithSpace")})),R.setSize(null,d),R.refresh(),R.getWrapperElement().id="Wikiplus-CodeMirror",$.fn.textSelection&&e.textSelection("register",ie),O.has("wikiEditor")){const i=e.data("wikiEditorContext"),{keyMap:t}=CodeMirror,o=()=>{$.wikiEditor.modules.dialogs.api.openDialog(i,"search-and-replace")};R.addKeyMap(t.default===t.pcDefault?{"Ctrl-F":o}:{"Cmd-F":o})}if(D(R,n),$("#Wikiplus-Quickedit-Jump").children("a").attr("href","#Wikiplus-CodeMirror"),!o){const e="object"==typeof window.Wikiplus?window.Wikiplus:{getSetting(e){const t=i.getObject("Wikiplus_Settings");return t&&t[e]}},t=()=>{$("#Wikiplus-Quickedit-Submit").triggerHandler("click")},o=()=>{$("#Wikiplus-Quickedit-MinorEdit").click(),$("#Wikiplus-Quickedit-Submit").triggerHandler("click")};R.addKeyMap($.extend(A(CodeMirror)?{"Ctrl-S":t,"Shift-Ctrl-S":o}:{"Cmd-S":t,"Shift-Cmd-S":o},[!0,"true"].includes(e.getSetting("esc_to_exit_quickedit"))?{Esc(){$("#Wikiplus-Quickedit-Back").triggerHandler("click")}}:{}))}mw.hook("wiki-codemirror").fire(R)},{body:oe}=document;new MutationObserver((e=>{const i=$(o(e.map((({addedNodes:e})=>[...e])))).find("#Wikiplus-Quickedit, #Wikiplus-Setting-Input");0!==i.length&&te(i,"Wikiplus-Setting-Input"===i.attr("id"))})).observe(oe,{childList:!0}),$(oe).on("keydown.wphl",".ui-dialog",(function(e){if("Escape"===e.key){const i=$(this).children(".ui-dialog-content").data("context");i&&i.$textarea&&"Wikiplus-Quickedit"===i.$textarea.attr("id")&&e.stopPropagation()}}));const ne=document.getElementById("wphl-style")||mw.loader.addStyleTag("#Wikiplus-CodeMirror{border:1px solid #c8ccd1;line-height:1.3;clear:both;-moz-user-select:auto;-webkit-user-select:auto;user-select:auto}#Wikiplus-CodeMirror .CodeMirror-gutter-wrapper{-moz-user-select:none;-webkit-user-select:none;user-select:none}div.Wikiplus-InterBox{font-size:14px;z-index:100}.skin-minerva .Wikiplus-InterBox{font-size:16px}.cm-trailingspace{text-decoration:underline wavy red}div.CodeMirror span.CodeMirror-matchingbracket{box-shadow:0 0 0 2px #9aef98}div.CodeMirror span.CodeMirror-nonmatchingbracket{box-shadow:0 0 0 2px #eace64}#Wikiplus-highlight-dialog .oo-ui-messageDialog-title{margin-bottom:0.28571429em}#Wikiplus-highlight-dialog .oo-ui-flaggedElement-notice{font-weight:normal;margin:0}.CodeMirror-contextmenu .cm-mw-template-name{cursor:pointer}.skin-moeskin #ca-more-actions li>a{display:inline-block;padding:0.4rem 0.8rem;line-height:1.5}");ne.id="wphl-style";const{get:ae=function(e){return e.value},set:se=function(e,i){e.value=i}}=$.valHooks.textarea||{},re=e=>["Wikiplus-Quickedit","Wikiplus-Setting-Input"].includes(e.id);let de,le,ce,me,ge,ue,pe;$.valHooks.textarea={get:e=>re(e)&&R?R.getValue():ae(e),set(e,i){re(e)&&R?R.setValue(i):se(e,i)}},await Q;const we=(e=[...O])=>{pe.toggle(e.includes("indentWithSpace"))},he=$(mw.util.addPortletLink({minerva:"page-actions-overflow",citizen:"p-actions",moeskin:"ca-more-actions"}[b]||"p-cactions","#",a("portlet"),"wphl-settings")).click((async e=>{if(e.preventDefault(),de)le.setValue([...O]),ge.setValue(_);else{await mw.loader.using(["oojs-ui-windows","oojs-ui.styles.icons-content"]),de=new OO.ui.MessageDialog({id:"Wikiplus-highlight-dialog"});const e=new OO.ui.WindowManager;e.$element.appendTo(oe),e.addWindows([de]),le=new OO.ui.CheckboxMultiselectInputWidget({options:[...E.map((({option:e,addon:i=e})=>{const t=Array.isArray(i)?i[0]:i;return{data:t,label:s(`addon-${t.toLowerCase()}`)}})),...["wikiEditor","escape","contextmenu","indentWithSpace","otherEditors"].map((e=>({data:e,label:s(`addon-${e.toLowerCase()}`)})))],value:[...O]}).on("change",we);const{checkboxMultiselectWidget:i}=le;ce=i.findItemFromData("search"),me=i.findItemFromData("wikiEditor"),ge=new OO.ui.NumberInputWidget({min:0,value:_}),ue=new OO.ui.FieldLayout(le,{label:a("addon-label"),notices:[a("addon-notice")],align:"top"}),pe=new OO.ui.FieldLayout(ge,{label:a("addon-indent")}),we(),Object.assign(mw.libs.wphl,{widget:le,indentWidget:ge})}const t="object"==typeof window.Wikiplus||"object"==typeof window.Pages;ce.setDisabled(!t),me.setDisabled(!t||!mw.loader.getState("ext.wikiEditor")),de.open({title:a("addon-title"),message:ue.$element.add(pe.$element).add($("<p>",{html:a("feedback")})),actions:[{action:"reject",label:mw.msg("ooui-dialog-message-reject")},{action:"accept",label:mw.msg("ooui-dialog-message-accept"),flags:"progressive"}],size:"en"===F||"minerva"===b?"medium":"small"}).closing.then((e=>{if(ue.$element.detach(),pe.$element.detach(),"object"==typeof e&&"accept"===e.action){const e=le.getValue();O=new Set(e),_=Number(ge.getValue()),i.setObject("Wikiplus-highlight-addons",e),i.setObject("Wikiplus-highlight-indent",_)}}))}));"minerva"===b&&he.find(".mw-ui-icon").addClass("mw-ui-icon-minerva-settings"),"function"==typeof N&&N().find("#wphl-settings-notify").click((e=>{e.preventDefault(),$("#wphl-settings").triggerHandler("click")}));const ke=async e=>{if(!O.has("otherEditors"))return;let i=e.getOption("mode");i="text/mediawiki"===i?"mediawiki":i;const t=G(CodeMirror,!0),o=e.getOption("json");await J(t);for(const{option:t,addon:n=t,modes:a,complex:s=(e=>!a||a.includes(e))}of E.filter((({only:e})=>!e))){const a=Array.isArray(n)?n[0]:n;void 0===e.getOption(t)&&O.has(a)&&e.setOption(t,s(i,o))}"mediawiki"!==i&&O.has("indentWithSpace")?(e.setOption("indentUnit",_),e.setOption("indentWithTabs",!1)):"mediawiki"===i&&O.has("escape")&&e.addKeyMap(A(CodeMirror)?L:P,!0),D(e,i)};mw.hook("InPageEdit.quickEdit.codemirror").add((({cm:e})=>ke(e))),mw.hook("inspector").add((e=>ke(e))),mw.libs.wphl={version:e,options:E,addons:O,i18n:U,i18nLang:F,wphlStyle:ne,$portlet:he,USING_LOCAL:y,MODE_LIST:v,ADDON_LIST:W,msg:a,htmlMsg:s,escapeHTML:T,handleContextMenu:D,setI18N:V,getAddonScript:G,updateCachedConfig:Z,getMwConfig:ee,renderEditor:te,handleOtherEditors:ke}})();
//# sourceMappingURL=/sm/3b765fbccc01a295677a48aee58973449a98510029d6c0eb70ed2a8a9073b634.map
