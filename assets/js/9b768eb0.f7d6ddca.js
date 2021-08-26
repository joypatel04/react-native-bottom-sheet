"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8282],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=r,d=u["".concat(l,".").concat(h)]||u[h]||m[h]||a;return n?o.createElement(d,i(i({ref:t},p),{},{components:n})):o.createElement(d,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7192:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var o=n(2122),r=n(9756),a=(n(7294),n(3905)),i=["components"],s={id:"bottomsheetview",title:"BottomSheetView",description:"a pre-integrated React Native View with BottomSheet gestures.",image:"/img/bottom-sheet-preview.gif",slug:"/components/bottomsheetview"},l=void 0,c={unversionedId:"components/bottomsheetview",id:"components/bottomsheetview",isDocsHomePage:!1,title:"BottomSheetView",description:"a pre-integrated React Native View with BottomSheet gestures.",source:"@site/docs/components/bottomsheetview.md",sourceDirName:"components",slug:"/components/bottomsheetview",permalink:"/react-native-bottom-sheet/components/bottomsheetview",editUrl:"https://github.com/gorhom/react-native-bottom-sheet/edit/website/docs/components/bottomsheetview.md",tags:[],version:"current",frontMatter:{id:"bottomsheetview",title:"BottomSheetView",description:"a pre-integrated React Native View with BottomSheet gestures.",image:"/img/bottom-sheet-preview.gif",slug:"/components/bottomsheetview"},sidebar:"packages",previous:{title:"Scrollables",permalink:"/react-native-bottom-sheet/scrollables"},next:{title:"BottomSheetScrollView",permalink:"/react-native-bottom-sheet/components/bottomsheetscrollview"}},p=[{value:"Props",id:"props",children:[{value:"<code>focusHook</code>",id:"focushook",children:[]}]},{value:"Example",id:"example",children:[]}],m={toc:p};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A pre-integrated ",(0,a.kt)("inlineCode",{parentName:"p"},"React Native")," View with ",(0,a.kt)("inlineCode",{parentName:"p"},"BottomSheet")," gestures."),(0,a.kt)("h2",{id:"props"},"Props"),(0,a.kt)("p",null,"Inherits ",(0,a.kt)("inlineCode",{parentName:"p"},"ViewProps")," from ",(0,a.kt)("inlineCode",{parentName:"p"},"react-native"),"."),(0,a.kt)("h3",{id:"focushook"},(0,a.kt)("inlineCode",{parentName:"h3"},"focusHook")),(0,a.kt)("p",null,"This needed when bottom sheet used with multiple scrollables to allow bottom sheet detect the current scrollable ref, especially when used with React Navigation. You will need to provide ",(0,a.kt)("inlineCode",{parentName:"p"},"useFocusEffect")," from ",(0,a.kt)("inlineCode",{parentName:"p"},"@react-navigation/native"),"."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"type"),(0,a.kt)("th",{parentName:"tr",align:null},"default"),(0,a.kt)("th",{parentName:"tr",align:null},"required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"function"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"React.useEffect")),(0,a.kt)("td",{parentName:"tr",align:null},"NO")))),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import React, { useCallback, useRef, useMemo } from "react";\nimport { StyleSheet, View, Text, Button } from "react-native";\nimport BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";\n\nconst App = () => {\n  // hooks\n  const sheetRef = useRef<BottomSheet>(null);\n\n  // variables\n  const snapPoints = useMemo(() => ["25%", "50%", "90%"], []);\n\n  // callbacks\n  const handleSheetChange = useCallback((index) => {\n    console.log("handleSheetChange", index);\n  }, []);\n  const handleSnapPress = useCallback((index) => {\n    sheetRef.current?.snapToIndex(index);\n  }, []);\n  const handleClosePress = useCallback(() => {\n    sheetRef.current?.close();\n  }, []);\n\n  // render\n  return (\n    <View style={styles.container}>\n      <Button title="Snap To 90%" onPress={() => handleSnapPress(2)} />\n      <Button title="Snap To 50%" onPress={() => handleSnapPress(1)} />\n      <Button title="Snap To 25%" onPress={() => handleSnapPress(0)} />\n      <Button title="Close" onPress={() => handleClosePress()} />\n      <BottomSheet\n        ref={sheetRef}\n        snapPoints={snapPoints}\n        onChange={handleSheetChange}\n      >\n        <BottomSheetView>\n          <Text>Awesome \ud83d\udd25</Text>\n        </BottomSheetView>\n      </BottomSheet>\n    </View>\n  );\n};\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    paddingTop: 200,\n  },\n});\n\nexport default App;\n')))}u.isMDXComponent=!0}}]);