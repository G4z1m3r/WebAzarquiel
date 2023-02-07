<script>
  import Intro from "../../lib/Intro.svelte";
  import MainTemplate from "../../templates/MainTemplate.svelte";
</script>

<main>
  <MainTemplate>
    <div class="container-fluid">
      <Intro
      titulo="Curso de especialización en desarrollo de videojuegos y realidad virtual"
      bgi="../../img/videojuegos.jpg"
    />

    <div class="row pb-5">
      <div
        class="col-6 d-flex justify-content-center align-items-center flex-column ps-5"
      >
        <h5>
          Nuestro centro tiene actualmente varios pabellones: en los cuales
          podemos encontrar las siguientes instalaciones:
        </h5>
        <ul>
          <li>Aulas para E.S.O. y Bachillerato.</li>
          <li>
            Aulas específicas de Informática, Administración,
            Electricidad-Electrónica, Edificación y Obra Civil y Plástica.
          </li>
          <li>Biblioteca</li>
          <li>
            Laboratorios de Fotografía, Física y Química, Informática,
            Mantenimiento, ElectricidadElectrónica, Ciencias Naturales y
            Biología y Geología, Música y un Laboratorio de Idiomas.
          </li>
          <li>Cafetería</li>
          <li>Aula de usos múltiples (salón de actos).</li>
          <li>Gimnasio.</li>
          <li>
            Zonas abiertas de patios y jardines en el interior del recinto
          </li>
        </ul>
        <h5>
          Todas las aulas disponen de proyector y ordenador, se han instalado
          pizarras digitales en las aulas de primero de ESO.
        </h5>
      </div>
      <div class="col-6 d-flex justify-content-center align-items-center">
        <img class="big" src="../../img/logofolleto.png" alt="logo del azarquiel" />
      </div>
    </div>
    <div class="row">
      <div
        class="d-flex justify-content-center align-items-start flex-column ps-5 pe-5"
      >
        <h5>¿QUÉ COMPETENCIA GENERAL TIENE EL CURSO DE ESPECIALIZACIÓN?</h5>
        <p>
          La competencia general de este curso de especialización consiste en
          diseñar y desarrollar videojuegos para diferentes dispositivos y
          plataformas, garantizando la experiencia del usuario, utilizando
          herramientas de última generación que permitan actuar en todas las
          fases de su desarrollo, así como aplicaciones interactivas de realidad
          virtual y aumentada
        </p>
        <h5>
          RELACIÓN DE CUALIFICACIONES Y UNIDADES DE COMPETENCIA DEL CATÁLOGO
          NACIONAL DE CUALIFICACIONES
        </h5>
        <p>
          A falta de publicación del Currículo del Curso de Especialización por
          parte de la Consejería de Educación.
        </p>
      </div>
    </div>
    <!-- TABLA CON LA CARGA HORARIA -->

    <div
      class="d-flex justify-content-center align-items-start flex-column ps-4 pe-5"
    >
      <h5>¿QUIÉN PUEDE ACCEDER A ESTAS ENSEÑANZAS?</h5>

      <ol>
        <li>
          Técnico Superior en Administración de Sistemas Informáticos en Red
          establecido por el Real Decreto 1629/2009, de 30 de octubre, por el
          que se establece el título de Técnico Superior en Administración de
          Sistemas Informáticos en Red y se fijan sus enseñanzas mínimas.
        </li>
        <li>
          Técnico Superior en Desarrollo de Aplicaciones Multiplataforma,
          establecido por el Real Decreto 450/2010, de 16 de abril, por el que
          se establece el título de Técnico Superior en Desarrollo de
          Aplicaciones Multiplataforma y se fijan sus enseñanzas mínimas
        </li>
        <li>
          Técnico Superior en Desarrollo de Aplicaciones Web, establecido por el
          Real Decreto 686/2010, de 20 de mayo, por el que se establece el
          título de Técnico Superior en Desarrollo de Aplicaciones Web y se
          fijan sus enseñanzas mínimas.
        </li>
        <li>
          Técnico Superior en Animaciones 3D, Juegos y Entornos Interactivos
          establecido por el Real Decreto 1583/2011, de 4 de noviembre, por el
          que se establece el título de Técnico Superior en Animaciones 3D,
          Juegos y Entornos Interactivos y se fijan sus enseñanzas mínimas.
        </li>
      </ol>
      <h5>¿PARA QUÉ SIRVE EN EL MUNDO LABORAL?</h5>
      <p>
        Las personas que hayan obtenido el certificado que acredita la
        superación de este curso de especialización podrán ejercer su actividad
        en empresas, públicas y privadas del sector de los videojuegos, así como
        crear su propio estudio de desarrollo de videojuegos.
      </p>
      <b>Las ocupaciones y puestos de trabajo más relevantes son:</b>
      <ul>
        <li>Desarrollador de videojuegos.</li>
        <li>Responsable de pruebas de videojuegos.</li>
        <li>Responsable del proceso de creación de videojuegos.</li>
        <li>Diseñador gráfico 2D y 3D de videojuegos.</li>
        <li>
          Desarrollador de aplicaciones de realidad virtual, aumentada y mixta
        </li>
      </ul>
    </div>
    </div>
    
  </MainTemplate>
</main>

<style lang="sass">
  :global(body) 
    margin: 0
    padding: 0

  .big
    width: 75% 
  
</style>
