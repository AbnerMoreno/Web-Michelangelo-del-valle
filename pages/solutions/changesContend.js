// function cambiarContenido(letra) {
//     let letraD = document.getElementById('letraD');
//     let img_services = document.getElementById('img_services')
//     let imgUrl1 = '../../img/solutions/FINANCE\ AND\ LEGAL.png';
//     let imgUrl2 = '../../img/solutions/DESING\ AND\ BRANDING.png';
//   let branding =
//     "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. dolore magna aliquam erat volutpat.";
//   let titulo, parrafo;
//   switch (letra) {
//     case "F":
//       titulo = "FINANCES";
//       parrafo = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.";
//       img_services.style.backgroundImage= `url('${imgUrl1}')`;
//       break;
//     case "D":
//       titulo = "DESING AND BRANDING";
//       parrafo = branding;
//       letraD.style.width = 'fit-content';
//       letraD.style.fontSize= '24px';
//       img_services.style.backgroundImage= `url('${imgUrl2}')`;
//       break;
//     case "C":
//       titulo = "Título para C";
//       parrafo = "Párrafo para C";
//       break;
//     case "A":
//       titulo = "Título para A";
//       parrafo = "Párrafo para A";
//       break;
//     case "S":
//       titulo = "Título para S";
//       parrafo = "Párrafo para S";
//       break;
//     default:
//       titulo = "Título predeterminado";
//       parrafo = "Párrafo predeterminado";
//   }
//   document.querySelector("#misionContenedor .mision-title").textContent =
//     titulo;
//   document.querySelector("#misionContenedor .mision-parrafo").textContent =
//     parrafo;
// }
// function cambiarContenido(letra) {
//   const letras = {
//     F: {
//       titulo: "FINANCES",
//       parrafo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
//       imgUrl: '../../img/solutions/FINANCE\ AND\ LEGAL.png'
//     },
//     D: {
//       titulo: "DESING AND BRANDING",
//       parrafo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
//       imgUrl: '../../img/solutions/DESING\ AND\ BRANDING.png'
//     },
//     C: { titulo: "Título para C", parrafo: "Párrafo para C" },
//     A: { titulo: "Título para A", parrafo: "Párrafo para A" },
//     S: { titulo: "Título para S", parrafo: "Párrafo para S" },
//     default: { titulo: "Título predeterminado", parrafo: "Párrafo predeterminado" }
//   };

//   const { titulo, parrafo, imgUrl } = letras[letra] || letras.default;

//   document.getElementById('letraD').style.width = letra === "D" ? 'fit-content' : '';
//   document.getElementById('letraD').style.fontSize = letra === "D" ? '24px' : '';

//   document.querySelector("#misionContenedor .mision-title").textContent = titulo;
//   document.querySelector("#misionContenedor .mision-parrafo").textContent = parrafo;

//   if (imgUrl) {
//     document.getElementById('img_services').style.backgroundImage = `url('${imgUrl}')`;
//   }
// }
function cambiarContenido(letra) {
  const letraDContainer = document.getElementById("letraD");
  const imgServices = document.getElementById("img_services");

  const contenidoPorLetra = {
    F: {
      titulo: "LEGAL AND FINANCIAL ADVICE",
      parrafo:
        "Our team of legal and financial experts will be by your side throughout your entire project, providing clear and concise guidance on every step.  We'll handle the legalese and financial intricacies, so you can focus on bringing your vision to life.",
      imgUrl: "../../img/solutions/FINANCE\ AND\ LEGAL.png",
    },
    D: {
      titulo: "DESIGN AND BRANDING",
      parrafo:
        "We create a unique and memorable visual identity for your project, which will be reflected in all elements, from the logo to the website",
      imgUrl: "../../img/solutions/DESING\ AND\ BRANDING.png",
    },
    C: {
      titulo: "CONSTRUCTION",
      parrafo: "We have a highly qualified and experienced team to carry out the construction of your project with the highest quality standards.",
      imgUrl: "../../img/solutions/construction.png",
    },
    A: {
      titulo: "ARCHITECTURE AND RENDERING",
      parrafo: "We develop realistic 3D images that will allow you to visualize your project before it is built, and we advise you on the selection of the most suitable materials and construction techniques.",
      imgUrl: "../../img/solutions/ARQUITECTURE AND RENDERING.png",
    },
    S: {
      titulo: "SALES AND MARKETING",
      parrafo: "We help you introduce your project to your target audience and develop effective sales strategies",
      imgUrl: "../../img/solutions/SALES AND MARKETING.png",
    },
    default: {
      titulo: "Título predeterminado",
      parrafo: "Párrafo predeterminado",
      imgUrl: "../../img/solutions/DESING\ AND\ BRANDING.png",
    },
  };

  
  const contenido = contenidoPorLetra[letra] || contenidoPorLetra["default"];

  document.querySelector("#misionContenedor .mision-title").textContent =
    contenido.titulo;
  document.querySelector("#misionContenedor .mision-parrafo").textContent =
    contenido.parrafo;
  imgServices.style.backgroundImage = `url('${contenido.imgUrl}')`;

  const todosLosContenedores = document.querySelectorAll('.box, .circle1');
  todosLosContenedores.forEach((contenedor) => {
    contenedor.classList.remove('box1','circle1');
  });

  // Agregar la clase box1 al contenedor del botón clickeado
  const contenedorClickeado = document.querySelector(`#${letra}_box`);
  contenedorClickeado.classList.add('box1');
  const botonClickeado = contenedorClickeado.querySelector('button');
botonClickeado.classList.add('circle1');

  if (letra === 'A','F') {
    document.querySelector("#misionContenedor .mision-title").style.fontSize = '25';
  } else {
    // Si la letra no es 'A', asegúrate de restablecer el tamaño de fuente a su valor predeterminado
    document.querySelector("#misionContenedor .mision-title").style.fontSize = '';
  }
}
