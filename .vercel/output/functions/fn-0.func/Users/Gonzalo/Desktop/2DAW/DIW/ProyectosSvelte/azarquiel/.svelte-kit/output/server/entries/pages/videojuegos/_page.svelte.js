import { c as create_ssr_component, v as validate_component } from "../../../chunks/index.js";
import { L as Layout, I as Intro } from "../../../chunks/_layout.js";
const Table_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "@media(max-width: 600px){.prueba.svelte-1d8aj8j{max-width:100vw;padding:0;margin:0}}",
  map: null
};
const Table = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<main><div class="${"table-responsive prueba svelte-1d8aj8j"}"><table class="${"table table-dark prueba svelte-1d8aj8j"}"><thead><tr><th colspan="${"3"}" scope="${"col"}" class="${"text-center"}">Familia Profesional: Informatica y comunicaciones <br> Nivel:               Curso de Especialización. <br> Titulo:              Desarrollo de Videojuegos y Realidad virtual</th></tr>
        <tr class="${"table-primary text-center"}"><th scope="${"col"}">Módulos Profesionales</th>
          <th scope="${"col"}">Horas anuales</th>
          <th scope="${"col"}">Horas semanales</th></tr></thead>
      <tbody class="${"text-center"}"><tr><th scope="${"row"}">5048. Programación y motores de videojuegos.</th>
          <td>160</td>
          <td>5</td></tr>
        <tr><th scope="${"row"}">5049. Diseño gráfico 2D y 3D</th>
          <td>125</td>
          <td>4</td></tr>
        <tr><th scope="${"row"}">5050. Programación en red e inteligencia artificial</th>
          <td>95</td>
          <td>3</td></tr>
        <tr><th scope="${"row"}">5051. Realidad virtual y realidad aumentada</th>
          <td>95</td>
          <td>3</td></tr>
        <tr><th scope="${"row"}">5052. Diseño, Gestión, publicación y producción</th>
          <td>125</td>
          <td>4</td></tr></tbody>
      <tfoot class="${"text-end table-secondary bordered border-dark"}"><tr><th>Total</th>
          <td>600</td>
          <td>19</td></tr></tfoot></table></div>

