import { c as create_ssr_component, e as escape, f as each, v as validate_component, d as subscribe } from "../../../../chunks/index.js";
import { createClient } from "@supabase/supabase-js";
import { w as writable } from "../../../../chunks/index2.js";
import "querystring";
var FieldTypes = /* @__PURE__ */ ((FieldTypes2) => {
  FieldTypes2["number"] = "number";
  FieldTypes2["string"] = "string";
  FieldTypes2["list"] = "list";
  return FieldTypes2;
})(FieldTypes || {});
const WordFieldString = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<p class="${"w-full"}">${escape(data)}</p>`;
});
const WordFieldList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let data2;
  let { data = [] } = $$props;
  let colors = {
    a: "bg-red-500",
    b: "bg-blue-500",
    c: "bg-yellow-500",
    z: "bg-green-500",
    d: "bg-purple-500",
    e: "bg-pink-500",
    f: "bg-brown-500"
  };
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  data2 = data.sort(function(a, b) {
    if (a.numbers > b.numbers) {
      return 1;
    }
    if (b.numbers > a.numbers) {
      return -1;
    }
    return 0;
  });
  return `${each(data2, (d, i) => {
    var _a;
    return `${data2[i] ? `<p class="${"w-full " + escape(colors[data2[i].numbers], true) + " mb-0.5 p-0.5"}">${escape((_a = data2[i]) == null ? void 0 : _a.text)} </p>` : ``}`;
  })}`;
});
const WordRow = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { word } = $$props;
  let { fields = [] } = $$props;
  console.log("megy");
  if ($$props.word === void 0 && $$bindings.word && word !== void 0)
    $$bindings.word(word);
  if ($$props.fields === void 0 && $$bindings.fields && fields !== void 0)
    $$bindings.fields(fields);
  return `<tr class="${"bg-gray-300 h-10 border-indigo-500 border-solid border-4 align-top"}">${each(fields, (field) => {
    return `<td>${word[field.name] ? `${field.type === FieldTypes.string ? `${validate_component(WordFieldString, "WordFieldString").$$render($$result, { data: word[field.name] }, {}, {})}` : `${field.type === FieldTypes.list ? `${validate_component(WordFieldList, "WordFieldList").$$render($$result, { data: word[field.name] }, {}, {})}


                ` : ``}`}` : ``}
    </td>`;
  })}</tr>`;
});
const WordTable = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { fields = [] } = $$props;
  let { words = [] } = $$props;
  if ($$props.fields === void 0 && $$bindings.fields && fields !== void 0)
    $$bindings.fields(fields);
  if ($$props.words === void 0 && $$bindings.words && words !== void 0)
    $$bindings.words(words);
  return `<table class="${"w-fit table-fixed absolute "}"><thead class="${""}">${each(fields, (field, i) => {
    return `<td style="${"width: " + escape(fields[i].size ? fields[i].size : "12", true) + "rem"}">${escape(fields[i].name)}


         </td>`;
  })}</thead>
${each(words, (word) => {
    return `${validate_component(WordRow, "WordRow").$$render($$result, { word, fields }, {}, {})}`;
  })}</table>`;
});
var WordFields = /* @__PURE__ */ ((WordFields2) => {
  WordFields2["id"] = "id";
  WordFields2["szint"] = "szint";
  WordFields2["szo"] = "szo";
  WordFields2["szofaj"] = "szofaj";
  WordFields2["szoto"] = "szoto";
  WordFields2["nevelo"] = "nevelo";
  WordFields2["igekoto"] = "igekoto";
  WordFields2["jelentes"] = "jelentes";
  WordFields2["prateritum"] = "prateritum";
  WordFields2["perfect"] = "perfect";
  WordFields2["e3"] = "e3";
  WordFields2["felteteles"] = "felteteles";
  WordFields2["szoigekotojellel"] = "szoigekotojellel";
  WordFields2["rendhagyo"] = "rendhagyo";
  WordFields2["habensein"] = "habensein";
  WordFields2["elvalos"] = "elvalos";
  WordFields2["angol"] = "angol";
  WordFields2["szinonima"] = "szinonima";
  return WordFields2;
})(WordFields || {});
const WordFieldsStatic = [
  { name: WordFields.szint, type: FieldTypes.string },
  { name: WordFields.szo, type: FieldTypes.string },
  { name: WordFields.jelentes, type: FieldTypes.list },
  { name: WordFields.angol, type: FieldTypes.list },
  { name: WordFields.szinonima, type: FieldTypes.list },
  { name: WordFields.nevelo, type: FieldTypes.string },
  { name: WordFields.szofaj, type: FieldTypes.string },
  { name: WordFields.igekoto, type: FieldTypes.string },
  { name: WordFields.id, type: FieldTypes.string },
  { name: WordFields.szoto, type: FieldTypes.string },
  { name: WordFields.prateritum, type: FieldTypes.string },
  { name: WordFields.perfect, type: FieldTypes.string },
  { name: WordFields.felteteles, type: FieldTypes.string }
];
const supabaseUrl = "https://fjdfgbeseibydxsbiktv.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZqZGZnYmVzZWlieWR4c2Jpa3R2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzUzNTUyOTIsImV4cCI6MTk5MDkzMTI5Mn0.n0xwzsuxxyAgq2IH1jSVcJ1P4v0QIT07ANWme-1G9pA";
createClient(supabaseUrl, supabaseAnonKey);
let FilterStoreDefault = {
  arg_szo: "arbeit"
};
let FilterStore = writable(FilterStoreDefault, () => {
  return;
});
FilterStore.subscribe((value) => {
});
let WordsStoreDefault = {
  szavak: []
};
let WordsStore = writable(WordsStoreDefault, () => {
  return;
});
WordsStore.subscribe((value) => {
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $WordsStore, $$unsubscribe_WordsStore;
  $$unsubscribe_WordsStore = subscribe(WordsStore, (value) => $WordsStore = value);
  $$unsubscribe_WordsStore();
  return `<div style="${"flex: 0 1 50px"}" class="${"overflow-auto relative flex flex-row "}"><button class="${"bg-green-30 p-4"}">Refresh</button></div>


<div style="${"flex: 1 1 auto"}" class="${"relative flex flex-row "}">${validate_component(WordTable, "WordTable").$$render(
    $$result,
    {
      words: $WordsStore.szavak,
      fields: WordFieldsStatic
    },
    {},
    {}
  )}</div>`;
});
export {
  Page as default
};
