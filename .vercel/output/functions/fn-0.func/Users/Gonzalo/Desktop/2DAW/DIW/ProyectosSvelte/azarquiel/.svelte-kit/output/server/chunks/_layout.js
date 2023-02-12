import { c as create_ssr_component, e as escape, v as validate_component } from "./index.js";
const Subtitle_svelte_svelte_type_style_lang = "";
const Title = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { titulo = "Default" } = $$props;
  if ($$props.titulo === void 0 && $$bindings.titulo && titulo !== void 0)
    $$bindings.titulo(titulo);
  return `<main><div class="${"d-flex justify-content-center align-items-center"}"><h1>${escape(titulo)}</h1></div>
</main>`;
});
const Intro = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { titulo } = $$props;
  let { bgi } = $$props;
  if ($$props.titulo === void 0 && $$bindings.titulo && titulo !== void 0)
    $$bindings.titulo(titulo);
  if ($$props.bgi === void 0 && $$bindings.bgi && bgi !== void 0)
    $$bindings.bgi(bgi);
  return `<main><div class="${"container-Intro d-flex justify-content-center pt-5"}">${validate_component(Title, "Title").$$render($$result, { titulo }, {}, {})}
    </div>
</main>`;
});
const Header_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".bg-gr.svelte-4gz128{background-color:#f5f5f5;color:#999999}.bg-gb.svelte-4gz128{background-color:#f5f5f5;color:#009cde}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<main><header class="${"bg-gr text-white svelte-4gz128"}"><div class="${"container"}"><div class="${"d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start"}"><a href="${"/"}" class="${"d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"}"><svg class="${"bi me-2"}" width="${"40"}" height="${"32"}" role="${"img"}" aria-label="${"Bootstrap"}"><use xlink:href="${"#bootstrap"}"></use></svg></a>

        <ul class="${"nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0"}"><li><a href="${"#"}" class="${"nav-link px-2 bg-gr svelte-4gz128"}"><i class="${"fa-brands fa-facebook"}"></i></a></li>
          <li><a href="${"#"}" class="${"nav-link px-2 bg-gr svelte-4gz128"}"><i class="${"fa-brands fa-twitter"}"></i></a></li>
          <li><a href="${"#"}" class="${"nav-link px-2 bg-gr svelte-4gz128"}"><i class="${"fa-brands fa-youtube"}"></i></a></li>
          <li><a href="${"#"}" class="${"nav-link px-2 bg-gr svelte-4gz128"}"><i class="${"fa-solid fa-ellipsis"}"></i></a></li>
          <li><a href="${"#"}" class="${"nav-link px-2 bg-gr svelte-4gz128"}"><i class="${"fa-solid fa-ellipsis"}"></i></a></li>
          <li><a href="${"#"}" class="${"nav-link px-2 bg-gr svelte-4gz128"}"><i class="${"fa-brands fa-instagram"}"></i></a></li></ul>

        <div class="${"text-end"}"><ul class="${"nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0"}"><li><a href="${"#"}" class="${"nav-link px-2 bg-gb svelte-4gz128"}"><i class="${"fa-solid fa-phone bg-gr svelte-4gz128"}"></i> 925284043</a></li>
            <li><a href="${"#"}" class="${"nav-link px-2 bg-gb svelte-4gz128"}"><i class="${"fa-regular fa-envelope bg-gr svelte-4gz128"}"></i> 45003875.ies@edu.jccm.es</a></li></ul></div></div></div></header>
