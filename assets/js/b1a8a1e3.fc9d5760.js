"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5146],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),u=r,h=m["".concat(c,".").concat(u)]||m[u]||d[u]||a;return n?o.createElement(h,i(i({ref:t},p),{},{components:n})):o.createElement(h,i({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8215:function(e,t,n){n(7294)},5064:function(e,t,n){n(7294),n(9443)},9443:function(e,t,n){var o=(0,n(7294).createContext)(void 0);t.Z=o},1305:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var o=n(2122),r=n(9756),a=(n(7294),n(3905)),i=(n(5064),n(8215),["components"]),s={id:"methods",title:"Methods",description:"Bottom Sheet methods.",keywords:["bottomsheet","bottom-sheet","bottom sheet","react-native","react native","ios","android","sheet","modal","presentation modal","reanimated"],image:"/img/bottom-sheet-preview.gif",slug:"/methods"},c=void 0,l={unversionedId:"methods",id:"version-2/methods",isDocsHomePage:!1,title:"Methods",description:"Bottom Sheet methods.",source:"@site/versioned_docs/version-2/methods.md",sourceDirName:".",slug:"/methods",permalink:"/react-native-bottom-sheet/v2/methods",editUrl:"https://github.com/gorhom/react-native-bottom-sheet/edit/website/versioned_docs/version-2/methods.md",tags:[],version:"2",frontMatter:{id:"methods",title:"Methods",description:"Bottom Sheet methods.",keywords:["bottomsheet","bottom-sheet","bottom sheet","react-native","react native","ios","android","sheet","modal","presentation modal","reanimated"],image:"/img/bottom-sheet-preview.gif",slug:"/methods"},sidebar:"version-2/packages",previous:{title:"Props",permalink:"/react-native-bottom-sheet/v2/props"},next:{title:"Hooks",permalink:"/react-native-bottom-sheet/v2/hooks"}},p=[{value:"<code>snapTo</code>",id:"snapto",children:[]},{value:"<code>expand</code>",id:"expand",children:[]},{value:"<code>collapse</code>",id:"collapse",children:[]},{value:"<code>close</code>",id:"close",children:[]}],d={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"These methods are accessible using the bottom sheet reference."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import React, { useRef } from 'react';\nimport { Button } from 'react-native';\nimport BottomSheet from '@gorhom/bottom-sheet';\n\nconst App = () => {\n  const bottomSheetRef = useRef<BottomSheet>(null);\n\n  const handleClosePress = () => bottomSheetRef.current.close()\n\n  return (\n    <>\n      <Button title=\"Close Sheet\" onPress={handleClosePress} />\n      <BottomSheet ref={bottomSheetRef}>\n    </>\n  )\n}\n\n")),(0,a.kt)("h3",{id:"snapto"},(0,a.kt)("inlineCode",{parentName:"h3"},"snapTo")),(0,a.kt)("p",null,"Animate the sheet to one of the provided point from ",(0,a.kt)("inlineCode",{parentName:"p"},"snapPoints"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"type snapTo = (index: number) => void;\n")),(0,a.kt)("h3",{id:"expand"},(0,a.kt)("inlineCode",{parentName:"h3"},"expand")),(0,a.kt)("p",null,"Animate the sheet to the highest provided point from ",(0,a.kt)("inlineCode",{parentName:"p"},"snapPoints"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"type expand = () => void;\n")),(0,a.kt)("h3",{id:"collapse"},(0,a.kt)("inlineCode",{parentName:"h3"},"collapse")),(0,a.kt)("p",null,"Animate the sheet to the lowest provided point from ",(0,a.kt)("inlineCode",{parentName:"p"},"snapPoints"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"type collapse = () => void;\n")),(0,a.kt)("h3",{id:"close"},(0,a.kt)("inlineCode",{parentName:"h3"},"close")),(0,a.kt)("p",null,"Close the sheet."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"type close = () => void;\n")))}m.isMDXComponent=!0}}]);