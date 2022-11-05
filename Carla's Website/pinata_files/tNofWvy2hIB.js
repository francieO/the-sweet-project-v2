if (self.CavalryLogger) { CavalryLogger.start_js_script(document.currentScript); }/*FB_PKG_DELIM*/

__d("usePolarisQueryStore",["PolarisQueryContext","err","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react").useContext;function a(){var a=h(c("PolarisQueryContext"));if(a==null)throw c("err")("PolarisQueryStore context not found");return a}g["default"]=a}),98);
__d("PolarisQueryBaseHooks",["react","usePolarisQueryStore"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react").useEffect;function a(a,b,d){var e=c("usePolarisQueryStore")(),f;d==="GET"?f=e.addGetSetup(a,b):f=e.addPostSetup(a,b);if(f.status==="LOADING")throw f.promise;else if(f.status==="ERROR")throw f.error;h(function(){return f.cleanup},[f.cleanup])}function b(a,b){var d=c("usePolarisQueryStore")();b==="GET"?b=d.getGetResponse(a):b=d.getPostResponse(a);if(b.status==="LOADING")throw b.promise;else if(b.status==="ERROR")throw b.error;else return b.response}g.usePolarisAnyQuerySetup=a;g.usePolarisAnyQueryResponse=b}),98);
__d("usePolarisGetQuery",["usePolarisQueryStore"],(function(a,b,c,d,e,f,g){"use strict";function a(a,b,d){var e=c("usePolarisQueryStore")();return e.loadGetQuery([a,b],d)}g["default"]=a}),98);
__d("usePolarisGetQueryResponse",["PolarisQueryBaseHooks"],(function(a,b,c,d,e,f,g){"use strict";function a(a){return d("PolarisQueryBaseHooks").usePolarisAnyQueryResponse(a,"GET")}g["default"]=a}),98);
__d("usePolarisGetQuerySetup",["PolarisQueryBaseHooks"],(function(a,b,c,d,e,f,g){"use strict";function a(a,b){d("PolarisQueryBaseHooks").usePolarisAnyQuerySetup(a,b,"GET")}g["default"]=a}),98);