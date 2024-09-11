import{_ as s}from"./supabase-CjkNZD6A.js";import{n as c,V as i}from"./vue-3B7Upzk0.js";function l(t,e){const r=n=>{if(n==="vue")return i;if(e[n])return e[n];throw new Error("[executeCjs] Unavailable module: "+n)},u={},o={exports:u};return(typeof t=="function"?t:new Function("require","exports","module","Vue",t))(r,u,o,i),o.exports}function m(t,e){const r=l(t,{}).default;c(r).mount(e).$nextTick().then(async()=>{const{littlefoot:o}=await s(async()=>{const{littlefoot:a}=await import("./littlefoot-b-pU3aY8.js");return{littlefoot:a}},[]);o({scope:e,buttonTemplate:`<button
      aria-expanded="false"
      aria-label="Footnote <% number %>"
      class="littlefoot__button"
      id="<% reference %>"
      title="See Footnote <% number %>"
    />
      <% number %>
    </button>`})})}export{l as executeCjs,m as hydrate};
