"use strict";(self.webpackChunksf_documentation=self.webpackChunksf_documentation||[]).push([[4195],{3667:function(e,a,n){n.r(a),n.d(a,{default:function(){return C}});var t=n(7294),l=n(6010),A=n(308),r=(n(6742),n(2263)),i="heroBanner_1ZBZ",c="banner_container_KIox",s="search_3VbB",o="searchIcon_2yGq",u=n(7462),g="features_pzNA",h="treePanel_3jIf",d="treeView_3Vjv",m="docContainer_16d-",f=[{title:"Quick Start Guide",Png:n(7034).Z,list:[{label:"Getting Started",url:"/docs/Quick_Start/getting_start"}]},{title:"Integrations",Png:n(1126).Z,list:[{label:"Overview",url:"/docs/Integrations/overview"},{label:"JAVA",url:"/docs/Integrations/java/overview"},{label:"Nginx",url:"/docs/Integrations/nginx/overview"},{label:"Kubernetes",url:"/docs/Integrations/kubernetes/overview"}]},{title:"Dashboards",Png:n(2247).Z,list:[{label:"Getting Started",url:"/docs/Dashboards/getting_started"},{label:"Dashboard Management",url:"/docs/Dashboards/dashboard_management"}]},{title:"Tracing",Png:n(9227).Z,list:[{label:"Overview",url:"/docs/Tracing/overview"},{label:"Java",url:"/docs/Tracing/java"},{label:"Python",url:"/docs/Tracing/python"},{label:"Ruby",url:"/docs/Tracing/ruby"},{label:"NodeJS",url:"/docs/Tracing/nodejs"},{label:"C#",url:"/docs/Tracing/csharp"}]},{title:"Log Management",Png:n(2241).Z,list:[{label:"Log Overview Search",url:"/docs/Log_management/log_overview"},{label:"Feature Extraction",url:"/docs/Log_management/feature_extraction"},{label:"Archival",url:"/docs/Log_management/archival"},{label:"Log Signatures",url:"/docs/Log_management/log_signatures"},{label:"ETL Jobs",url:"/docs/Log_management/etl_jobs"}]},{title:"Alerts & Notifications",Png:n(4551).Z,list:[{label:"Getting Started",url:"/docs/Alerts_notifications/getting_started"},{label:"Alert Management",url:"/docs/Alerts_notifications/alert_management"},{label:"SLO",url:"/docs/Alerts_notifications/slo"}]},{title:"sfAgent Installation",Png:n(4551).Z,list:[{label:"sfAgent Installation in Linux",url:"/docs/sfAgent_Linux/sfAgent_installation_in_Linux"}]}];function b(e){var a=e.Png,n=e.title,A=e.list;return t.createElement("div",{className:(0,l.Z)("col col--4")},t.createElement("div",{className:"text--center padding-horiz--md padLR"},t.createElement("div",{className:h},t.createElement("h4",null," ",t.createElement("img",{src:a,alt:n}),n),t.createElement("ul",{className:d},A.map((function(e){return t.createElement("li",null,t.createElement("a",{href:e.url},e.label))}))))))}function E(){return t.createElement("section",{className:g},t.createElement("div",{className:m},t.createElement("div",{className:"container"},t.createElement("div",{className:"row"},f.map((function(e,a){return t.createElement(b,(0,u.Z)({key:a},e))}))))))}function v(){var e=(0,r.Z)().siteConfig;return t.createElement("header",{className:(0,l.Z)("hero hero--primary",i)},t.createElement("div",{className:c},t.createElement("div",{className:"row"},t.createElement("div",{className:"col col--6"},t.createElement("h1",{className:"hero__title"},e.title)),t.createElement("div",{className:"col col--6 searchSection"},t.createElement("input",{className:s,name:"",placeholder:"Search documentation",type:"search"}),t.createElement("img",{className:o,name:"",src:"/img/search.svg"})))))}function C(){var e=(0,r.Z)().siteConfig;return t.createElement(A.Z,{title:""+e.title,description:"<head />"},t.createElement(v,null),t.createElement("main",null,t.createElement(E,null)))}},6979:function(e,a,n){var t=n(7294),l=n(4184),A=n.n(l),r=n(5977),i=n(2263),c=n(8084);a.Z=function(e){var a=(0,t.useRef)(!1),l=(0,t.useRef)(null),s=(0,r.k6)(),o=(0,i.Z)().siteConfig,u=(void 0===o?{}:o).baseUrl,g=(0,c.usePluginData)("docusaurus-lunr-search"),h=function(){a.current||(Promise.all([fetch(""+u+g.fileNames.searchDoc).then((function(e){return e.json()})),fetch(""+u+g.fileNames.lunrIndex).then((function(e){return e.json()})),Promise.all([n.e(9878),n.e(4452)]).then(n.bind(n,7780)),Promise.all([n.e(532),n.e(3343)]).then(n.bind(n,3343))]).then((function(e){var a=e[0],n=e[1],t=e[2].default;0!==a.length&&function(e,a,n){new n({searchDocs:e,searchIndex:a,inputSelector:"#search_input_react",handleSelected:function(e,a,n){var t=u+n.url;document.createElement("a").href=t,s.push(t)}})}(a,n,t)})),a.current=!0)},d=(0,t.useCallback)((function(a){l.current.contains(a.target)||l.current.focus(),e.handleSearchBarToggle&&e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]);return t.createElement("div",{className:"navbar__search",key:"search-box"},t.createElement("span",{"aria-label":"expand searchbar",role:"button",className:A()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:d,onKeyDown:d,tabIndex:0}),t.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:A()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:h,onMouseOver:h,onFocus:d,onBlur:d,ref:l}))}},4551:function(e,a){a.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAQCAYAAADJViUEAAAABHNCSVQICAgIfAhkiAAAAYRJREFUKFPFUl1OwkAQnmmrr3IEvEE5AXCDKpho9aFYfLaeAD2BvFOkJoImgtYTiCdobwCewPpK2o6zG4tQfl7dpG12O9/PfDsIuXVkXugppJeAYCBggYAiIPCTNLnxn7zpYjkubg7Nc0tBpUdEn3zuMzgipCISGvwV6+plcOdlmDm4dmIbqOArK90nO4nje16UFRmWVdBmmscEZYWU6vOgE4p/f2DTnvIuGvW7er4VsRcE6kwN2U04HLjGHCz6ZNaAUjoYPXb9dWBxVjeb1yzQGvZdKSpf9bNmhUN5j5N4Px/KIlFWxxmUhPUlcMa4UflXhCWrwwd3/I9gcbeIeMt9IKdY2GRZJn5sFTVVm8jBSaGBnKC4z3Gcxs62sDJSeTNAbZl27dQOOek9Vl8avW0OGKyz0w8UVlRFdfjy1w7HBpJxvBu3l2ZbFvaCIvfjgQIONEohdIIKILagqVfzRKtgUeEG3AJ+MYinjSx+vsEurThbD+4FOqtzKFgGojdQpYuVTH4ALeu9JIJh7HAAAAAASUVORK5CYII="},2247:function(e,a){a.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAOCAYAAADJ7fe0AAAABHNCSVQICAgIfAhkiAAAAc1JREFUKFONU0tSwkAQ7U7ANZ4AuAE5geQGUbBKwSqDwFo8gXoCdS2RWCVolaC5gVm4D55AjhC3FGZ8HQ0axM9UJTDd0+/1e9NhWliWbef0qb7LxDYxlSStSIV4eazx5fCq6y/W8NdAtd7qYH+CoidW7CmlxqyzAJTwWABdQ96fvc4a3o07SWrnIJV600WhFVHUuRtcuItsst+stUsRR5LLa0ozbwfnY4nHIHEHio4goZwkloEkMRCOQahmKzPTc92QrS27oOt6AIDjYb97+mNxL8jRK/fg0KX1eOZnphmRczocdI9YuoD2zmjgFP4AeCDQk0ZlahhhXEfqcNR3VllagxQfIGLq5+oFBTCfIJCDaBColwRADomCjJ55Bq4hnSgcMr9dnRPEpgkBMe9TpExqG/5XHqmNVNSIQfBvfXTteKlOnDG6VevUMjzqBiGIOtQ0UrcWN0B0wJVacwJTXTEoDRKAlfPoJEQ7RdIxKw1DzJyvRIV44gIkj5sxFzzJUUR27IlGHgDe5X2synbTwgTfo465utMqgw3OL/ElhZreVGstH6Mywe3Y78OGAH5CSLJ+qZunNmp7tsZaD+NflPGPQeSjy06zhf9M67LzbyNs2Zg8sKNCAAAAAElFTkSuQmCC"},7034:function(e,a){a.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAARCAYAAADUryzEAAAABHNCSVQICAgIfAhkiAAAAjhJREFUOE99U1Fy0lAUvfcl0V+6AukKbBbgNB3HbzO2foiODUJ/7AdhBaQrkH9B0hmLzhQkXQHZAbADugL7KyF5nhsbJig1M49c7n3vvHPOvWG6f07eNv11uo6i7+FSUq9rZwcZZ9PxVX9vs+dd09Gproy/9aMix67nVczEnJAme52tD6RgKvOUmByEjtY6QhylVnpj/DIcVjxBvju66rVlL5/UmoFm7SZZ8t5iq83Mnia9YM3CZI5aFbGLN9IUYN1iT0iK3NHXXsyCkrNYmVPs2MMGv0xxU09MD/EnMArHw359I0ECsIjkJtB0ojC8K4rFWy6Q2FpZVVwSQ1IACd1cwvGbhiu6QNO+Hn6e7zos7JC/GQ17wb3kVmGueJA7iqL79+GH2B3XGkswCX4Mv4Qsf3bpzttIWYeJj7CcMjtcGkPyEiw8Rv81NB2Jo2UGsgn5Q4BfjF6cdylTLVLZJdXtpcwM8o6wzgEyndWFThngVe2Dh3b5Sivv+vlHyOMO6jCYu9R4eiHGiuHiQQw9c7TG3+VBnuvPAvw6WCFu7hLzT8p0nc7sWBj4AOighfu7WrgF0LAdGswqlGKgmFsCmI+ysTKkfdPygGyxKRgIgDyDWZVSHhBpO59EcVwGBGuSPkrb/zApA/RnkCp+6AXG2c8BChB8fWLkE7RNtMYYrrvkcbKInrXk0ClyMFHvyyRSw/4ziWWqIketlKtIuai8zGvSYue8As34YvUlGeSjlZtx3wJ4sAv/KfwGu8YmJv2ElGAAAAAASUVORK5CYII="},1126:function(e,a){a.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAABHNCSVQICAgIfAhkiAAAAilJREFUOE+Vk09u01AQxmeeTbeEG5gLUPcEmBsYGiSUsnCasE44QdsT1F03UbygERKp5N7APYFzg5YbhC169uObSWzlDyywlDgTz/zeN9+Mmfau+FMS+J4/IkcRMYWO3IqJl0hb2sreSLpv/HQxn8RNKTc/4iTp+L/9EYr6zJyy4+LH/FaK6WPvi8BifBKEJaCvAIkOIKdng0z+vL+bSuLBpSB213gQQeXjAeS0N0ghvXMAuC0j8jxH528ehdr9PNTTrbXPcs+/Z3pn9cD4S3tkgzzLVq2EaTnGiWONmVIanKTb8nDwc1VXkYBY2hDjFneTdZIUE1+Qc78QrSEECPNLInfVwD70zhPUhffz6Zi7vWFha5uotFnZoZqfyLh3ZOuajN9XRG1nGImhigryKKD+yUo68IxXABJw92zooGI9JYVQjl8FWgm25aMl6T8iQ7FA5FlTuwuRJ5MyR8FSIWyeFOTq1wpxfEzD8H0DbyFq0FEVqqmipJJknMYOAL5aFzh4xALK/9rOP4y93hibKIN5hu8OYF93jGWOZC10xI1BrQezMoA3WGsebZTcwIscXogvekkHhkwsW62GCqhZnC1QhyyFGvvwaGOmAmS7Ha1kvCq0NQmjRvRWVhrzHzfvTQttFKxfj7B6gUXbLOcuRCwkh6nQBZIemiRt2fPkgEukPGAQl9vbvQ3JsXQqDx6NAYqg6Fhi59xPxAXe7mzxbVLsq2sh+w/+J/4DYfEWIZGm9BgAAAAASUVORK5CYII="},2241:function(e,a){a.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAARCAYAAAACCvahAAAABHNCSVQICAgIfAhkiAAAAXtJREFUOE+lU0FOwlAQffNL2Liw3oAbCGsXcgNJwA2YCKFulXgCjtC9rXShuBAEb8ANWm9QTiBuIe04LbShTSUk/lX/zH9v3ryZUrPTdwh0iz8OMzvTsd0rSlOrY/Dk1aKiZKttDCU+YPCsiOAYMJi4AmHIExwGd4yByD5XrBwhMAXv7RMcBDe6XV3baCYxVXZtVaHQmLxYi+h+EJz3QTxYCHhYCG7dGHUKiFMQ4ed9/OQl92a7byooJ4llKu/cTbEhQv9j/OykAduN3PfRr8WxFBz1V1qXHvalillf0zd7DsttgOgK4KXk62L/NzTuHVfZdhcIw3uQegRJ5e1ZFYHTnkX2MpZtuY7M2YNSp+CwJgTyjXkWLHOVR3oiXWR7O9lzQM2A8ERya2nhAsyfmZ61tTYiIl1AfmabRq6OQHolDGJihgmjlqsso4pdDGm1P6JEyXX7rropb/y546z+vyTRLykyLkVu4mJ+sbZ38UJ2+ywoB9W0cvHL46K/86TrxbFoUlIAAAAASUVORK5CYII="},9227:function(e,a){a.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAdBJREFUOE+NUjFOAkEU/bO7WNjIDcQbwA1ILGxH0UShcBG0sdAbSG2FMbFRZCykEWV7CrnB7hGorNeWzO74/ghEXRQn2WSyf9777/33Bf1ypO/nvYl3hrIkQUV+ZowJcA+eHzsPM5hYhN+rHhdTSgeCxINOtQq2zvL8bm94Q4ZMCyRrOqe3A6XiDAF3diduKBxR72+eRpSIVxLmfd7IIbkzvJYOOX6/d1fOEFSqjTY6xyi2qBOOAFTUKClL0Al9SJDULMndajOAyiBDgEKsV3SB5QEQAWz9z8/0H9tkO98I5L5f8BxPsTQLuAvH5BLfY3w8h5gSGkOBnclurWn+JmALDl3i7RtpEHi0CoITtrCQwP6EBSiwHaaeywD4U0UKCYx4JqzWdd3sDCq1hkLeo5fe/WxwERmnawlEug2wtWeHLcQ4G+PnHCIkUX7q3UbUDfOQzdnHsNOmeimuHDQk7q0kl3yPcad65CPfdUy3/tmRLr5u3Ww7uY53khvMFTAYks4tzoiANxAeW7jzKof8H9Y2oEwh5raN2fbAmYGTJJGQP8CCXM1ngDoPLOfk8tbSjyOWgX8CMgS8DDrRG4s6LwNbCxwbfB2mJq1/lf0fML/5AE7h4+nBI0A0AAAAAElFTkSuQmCC"}}]);