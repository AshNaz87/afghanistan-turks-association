(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{eWDE:function(e,t,a){"use strict";a.r(t),a.d(t,"blogListQuery",(function(){return d}));var n=a("dI71"),r=a("q1tI"),l=a.n(r),c=a("Wbzz"),o=a("v7au"),m=a("Bl7J"),i=a("9eSz"),s=a.n(i),u=function(e){var t=e.data;return l.a.createElement("div",{className:"col-xs-12 col-sm-6 col-md-4"},l.a.createElement("article",{className:"post-card mb-5"},t.frontmatter.featuredImage?l.a.createElement(c.Link,{to:t.frontmatter.slug},l.a.createElement(s.a,{fluid:t.frontmatter.featuredImage.childImageSharp.fluid,objectFit:"cover",objectPosition:"50% 50%",alt:t.frontmatter.title+" - Featured image",className:"featured-image"})):"",l.a.createElement("div",{className:"post-content"},l.a.createElement("h2",{className:"title"},l.a.createElement(c.Link,{to:t.frontmatter.slug},t.frontmatter.title)),l.a.createElement("p",{className:"meta"},l.a.createElement("time",null,t.frontmatter.date)))))},g=a("vrFN"),d="649672532",p=function(e){return l.a.createElement("div",{className:"pagination"},l.a.createElement("ul",null,!e.isFirst&&l.a.createElement("li",null,l.a.createElement(c.Link,{to:e.prevPage,rel:"prev"},l.a.createElement("span",{className:"icon -left"},l.a.createElement(o.a,null))," ","Previous")),Array.from({length:e.numPages},(function(t,a){return l.a.createElement("li",{key:"pagination-number"+(a+1)},l.a.createElement(c.Link,{to:""+e.blogSlug+(0===a?"":a+1),className:e.currentPage===a+1?"is-active num":"num"},a+1))})),!e.isLast&&l.a.createElement("li",null,l.a.createElement(c.Link,{to:e.nextPage,rel:"next"},"Next"," ",l.a.createElement("span",{className:"icon -right"},l.a.createElement(o.c,null))))))},f=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e=this.props.data,t=this.props.pageContext,a=t.currentPage,n=t.numPages,r=1===a,c=a===n,o=a-1==1?"/blog/":"/blog/"+(a-1).toString(),i="/blog/"+(a+1).toString(),s=e.allMarkdownRemark.edges.filter((function(e){return!!e.node.frontmatter.date})).map((function(e){return l.a.createElement(u,{key:e.node.id,data:e.node})})),d={isFirst:r,prevPage:o,numPages:n,blogSlug:"/blog/",currentPage:a,isLast:c,nextPage:i};return l.a.createElement(m.a,{className:"blog-page"},l.a.createElement(g.a,{title:"Blog — Page "+a+" of "+n,description:"Stackrole base blog page "+a+" of "+n}),l.a.createElement("h1",null,"Blog"),l.a.createElement("div",{className:"grids col-1 sm-2 lg-3"},s),l.a.createElement(p,d))},t}(l.a.Component);t.default=f}}]);
//# sourceMappingURL=component---src-templates-blog-list-js-079f194e73c5b7453469.js.map