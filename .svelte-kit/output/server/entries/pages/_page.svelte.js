import { c as create_ssr_component } from "../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"flex flex-col content-center items-center"}"><img src="${"/images/logo.png"}" class="${"w-52"}">

    <h2>DeutschLerner is an app, in which i can learn the language way more efficiently than before.
    </h2></div>
<h1>Starting points:</h1>

<h2>Root doc search</h2>
<h2>New Root doc</h2>
<h2>Register/login</h2>`;
});
export {
  Page as default
};
