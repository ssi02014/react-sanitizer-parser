"use strict";(self.webpackChunkreact_sanitizer_parser=self.webpackChunkreact_sanitizer_parser||[]).push([[743],{"./src/stories/ReactSanitizerParser.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ReactSanitizerParser_stories});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),html_react_parser=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/html-react-parser/index.mjs")),purify=__webpack_require__("./node_modules/dompurify/dist/purify.js"),purify_default=__webpack_require__.n(purify),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),ReactSanitizerParser=function ReactSanitizerParser(_ref){var children=_ref.children,_ref$htmlParserOption=_ref.htmlParserOptions,htmlParserOptions=void 0===_ref$htmlParserOption?{}:_ref$htmlParserOption,_ref$sanitizerConfig=_ref.sanitizerConfig,sanitizerConfig=void 0===_ref$sanitizerConfig?{}:_ref$sanitizerConfig;return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,html_react_parser.ZP)(purify_default().sanitize(children,(0,objectSpread2.Z)((0,objectSpread2.Z)({},sanitizerConfig),{},{RETURN_DOM_FRAGMENT:!1,RETURN_DOM:!1})),(0,objectSpread2.Z)({},htmlParserOptions))})};const components_ReactSanitizerParser=ReactSanitizerParser;try{ReactSanitizerParser.displayName="ReactSanitizerParser",ReactSanitizerParser.__docgenInfo={description:"",displayName:"ReactSanitizerParser",props:{sanitizerConfig:{defaultValue:{value:"{}"},description:"",name:"sanitizerConfig",required:!1,type:{name:"Config | undefined"}},htmlParserOptions:{defaultValue:{value:"{}"},description:"",name:"htmlParserOptions",required:!1,type:{name:"HTMLReactParserOptions | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ReactSanitizerParser.tsx#ReactSanitizerParser"]={docgenInfo:ReactSanitizerParser.__docgenInfo,name:"ReactSanitizerParser",path:"src/components/ReactSanitizerParser.tsx#ReactSanitizerParser"})}catch(__react_docgen_typescript_loader_error){}var _Default$parameters,_Default$parameters2,_Default$parameters2$;const ReactSanitizerParser_stories={title:"components/ReactSanitizerParser",argTypes:{}};var Default={render:function Template(){return(0,jsx_runtime.jsx)(components_ReactSanitizerParser,{children:'\n      <p id="main" onclick=console.log(1)>\n        <p>\n          Simple\n\n        </p>\n        <span class="prettify">\n          React Sanitizer\n          <iframe//src=jAva&Tab;script:alert(3) />\n          <span>Parser</span>\n        </span>\n      </p>\n    '})},args:{}};Default.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Default.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{\n  render: Template,\n  args: {}\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})});var __namedExportsOrder=["Default"]}}]);