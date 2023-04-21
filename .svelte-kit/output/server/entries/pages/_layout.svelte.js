import { c as create_ssr_component, b as add_attribute, e as escape, v as validate_component } from "../../chunks/index.js";
const app = "";
const scrollbar = "";
const PageButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name = "" } = $$props;
  let { src = "" } = $$props;
  let { imgsrc = "" } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.imgsrc === void 0 && $$bindings.imgsrc && imgsrc !== void 0)
    $$bindings.imgsrc(imgsrc);
  return `<div class="${"h-full w-32 cursor-pointer hover:backdrop-brightness-110 flex flex-row justify-center flex-wrap content-center"}">${imgsrc ? `<img${add_attribute("src", imgsrc, 0)} class="${""}">` : ``}

	<h2 class="${"text-center"}">${escape(name)}</h2></div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1uo07vi_START --><style>@import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');
	</style><!-- HEAD_svelte-1uo07vi_END -->`, ""}

<header class="${"sticky "}"><div style="${"height: 50px"}" class="${"flex flex-row overflow-hidden"}"><div class="${"h-full w-24 flex flex-row justify-center flex-wrap content-center hover:backdrop-brightness-110"}"><img src="${"/images/logo.png"}" class="${"h-10"}"></div>

		${validate_component(PageButton, "PageButton").$$render($$result, { name: "Dictionary", src: "pages/dict" }, {}, {})}
		${validate_component(PageButton, "PageButton").$$render($$result, { name: "Handbook", src: "pages/handbook" }, {}, {})}</div></header>

<div class="${"justify-center m-auto relative flex flex-col"}">${slots.default ? slots.default({}) : ``}</div>`;
});
export {
  Layout as default
};