</main>`;
});
const Nav_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".prueba2.svelte-9dm5qd{display:none;background-color:transparent;border:none;color:inherit;padding:0;font:inherit;cursor:pointer}.linknone.svelte-9dm5qd{color:inherit;text-decoration:inherit}@media(max-width: 600px){.prueba.svelte-9dm5qd{display:none}.prueba2.svelte-9dm5qd{display:flex}}",
  map: null
};
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<main><div class="${"container"}"><header class="${"col-md4 d-flex flex-wrap align-items-center justify-content-center justify-content-md-between pt-3 border-bottom"}"><a href="${"/"}" class="${"d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"}"><img class="${"img-fluid"}" src="${"../../img/logoiesfseif (1).png"}" alt="${"logo azarquiel"}"></a>
      <ul class="${"nav col-14 justify-content-center mb-md-0 d-sm-none d-md-flex prueba svelte-9dm5qd"}"><li><a href="${"#"}" class="${"nav-link px-2 link-secondary"}">INICIO</a></li>
        <li><a href="${"#"}" class="${"nav-link px-2 link-dark"}">AL DÍA</a></li>
        <li><a href="${"#"}" class="${"nav-link px-2 link-dark"}">EL LORO</a></li>
        <li><a href="${"#"}" class="${"nav-link px-2 link-dark"}">EL CENTRO</a></li>
        <li><a href="${"#"}" class="${"nav-link px-2 link-dark"}">SECRETARÍA</a></li>
        <li><a href="${"#"}" class="${"nav-link px-2 link-dark"}">FAMILIAS</a></li>
        <li><a href="${"#"}" class="${"nav-link px-2 link-dark"}">BOLSA</a></li></ul>

      <button type="${"button"}" data-bs-toggle="${"offcanvas"}" data-bs-target="${"#demo"}" class="${"prueba2 svelte-9dm5qd"}"><i class="${"fa-solid fa-bars fa-2x"}"></i></button>

      <div class="${"offcanvas offcanvas-start text-bg-dark"}" id="${"demo"}"><div class="${"offcanvas-header"}"><h1 class="${"offcanvas-title"}">MENU</h1>
          <button type="${"button"}" class="${"btn-close btn-close-white"}" data-bs-dismiss="${"offcanvas"}"></button></div>
        <div class="${"offcanvas-body"}"><ul><li><a href="${"#"}" class="${"linknone svelte-9dm5qd"}">INICIO</a></li>
            <li><a href="${"#"}" class="${"linknone svelte-9dm5qd"}">AL DÍA</a></li>
            <li><a href="${"#"}" class="${"linknone svelte-9dm5qd"}">EL LORO</a></li>
            <li><a href="${"#"}" class="${"linknone svelte-9dm5qd"}">EL CENTRO</a></li>
            <li><a href="${"#"}" class="${"linknone svelte-9dm5qd"}">SECRETARÍA</a></li>
            <li><a href="${"#"}" class="${"linknone svelte-9dm5qd"}">FAMILIAS</a></li>
            <li><a href="${"#"}" class="${"linknone svelte-9dm5qd"}">BOLSA</a></li></ul></div></div></header></div>
</main>`;
});
const Footer_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".svelte-162opvc{background-color:#009cde;color:white}.non.svelte-162opvc{text-decoration:none}@media(max-width: 600px){iframe.svelte-162opvc{width:300px}}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<main class="${"svelte-162opvc"}">
<footer class="${"text-center text-lg-start bg-light text-muted svelte-162opvc"}">
  <section class="${"prueba svelte-162opvc"}"><div class="${"container text-center text-md-start mt-5 b svelte-162opvc"}">
      <div class="${"row mt-3 svelte-162opvc"}">
        <div class="${"col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 svelte-162opvc"}">
          <h6 class="${"text-uppercase fw-bold mb-4 svelte-162opvc"}">Otros Sitios
          </h6>
          
            
            <p class="${"svelte-162opvc"}"><a href="${"#!"}" class="${"text-reset non svelte-162opvc"}">Portal de Educación</a></p>
            <p class="${"svelte-162opvc"}"><a href="${"#!"}" class="${"text-reset non svelte-162opvc"}">Programa Papas</a></p>
            <p class="${"svelte-162opvc"}"><a href="${"#!"}" class="${"text-reset non svelte-162opvc"}">Intranet</a></p>
            <p class="${"svelte-162opvc"}"><a href="${"#!"}" class="${"text-reset non svelte-162opvc"}">Delphos</a></p>
            <p class="${"svelte-162opvc"}"><img class="${"img-fluid svelte-162opvc"}" src="${"../../img/fseu.png"}" alt="${"logo azarquiel"}"></p>
          </div>
        

        
        <div class="${"col-md-2 col-lg-4 col-xl-4 mx-auto mb-4  svelte-162opvc"}">
          <h6 class="${"text-uppercase fw-bold mb-4 svelte-162opvc"}">Contacto
          </h6>
          <p class="${"svelte-162opvc"}">I.E.S Azarquiel
          </p>
          <p class="${"svelte-162opvc"}">Paseo de San Eugenio, 21
          </p>
          <p class="${"svelte-162opvc"}">45003 - Toledo
          </p>
          <p class="${"svelte-162opvc"}"><i class="${"fa-solid fa-phone svelte-162opvc"}"></i>: 925284043
          </p>
          <p class="${"svelte-162opvc"}"><i class="${"fa-solid fa-calendar svelte-162opvc"}"></i>: desde el 20/01/2020 No Operativo
          </p>
          <p class="${"svelte-162opvc"}"><i class="${"fa-regular fa-envelope svelte-162opvc"}"></i>CENTRO: 45003875.ies@edu.jccm.es
          </p>
          <p class="${"svelte-162opvc"}"><i class="${"fa-regular fa-envelope svelte-162opvc"}"></i>AMPA: azarquiel.ampa@gmail.com
          </p>
          <p class="${"svelte-162opvc"}"><i class="${"fa-regular fa-envelope svelte-162opvc"}"></i>PAPAS: azarquiel.papas@gmail.com
          </p></div>
        

        
        <div class="${"col-md-3 col-lg-2 col-xl-5 mx-auto mb-4 svelte-162opvc"}">
          <h6 class="${"text-uppercase fw-bold mb-4 svelte-162opvc"}">Localización
          </h6>
          <iframe src="${"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3062.144431850482!2d-4.025167484759893!3d39.871002579432286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6a0a53483a57e7%3A0xc7f7d4815179b44b!2sIES%20Azarquiel!5e0!3m2!1ses!2ses!4v1675192320722!5m2!1ses!2ses"}" width="${"600"}" height="${"300"}" style="${"border:0;"}" allowfullscreen="${""}" loading="${"lazy"}" referrerpolicy="${"no-referrer-when-downgrade"}" class="${"svelte-162opvc"}"></iframe></div>
        

        
       
      </div></div></section>
  

  
  <div class="${"prueba svelte-162opvc"}"><div class="${"text-center p-4 prueba svelte-162opvc"}"><b class="${"svelte-162opvc"}">© 2022 Copyright:
      IES Azarquiel
      </b></div></div>

  </footer>

</main>`;
});
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: 'body{margin:0;padding:0;font-family:"Open Sans", sans-serif}main.svelte-3z5z52{display:flex;flex-direction:column;height:100vh}.slot.svelte-3z5z52{flex-grow:1}',
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const prerender = true;
  if ($$props.prerender === void 0 && $$bindings.prerender && prerender !== void 0)
    $$bindings.prerender(prerender);
  $$result.css.add(css);
  return `<main class="${"svelte-3z5z52"}">${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
  ${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})}
  <div class="${"slot svelte-3z5z52"}">${slots.default ? slots.default({}) : ``}</div>
  ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}
</main>`;
});
export {
  Intro as I,
  Layout as L
};
