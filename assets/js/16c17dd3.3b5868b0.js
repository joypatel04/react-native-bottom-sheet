"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[712],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return p}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},l=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),l=s(n),p=r,f=l["".concat(c,".").concat(p)]||l[p]||m[p]||a;return n?o.createElement(f,i(i({ref:t},d),{},{components:n})):o.createElement(f,i({ref:t},d))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=l;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}l.displayName="MDXCreateElement"},5230:function(e,t,n){n.d(t,{n:function(){return r}});var o=n(7294),r=function(e){var t=e.title,n=e.url;return o.createElement("video",{muted:!0,loop:!0,autoPlay:!0,controls:!1,playsInline:!0,title:t,width:"100%"},o.createElement("source",{src:n,type:"video/mp4"}))}},3919:function(e,t,n){function o(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!o(e)}n.d(t,{b:function(){return o},Z:function(){return r}})},4996:function(e,t,n){n.d(t,{C:function(){return a},Z:function(){return i}});var o=n(2263),r=n(3919);function a(){var e=(0,o.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,o){var a=void 0===o?{}:o,i=a.forcePrependBaseUrl,u=void 0!==i&&i,c=a.absolute,s=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(u)return t+n;var d=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+d:d}(a,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},8215:function(e,t,n){n(7294)},5064:function(e,t,n){n(7294),n(9443)},9443:function(e,t,n){var o=(0,n(7294).createContext)(void 0);t.Z=o},9482:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return m},toc:function(){return l},default:function(){return f}});var o=n(2122),r=n(9756),a=(n(7294),n(3905)),i=(n(5064),n(8215),n(4996)),u=n(5230),c=["components"],s={id:"custom-background",title:"Custom Background",description:"Bottom Sheet custom background.",keywords:["bottomsheet","bottom-sheet","bottom sheet","react-native","react native","ios","android","sheet","modal","presentation modal","reanimated"],image:"/img/bottom-sheet-preview.gif",slug:"/custom-background"},d=void 0,m={unversionedId:"guides/custom-background",id:"version-2/guides/custom-background",isDocsHomePage:!1,title:"Custom Background",description:"Bottom Sheet custom background.",source:"@site/versioned_docs/version-2/guides/custom-background.mdx",sourceDirName:"guides",slug:"/custom-background",permalink:"/react-native-bottom-sheet/v2/custom-background",editUrl:"https://github.com/gorhom/react-native-bottom-sheet/edit/website/versioned_docs/version-2/guides/custom-background.mdx",tags:[],version:"2",frontMatter:{id:"custom-background",title:"Custom Background",description:"Bottom Sheet custom background.",keywords:["bottomsheet","bottom-sheet","bottom sheet","react-native","react native","ios","android","sheet","modal","presentation modal","reanimated"],image:"/img/bottom-sheet-preview.gif",slug:"/custom-background"},sidebar:"version-2/packages",previous:{title:"Custom Backdrop",permalink:"/react-native-bottom-sheet/v2/custom-backdrop"},next:{title:"Adding Shadow",permalink:"/react-native-bottom-sheet/v2/adding-shadow"}},l=[{value:"Example",id:"example",children:[]}],p={toc:l};function f(e){var t=e.components,n=(0,r.Z)(e,c);return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"To override the default background, you will need to pass the prop ",(0,a.kt)("inlineCode",{parentName:"p"},"backgroundComponent")," to the ",(0,a.kt)("inlineCode",{parentName:"p"},"BottomSheet")," component."),(0,a.kt)("p",null,"When you provide your own background component, it will receive these animated props ",(0,a.kt)("inlineCode",{parentName:"p"},"animatedIndex")," & ",(0,a.kt)("inlineCode",{parentName:"p"},"animatedPosition")," that indicates the position and the index of the sheet."),(0,a.kt)("p",null,"You can extend your custom background props interface with the provided ",(0,a.kt)("inlineCode",{parentName:"p"},"BottomSheetBackgroundProps")," interface to expose ",(0,a.kt)("inlineCode",{parentName:"p"},"animatedIndex")," & ",(0,a.kt)("inlineCode",{parentName:"p"},"animatedPosition")," into your own interface."),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)(u.n,{title:"React Native Bottom Sheet Custom Background",url:(0,i.Z)("video/bottom-sheet-custom-background-preview.mp4"),mdxType:"Video"}),(0,a.kt)("p",null,"Here is an example of a custom background component:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import React, { useMemo } from 'react';\nimport { BottomSheetBackgroundProps } from '@gorhom/bottom-sheet';\nimport Animated, {\n  Extrapolate,\n  interpolate,\n  interpolateColors,\n} from 'react-native-reanimated';\n\nconst CustomBackground = ({\n  animatedIndex,\n  style,\n}: BottomSheetBackgroundProps) => {\n  // animated variables\n  const animatedBackground = useMemo(\n    () =>\n      interpolateColors(animatedIndex, {\n        inputRange: [0, 1],\n        outputColorRange: ['#fff', '#a8b5eb'],\n      }),\n    [animatedIndex]\n  );\n\n  // styles\n  const containerStyle = useMemo(\n    () => [\n      style,\n      {\n        backgroundColor: animatedBackground,\n      },\n    ],\n    [style, animatedBackground]\n  );\n\n  return <Animated.View style={containerStyle} />;\n};\n\nexport default CustomBackground;\n")))}f.isMDXComponent=!0}}]);