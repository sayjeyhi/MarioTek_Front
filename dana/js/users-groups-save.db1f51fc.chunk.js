(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[25],{"4b8c4cb7162280b4755f":function(e,t,a){"use strict";a.r(t);var n=a("102e2070c9c292525c19"),c=a.n(n),r=a("43d15a5c48de0816bbd2"),l=a.n(r),o=a("938278b568b7a433170b"),i=a.n(o),s=a("b8d79e6c173c24c83314"),d=a.n(s),b=a("7ce82b4be1ad5aff484a"),m=a.n(b),p=a("3060c71303c9820a1449"),E=a.n(p),u=a("a2037f49db6530f88dd0"),f=a.n(u),h=a("f1abc843ac050fb04af8"),k=a("bd1f1a6634b9a575c83e"),y=a("d4953bc45a2711d3efbb"),g=a("59d03429ebc4513de159"),S=a("4b4bbaea56bbab73741d"),_=[{title:"داشبورد",key:"dashboard",children:[{title:"بلوک‌ها",key:"dashboard-blocks",children:[{title:"بلوک-0",key:"dashboard-blocks-0"},{title:"بلوک-1",key:"dashboard-blocks-1"},{title:"بلوک-2",key:"dashboard-blocks-2"}]},{title:"نمودار‌ها",key:"dashboard-charts",children:[{title:"نمودار-0",key:"dashboard-charts-0"},{title:"نمودار-1",key:"dashboard-charts-1"},{title:"نمودار-2",key:"dashboard-charts-2"}]},{title:"جزئیات بلوک‌ها",key:"dashboard-block-details"}]},{title:"مخازن",key:"repositories",children:[{title:"مخازن صوت",key:"repositories-audio"},{title:"مخازن تصویر",key:"repositories-image"},{title:"مخازن ویدئو",key:"repositories-video"}]},{title:"الگوریتم‌ها",key:"0-2"}];t.default=function(){var e=Object(S.a)(),t=Object(h.h)(),a=Object(h.j)().id,n=Object(u.useState)(["repositories","dashboard"]),r=E()(n,2),o=r[0],s=r[1],b=Object(u.useState)(["repositories"]),p=E()(b,2),C=p[0],O=p[1],A=Object(u.useState)([]),L=E()(A,2),x=L[0],I=L[1],T=Object(u.useState)(!0),j=E()(T,2),w=j[0],v=j[1],U=m.a.useForm(),N=E()(U,1)[0],D="".concat(e.Globals[a?"edit":"add"]," ").concat(e.user.group.title);Object(g.a)([{link:y.a.users.groupsList,title:e.user.group.title},{link:Object(h.f)(y.a.users.save,{id:a}),title:D}]);return f.a.createElement(c.a,null,f.a.createElement(k.a,{title:D}),f.a.createElement(m.a,{form:N,onFinish:function(e){return e}},f.a.createElement(m.a.Item,{labelCol:{xs:{span:6}},wrapperCol:{xs:{span:12}},label:e.user.group.save.name,name:"name"},f.a.createElement(d.a,null)),f.a.createElement(m.a.Item,{label:e.user.group.filters.access_tree_includes,name:"access_tree",labelCol:{xs:{span:6}},wrapperCol:{xs:{span:12}}},f.a.createElement(i.a,{checkable:!0,onExpand:function(e){console.log("onExpand",e),s(e),v(!1)},expandedKeys:o,autoExpandParent:w,onCheck:function(e){console.log("onCheck",e),O(e)},checkedKeys:C,onSelect:function(e,t){console.log("onSelect",t),I(e)},selectedKeys:x,treeData:_})),f.a.createElement(m.a.Item,{labelCol:{xs:{span:6}},wrapperCol:{xs:{span:12}},label:e.repositories.sub_repo.save.description,name:"description",rules:[{required:!0,message:e.Globals.errors.required_field}]},f.a.createElement(d.a.TextArea,{rows:3})),f.a.createElement(m.a.Item,{labelCol:{xs:{span:6}},wrapperCol:{xs:{span:12}}},f.a.createElement(l.a,{type:"primary",htmlType:"submit"},e.Globals.submit),f.a.createElement(l.a,{onClick:function(){return t.goBack()},style:{margin:"0 8px"},type:"danger"},e.Globals.cancel))))}},"59d03429ebc4513de159":function(e,t,a){"use strict";var n=a("a2037f49db6530f88dd0"),c=a("63377593be11492caefe"),r=a("887dd10622cde94ee600");t.a=function(e){var t=Object(n.useContext)(c.b).setBreadcrumb;Object(r.a)((function(){t(e)}),[e])}},a5138a87cf6b6c7cee0a:function(e,t,a){e.exports=a.p+"images/favicon.874d2876e35ce2540b9cd7936601d657.ico"},bd1f1a6634b9a575c83e:function(e,t,a){"use strict";var n=a("a2037f49db6530f88dd0"),c=a.n(n),r=a("ece2317ff1c98e67925f"),l=a.n(r),o=a("22a7689fd6ebf6b2ced8"),i=a("a5138a87cf6b6c7cee0a"),s=a.n(i),d={NAME:"دانا",URL:"http://danaproject.ir",CLIENT:"WEB",APP_VERSION:"0.0.1",LOCATION_ACCESS_TIMEOUT:5e3,RESPONSE_ITEMS_LIMIT:25,API_STATUSES:{NOT_CALLED:"NOT_CALLED",REQUEST:"REQUEST",SUCCESS:"SUCCESS",FAILURE:"FAILURE"}},b=function(e){var t=e.title,a=e.description,n=e.keywords,r=e.image,l=e.canonical,i=e.children;return c.a.createElement(o.Helmet,null,c.a.createElement("title",null,t?"".concat(t," | ").concat(d.NAME):d.NAME),c.a.createElement("meta",{charSet:"UTF-8"}),c.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"}),c.a.createElement("meta",{httpEquiv:"X-UA-Compatible",content:"IE=edge"}),c.a.createElement("meta",{name:"description",content:a}),c.a.createElement("link",{rel:"icon",href:s.a,type:"image/x-icon"}),n&&c.a.createElement("meta",{name:"keywords",content:n.join(",")}),l&&c.a.createElement("link",{rel:"canonical"}),c.a.createElement("meta",{property:"og:image",content:r||"/defaultImage.jpg"}),c.a.createElement("meta",{property:"og:title",content:t}),c.a.createElement("meta",{property:"og:site_name",content:d.NAME}),c.a.createElement("meta",{property:"og:url",content:d.URL}),i)};b.propTypes={title:l.a.string,description:l.a.string,keywords:l.a.array,image:l.a.string,canonical:l.a.string,children:l.a.string};t.a=b}}]);