</main>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "body{margin:0;padding:0}.big.svelte-1wili9t{width:75%}.container-fluid.svelte-1wili9t{background:rgba(0, 212, 255, 0.2);background:linear-gradient(90deg, rgba(0, 212, 255, 0.2) 26%, rgba(9, 18, 172, 0.1) 90%);color:black}.prueba.svelte-1wili9t{color:black}.btn-pr.svelte-1wili9t{width:100%}.logo.svelte-1wili9t{display:flex;justify-content:center;align-items:center;max-width:100vw}@media(max-width: 600px){.prueba.svelte-1wili9t{max-width:100vw}.logo.svelte-1wili9t{diplay:none}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main>${validate_component(Layout, "MainTemplate").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="${"container-fluid svelte-1wili9t"}"><div class="${"centrar-titulo"}">${validate_component(Intro, "Intro").$$render(
        $$result,
        {
          titulo: "Curso de especialización en desarrollo de videjuegos y realidad virtual",
          bgi: "../../img/videojuegos.jpg"
        },
        {},
        {}
      )}</div>

      <div class="${"prueba ms-5 me-5 svelte-1wili9t"}"><div class="${"row d-flex justify-content-center align-items-center flex-row"}"><div class="${"col-sm-12 col-6 d-flex justify-content-center align-items-center flex-column"}"><h5>Nuestro centro tiene actualmente varios pabellones: en los cuales
              podemos encontrar las siguientes instalaciones:
            </h5>
            <ul><li>Aulas para E.S.O. y Bachillerato.</li>
              <li>Aulas específicas de Informática, Administración,
                Electricidad-Electrónica, Edificación y Obra Civil y Plástica.
              </li>
              <li>Biblioteca</li>
              <li>Laboratorios de Fotografía, Física y Química, Informática,
                Mantenimiento, ElectricidadElectrónica, Ciencias Naturales y
                Biología y Geología, Música y un Laboratorio de Idiomas.
              </li>
              <li>Cafetería</li>
              <li>Aula de usos múltiples (salón de actos).</li>
              <li>Gimnasio.</li>
              <li>Zonas abiertas de patios y jardines en el interior del recinto
              </li></ul>
            <h5>Todas las aulas disponen de proyector y ordenador, se han
              instalado pizarras digitales en las aulas de primero de ESO.
            </h5></div>
          <div class="${"col-6 d-flex justify-content-center align-items-center logo svelte-1wili9t"}"><img class="${"big svelte-1wili9t"}" src="${"../../img/logoiesa.png"}" alt="${"logo del azarquiel"}"></div></div>
          ${validate_component(Table, "Table").$$render($$result, {}, {}, {})}
        <div class="${"row"}"><div class="${"d-flex justify-content-center align-items-start flex-column ps-5 pe-5 me-5 ms-5"}"><h5>¿QUÉ COMPETENCIA GENERAL TIENE EL CURSO DE ESPECIALIZACIÓN?</h5>
            <p>La competencia general de este curso de especialización consiste
              en diseñar y desarrollar videojuegos para diferentes dispositivos
              y plataformas, garantizando la experiencia del usuario, utilizando
              herramientas de última generación que permitan actuar en todas las
              fases de su desarrollo, así como aplicaciones interactivas de
              realidad virtual y aumentada
            </p>
            <h5>RELACIÓN DE CUALIFICACIONES Y UNIDADES DE COMPETENCIA DEL CATÁLOGO
              NACIONAL DE CUALIFICACIONES
            </h5>
            <p>A falta de publicación del Currículo del Curso de Especialización
              por parte de la Consejería de Educación.
            </p></div></div>
        

        <div class="${"d-flex justify-content-center align-items-start flex-column ps-5 pe-5 me-5 ms-5"}"><div class="${"accordion btn-pr pb-5 svelte-1wili9t"}" id="${"accordion1"}"><div class="${"accordion-item"}"><h2 class="${"accordion-header"}" id="${"heading1"}"><button class="${"accordion-button"}" type="${"button"}" data-bs-toggle="${"collapse"}" data-bs-target="${"#collapse1"}" aria-expanded="${"false"}" aria-controls="${"collapse1"}">¿QUIÉN PUEDE ACCEDER A ESTAS ENSEÑANZAS?
                </button></h2>
              <div id="${"collapse1"}" class="${"accordion-collapse collapse"}" aria-labelledby="${"heading1"}" data-bs-parent="${"#accordion1"}"><div class="${"accordion-body"}"><ol><li>Técnico Superior en Administración de Sistemas
                      Informáticos en Red establecido por el Real Decreto
                      1629/2009, de 30 de octubre, por el que se establece el
                      título de Técnico Superior en Administración de Sistemas
                      Informáticos en Red y se fijan sus enseñanzas mínimas.
                    </li>
                    <br>
                    <li>Técnico Superior en Desarrollo de Aplicaciones
                      Multiplataforma, establecido por el Real Decreto 450/2010,
                      de 16 de abril, por el que se establece el título de
                      Técnico Superior en Desarrollo de Aplicaciones
                      Multiplataforma y se fijan sus enseñanzas mínimas
                    </li>
                    <br>
                    <li>Técnico Superior en Desarrollo de Aplicaciones Web,
                      establecido por el Real Decreto 686/2010, de 20 de mayo,
                      por el que se establece el título de Técnico Superior en
                      Desarrollo de Aplicaciones Web y se fijan sus enseñanzas
                      mínimas.
                    </li>
                    <br>
                    <li>Técnico Superior en Animaciones 3D, Juegos y Entornos
                      Interactivos establecido por el Real Decreto 1583/2011, de
                      4 de noviembre, por el que se establece el título de
                      Técnico Superior en Animaciones 3D, Juegos y Entornos
                      Interactivos y se fijan sus enseñanzas mínimas.
                    </li></ol></div></div></div></div>

          <div class="${"accordion btn-pr pb-5 svelte-1wili9t"}" id="${"accordion2"}"><div class="${"accordion-item"}"><h2 class="${"accordion-header"}" id="${"heading2"}"><button class="${"accordion-button"}" type="${"button"}" data-bs-toggle="${"collapse"}" data-bs-target="${"#collapse2"}" aria-expanded="${"false"}" aria-controls="${"collapse2"}">¿PARA QUÉ SIRVE EN EL MUNDO LABORAL?
                </button></h2>
              <div id="${"collapse2"}" class="${"accordion-collapse collapse"}" aria-labelledby="${"heading2"}" data-bs-parent="${"#accordion2"}"><div class="${"accordion-body"}"><p>Las personas que hayan obtenido el certificado que acredita
                    la superación de este curso de especialización podrán
                    ejercer su actividad en empresas, públicas y privadas del
                    sector de los videojuegos, así como crear su propio estudio
                    de desarrollo de videojuegos.
                  </p>
                  <b>Las ocupaciones y puestos de trabajo más relevantes son:</b>
                  <ul><li>Desarrollador de videojuegos.</li>
                    <li>Responsable de pruebas de videojuegos.</li>
                    <li>Responsable del proceso de creación de videojuegos.</li>
                    <li>Diseñador gráfico 2D y 3D de videojuegos.</li>
                    <li>Desarrollador de aplicaciones de realidad virtual,
                      aumentada y mixta
                    </li></ul></div></div></div></div></div></div></div>`;
    }
  })}
</main>`;
});
export {
  Page as default
};
