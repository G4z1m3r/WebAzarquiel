import { c as create_ssr_component, d as add_attribute, e as escape, v as validate_component } from "../../chunks/index.js";
import { L as Layout, I as Intro } from "../../chunks/_layout.js";
const Card_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "@keyframes svelte-nwbvb0-card-zoom{0%{transform:scale(1);box-shadow:5px 5px 10px rgba(0, 0, 0, 0.2)}100%{transform:scale(1.05);box-shadow:10px 10px 20px rgba(0, 0, 0, 0.2)}}main.svelte-nwbvb0{width:100%}.cartas.svelte-nwbvb0{margin:0 5rem}.card.svelte-nwbvb0{box-shadow:5px 5px 10px rgba(0, 0, 0, 0.2);column-gap:5rem}.card.svelte-nwbvb0:hover{animation:svelte-nwbvb0-card-zoom 0.5s ease-in-out;transform:scale(1.05);animation-fill-mode:forwards;box-shadow:10px 10px 20px rgba(0, 0, 0, 0.2);cursor:pointer}.card-img-top.svelte-nwbvb0{height:35vh;max-width:100%}@media(max-width: 600px){.cartas.svelte-nwbvb0{flex-direction:column;width:100vw;margin:0;padding:0}.card.svelte-nwbvb0:hover{box-shadow:10px 10px 20px rgba(0, 0, 0, 0.2);cursor:pointer}}",
  map: null
};
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { sourc } = $$props;
  let { alternative } = $$props;
  let { titulo } = $$props;
  let { texto } = $$props;
  if ($$props.sourc === void 0 && $$bindings.sourc && sourc !== void 0)
    $$bindings.sourc(sourc);
  if ($$props.alternative === void 0 && $$bindings.alternative && alternative !== void 0)
    $$bindings.alternative(alternative);
  if ($$props.titulo === void 0 && $$bindings.titulo && titulo !== void 0)
    $$bindings.titulo(titulo);
  if ($$props.texto === void 0 && $$bindings.texto && texto !== void 0)
    $$bindings.texto(texto);
  $$result.css.add(css$1);
  return `<main class="${"svelte-nwbvb0"}"><div class="${"card d-flex justify-content-center align-items-center cartas svelte-nwbvb0"}"><img class="${"card-img-top rounded svelte-nwbvb0"}"${add_attribute("src", sourc, 0)}${add_attribute("alt", alternative, 0)}>
    <div class="${"card-body"}"><h5 class="${"card-title"}">${escape(titulo)}</h5>
      <p class="${"card-text"}">${escape(texto)}</p>
      <a href="${"#"}" class="${"btn btn-primary"}">Mas información</a></div></div>
</main>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".d-flex.svelte-1sfa1yj{display:flex;flex-direction:row;flex-wrap:wrap}.cartas.svelte-1sfa1yj{display:flex;flex-wrap:wrap;justify-content:center;align-items:center}.cartilla.svelte-1sfa1yj{width:30%}a.svelte-1sfa1yj{text-decoration:none;color:black}@media(max-width: 600px){.cartas.svelte-1sfa1yj{flex-direction:column;margin:0;padding:0;row-gap:2rem}.prueba.svelte-1sfa1yj{max-width:100vw}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"prueba svelte-1sfa1yj"}">${validate_component(Layout, "MainTemplate").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="${"pb-5"}">${validate_component(Intro, "Intro").$$render($$result, { titulo: "Cursos de especialización" }, {}, {})}</div>
  
    
      <div class="${"cartas d-flex pb-5 svelte-1sfa1yj"}" style="${"width: 100%"}">
          <div class="${"col-sm-6 col d-flex justify-content-center align-items-center cartilla svelte-1sfa1yj"}"><a href="${"/videojuegos"}" class="${"svelte-1sfa1yj"}">${validate_component(Card, "Card").$$render(
        $$result,
        {
          sourc: "../../img/videojuegos.jpg",
          alternative: "Imagen promocional videojuedos",
          titulo: "Curso de videojuegos",
          texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elementum ante vel dignissim hendrerit. "
        },
        {},
        {}
      )}</a></div>
    
          <div class="${"col-sm-6 col d-flex justify-content-center align-items-center cartilla svelte-1sfa1yj"}"><a href="${"/ciberseguridad"}" class="${"svelte-1sfa1yj"}">${validate_component(Card, "Card").$$render(
        $$result,
        {
          sourc: "../../img/ciberseguridad.jpg",
          alternative: "Imagen promocional ciberseguridad",
          titulo: "Curso de Ciberseguridad",
          texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elementum ante vel dignissim hendrerit. "
        },
        {},
        {}
      )}</a></div>
        </div>
    `;
    }
  })}
  </div>`;
});
export {
  Page as default
};
