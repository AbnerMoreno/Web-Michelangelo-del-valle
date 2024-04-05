function cambiarContenido(letra) {
  const letraDContainer = document.getElementById("letraD");
  const imgServices = document.getElementById("img_services");

  const contenidoPorLetra = {
    F: {
      titulo: "LEGAL AND FINANCIAL ADVICE",
      parrafo:
        "Our team of legal and financial experts will be by your side throughout your entire project, providing clear and concise guidance on every step.  We'll handle the legalese and financial intricacies, so you can focus on bringing your vision to life.",
      imgUrl: "../../img/solutions/FINANCE\ AND\ LEGAL.webp",
    },
    D: {
      titulo: "DESIGN AND BRANDING",
      parrafo:
        "We create a unique and memorable visual identity for your project, which will be reflected in all elements, from the logo to the website",
      imgUrl: "../../img/solutions/DESING\ AND\ BRANDING.webp",
    },
    C: {
      titulo: "CONSTRUCTION",
      parrafo: "We have a highly qualified and experienced team to carry out the construction of your project with the highest quality standards.",
      imgUrl: "../../img/solutions/construction.webp",
    },
    A: {
      titulo: "ARCHITECTURE AND RENDERING",
      parrafo: "We develop realistic 3D images that will allow you to visualize your project before it is built, and we advise you on the selection of the most suitable materials and construction techniques.",
      imgUrl: "../../img/solutions/ARQUITECTURE AND RENDERING.webp",
    },
    S: {
      titulo: "SALES AND MARKETING",
      parrafo: "We help you introduce your project to your target audience and develop effective sales strategies",
      imgUrl: "../../img/solutions/SALES AND MARKETING.webp",
    },
    default: {
      titulo: "LEGAL AND FINANCIAL ADVICE",
      parrafo: "Párrafo predeterminado",
      imgUrl: "../../img/solutions/DESING\ AND\ BRANDING.webp",
    },
  };

  const imageUrls = Object.values(contenidoPorLetra).map(item => item.imgUrl);
  preloadImages(imageUrls);

  function preloadImages(urls) {
    urls.forEach(url => {
      const image = new Image();
      image.src = url;
    });
  }

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

  if (letra === 'A' || letra === 'F') {
    document.querySelector("#misionContenedor .mision-title").style.fontSize = '22';
  } else {
    // Si la letra no es 'A', asegúrate de restablecer el tamaño de fuente a su valor predeterminado
    document.querySelector("#misionContenedor .mision-title").style.fontSize = '';
  }
}
cambiarContenido('F');
