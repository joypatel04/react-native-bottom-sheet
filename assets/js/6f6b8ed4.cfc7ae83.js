"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8452],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),m=o,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},5230:function(e,t,r){r.d(t,{n:function(){return o}});var n=r(7294),o=function(e){var t=e.title,r=e.url;return n.createElement("video",{muted:!0,loop:!0,autoPlay:!0,controls:!1,playsInline:!0,title:t,width:"100%"},n.createElement("source",{src:r,type:"video/mp4"}))}},3919:function(e,t,r){function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}r.d(t,{b:function(){return n},Z:function(){return o}})},4996:function(e,t,r){r.d(t,{C:function(){return a},Z:function(){return i}});var n=r(2263),o=r(3919);function a(){var e=(0,n.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var a=void 0===n?{}:n,i=a.forcePrependBaseUrl,l=void 0!==i&&i,s=a.absolute,u=void 0!==s&&s;if(!r)return r;if(r.startsWith("#"))return r;if((0,o.b)(r))return r;if(l)return t+r;var c=r.startsWith(t)?r:t+r.replace(/^\//,"");return u?e+c:c}(a,r,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},5952:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return p},default:function(){return f}});var n=r(2122),o=r(9756),a=(r(7294),r(3905)),i=r(4996),l=r(5230),s=["components"],u={id:"getting-started",title:"Getting Started",sidebar_label:"Getting Started",description:"A performant interactive bottom sheet modal with fully configurable options \ud83d\ude80",keywords:["bottomsheet","bottom-sheet","bottom sheet","react-native","react native","ios","android","sheet","modal","presentation modal","reanimated"],image:"/img/bottom-sheet-modal-preview.gif",slug:"/modal"},c="React Native Bottom Sheet Modal",d={unversionedId:"modal/getting-started",id:"modal/getting-started",isDocsHomePage:!1,title:"Getting Started",description:"A performant interactive bottom sheet modal with fully configurable options \ud83d\ude80",source:"@site/docs/modal/getting-started.mdx",sourceDirName:"modal",slug:"/modal",permalink:"/react-native-bottom-sheet/modal",editUrl:"https://github.com/gorhom/react-native-bottom-sheet/edit/website/docs/modal/getting-started.mdx",tags:[],version:"current",frontMatter:{id:"getting-started",title:"Getting Started",sidebar_label:"Getting Started",description:"A performant interactive bottom sheet modal with fully configurable options \ud83d\ude80",keywords:["bottomsheet","bottom-sheet","bottom sheet","react-native","react native","ios","android","sheet","modal","presentation modal","reanimated"],image:"/img/bottom-sheet-modal-preview.gif",slug:"/modal"},sidebar:"packages",previous:{title:"FAQ",permalink:"/react-native-bottom-sheet/faq"},next:{title:"Usage",permalink:"/react-native-bottom-sheet/modal/usage"}},p=[{value:"Features",id:"features",children:[]},{value:"Installation",id:"installation",children:[]}],m={toc:p};function f(e){var t=e.components,r=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"react-native-bottom-sheet-modal"},"React Native Bottom Sheet Modal"),(0,a.kt)(l.n,{title:"React Native Bottom Sheet Modal",url:(0,i.Z)("video/bottom-sheet-modal-preview.mp4"),mdxType:"Video"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Bottom Sheet Modal")," is wrapper/decorator on top of the ",(0,a.kt)("strong",{parentName:"p"},"Bottom Sheet"),", it provides all of its functionalities with extra modal presentation functionalities."),(0,a.kt)("p",null,"With the release of the library, support for stack sheet modals were something planned ahead to provide the a native feel & and experience to users."),(0,a.kt)("p",null,"The implementation of this feature was inspired by Apple Maps sheet modals \u2764\ufe0f, ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/gorhom/react-native-bottom-sheet/blob/master/example/src/screens/advanced/MapExample.tsx"},"check out the Apple Map sheet modals clone"),"."),(0,a.kt)("h2",{id:"features"},"Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"...",(0,a.kt)("a",{parentName:"li",href:"/#features"},"Bottom Sheet Features")),(0,a.kt)("li",{parentName:"ul"},"Smooth interaction and mounting animation."),(0,a.kt)("li",{parentName:"ul"},"Support stack sheet modals.")),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"This feature is already shipped with ",(0,a.kt)("inlineCode",{parentName:"p"},"@gorhom/bottom-sheet")," package and it requires no extra dependency."))}f.isMDXComponent=!0}}]);