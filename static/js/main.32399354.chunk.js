(this["webpackJsonpmental-math"]=this["webpackJsonpmental-math"]||[]).push([[0],{15:function(e,t,n){e.exports=n(25)},20:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(12),u=n.n(l),s=(n(20),n(9)),o=n(5),i=n(6),c=n(7),h=n(8),m=n(27),p=n(26),v=(n(11),n(4)),d=function(e){var t=e.previousLatex,n=e.previousAnswers,a=e.previousGuesses,l=function(){return r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Previous Question"),r.a.createElement("th",null,"Answer"),r.a.createElement("th",null,"Guess"),r.a.createElement("th",null,"Error (Abs. Value)")))},u=t.map((function(e,t){var l=Math.abs(Math.trunc(100*(n[t]-a[t])/n[t]));return r.a.createElement("tr",{key:t},r.a.createElement("td",null,e),r.a.createElement("td",null,n[t]),r.a.createElement("td",null,a[t]),r.a.createElement("td",null,l,"%"))})),s=n.map((function(e,t){return Math.abs(Math.trunc(100*(n[t]-a[t])/n[t]))})),o=Math.trunc(m.a(p.a,0,s))/s.length;return r.a.createElement("div",null,r.a.createElement("table",null,r.a.createElement(l,null),r.a.createElement("tbody",null,u)),!isNaN(o)&&r.a.createElement("div",null,r.a.createElement("h3",null,"Overall Error (Abs. Value)"),r.a.createElement(v.InlineMath,null,o+" \\% \\ \\mathrm{error} \\ \\mathrm{on} \\ "+s.length+"\\ \\mathrm{question(s)}")))},E=n(13),f={guess:null},b=function(e){Object(h.a)(n,e);var t=Object(c.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,l=new Array(a),u=0;u<a;u++)l[u]=arguments[u];return(e=t.call.apply(t,[this].concat(l))).state=f,e.handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(E.a)({},a,r))},e.questionType=function(e,t,n){if(0==n){var a=Math.floor(100*e),l=Math.floor(100*t);return[a*l,r.a.createElement(v.InlineMath,null,a+" \\times "+l)]}if(1==n){var u=Math.floor(100*e),s=Math.floor(10*t);return[Math.round(u/s),r.a.createElement(v.InlineMath,null,"\\frac{"+u+"}{ "+s+"}")]}if(2==n){var o=Math.floor(1e3*e),i=Math.floor(1e3*t);return[Math.round(o+i),r.a.createElement(v.InlineMath,null,o+" + "+i)]}if(3==n){var c=Math.floor(1e3*e),h=Math.floor(1e3*t);return[Math.round(c-h),r.a.createElement(v.InlineMath,null,c+" - "+h)]}if(4==n){var m=5*Math.round(20*e),p=Math.floor(100*t);return[Math.round(m/100*p),r.a.createElement(v.InlineMath,null,m+" \\% \\ \\mathrm{of} \\ "+p)]}},e.handleGuess=function(t){t.preventDefault();var n=e.props,a=n.handleSubmit,r=n.currentQuestionType,l=n.randInt1,u=n.randInt2;e.state.guess?(a(e.state.guess,e.questionType(l,u,r)[0],e.questionType(l,u,r)[1]),e.setState(f)):(alert("Please enter a number"),e.setState(f))},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this.state.guess,t=this.props,n=t.currentQuestionType,a=t.randInt1,l=t.randInt2;return r.a.createElement("div",null,r.a.createElement("h4",null,this.questionType(a,l,n)[1]),r.a.createElement("form",{onSubmit:this.handleGuess},r.a.createElement("label",null,"Guess"),r.a.createElement("input",{type:"number",name:"guess",id:"guess",value:e||"",onChange:this.handleChange,autoFocus:!0}),r.a.createElement("button",{type:"submit"},"Submit")))}}]),n}(a.Component),M={previousLatex:[],previousAnswers:[],previousGuesses:[],currentQuestionType:0,randInt1:Math.random(),randInt2:Math.random()},y=function(e){Object(h.a)(n,e);var t=Object(c.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state=M,e.questionTypes=5,e.handleSubmit=function(t,n,a){e.setState({previousGuesses:[].concat(Object(s.a)(e.state.previousGuesses),[t])}),e.setState({previousAnswers:[].concat(Object(s.a)(e.state.previousAnswers),[n])}),e.setState({previousLatex:[].concat(Object(s.a)(e.state.previousLatex),[a])}),e.setState({currentQuestionType:Math.floor(Math.random()*e.questionTypes)}),e.setState({randInt1:Math.random()}),e.setState({randInt2:Math.random()})},e.handleReset=function(){e.setState(M)},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this,t=this.state;t.input,t.outputUnit,t.GNis1;return r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Mental Math"),r.a.createElement("p",null,"Simple mental math practice."),r.a.createElement("h2",null,"Current Question"),r.a.createElement(b,{handleSubmit:this.handleSubmit,currentQuestionType:this.state.currentQuestionType,randInt1:this.state.randInt1,randInt2:this.state.randInt2}),r.a.createElement("h3",null,"History"),r.a.createElement(d,{previousLatex:this.state.previousLatex,previousAnswers:this.state.previousAnswers,previousGuesses:this.state.previousGuesses}),r.a.createElement("input",{type:"button",value:"Reset",onClick:function(){e.handleReset()}}),r.a.createElement("input",{type:"button",value:"State",onClick:function(){console.log(e.state)}}))}}]),n}(a.Component);u.a.render(r.a.createElement(y,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.32399354.chunk.js.map