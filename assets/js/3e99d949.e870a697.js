"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9064],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return c}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),c=a,h=u["".concat(p,".").concat(c)]||u[c]||m[c]||o;return n?r.createElement(h,i(i({ref:t},d),{},{components:n})):r.createElement(h,i({ref:t},d))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2515:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return d},default:function(){return u}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i=["components"],l={id:"props",title:"Props",description:"Bottom Sheet modal configurable props.",keywords:["bottomsheet","bottom-sheet","bottom sheet","react-native","react native","ios","android","sheet","modal","presentation modal","reanimated"],image:"/img/bottom-sheet-preview.gif",slug:"/modal/props"},p=void 0,s={unversionedId:"modal/props",id:"version-2/modal/props",isDocsHomePage:!1,title:"Props",description:"Bottom Sheet modal configurable props.",source:"@site/versioned_docs/version-2/modal/props.md",sourceDirName:"modal",slug:"/modal/props",permalink:"/react-native-bottom-sheet/v2/modal/props",editUrl:"https://github.com/gorhom/react-native-bottom-sheet/edit/website/versioned_docs/version-2/modal/props.md",tags:[],version:"2",frontMatter:{id:"props",title:"Props",description:"Bottom Sheet modal configurable props.",keywords:["bottomsheet","bottom-sheet","bottom sheet","react-native","react native","ios","android","sheet","modal","presentation modal","reanimated"],image:"/img/bottom-sheet-preview.gif",slug:"/modal/props"},sidebar:"version-2/packages",previous:{title:"Usage",permalink:"/react-native-bottom-sheet/v2/modal/usage"},next:{title:"Methods",permalink:"/react-native-bottom-sheet/v2/modal/methods"}},d=[{value:"Configuration",id:"configuration",children:[{value:"<code>name</code>",id:"name",children:[]},{value:"<code>dismissOnPanDown</code>",id:"dismissonpandown",children:[]}]},{value:"Callbacks",id:"callbacks",children:[{value:"<code>onDismiss</code>",id:"ondismiss",children:[]}]}],m={toc:d};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Bottom Sheet Modal")," inherits all ",(0,o.kt)("a",{parentName:"p",href:"../props"},(0,o.kt)("strong",{parentName:"a"},"Bottom Sheet")," props")," except for ",(0,o.kt)("inlineCode",{parentName:"p"},"animateOnMount")," & ",(0,o.kt)("inlineCode",{parentName:"p"},"containerHeight")," and also it introduces its own props:"),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("h3",{id:"name"},(0,o.kt)("inlineCode",{parentName:"h3"},"name")),(0,o.kt)("p",null,"Modal name to help identify the modal for later on."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"type"),(0,o.kt)("th",{parentName:"tr",align:null},"default"),(0,o.kt)("th",{parentName:"tr",align:null},"required"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"generated unique key")),(0,o.kt)("td",{parentName:"tr",align:null},"NO")))),(0,o.kt)("h3",{id:"dismissonpandown"},(0,o.kt)("inlineCode",{parentName:"h3"},"dismissOnPanDown")),(0,o.kt)("p",null,"Dismiss modal when panning down."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"type"),(0,o.kt)("th",{parentName:"tr",align:null},"default"),(0,o.kt)("th",{parentName:"tr",align:null},"required"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"boolean"),(0,o.kt)("td",{parentName:"tr",align:null},"true"),(0,o.kt)("td",{parentName:"tr",align:null},"NO")))),(0,o.kt)("h2",{id:"callbacks"},"Callbacks"),(0,o.kt)("h3",{id:"ondismiss"},(0,o.kt)("inlineCode",{parentName:"h3"},"onDismiss")),(0,o.kt)("p",null,"Callback when the modal dismissed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"type onDismiss = () => void;\n")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"type"),(0,o.kt)("th",{parentName:"tr",align:null},"default"),(0,o.kt)("th",{parentName:"tr",align:null},"required"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"function"),(0,o.kt)("td",{parentName:"tr",align:null},"null"),(0,o.kt)("td",{parentName:"tr",align:null},"NO")))))}u.isMDXComponent=!0}}]);