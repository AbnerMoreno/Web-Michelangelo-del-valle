document.addEventListener("DOMContentLoaded", function () {
  const openGallery = document.querySelector(".open_gallery");
  const galleryOverlay = document.getElementById("galleryOverlay");
  const galleryClose = document.getElementById("galleryClose");
  const galleryContent = document.getElementById("galleryContent");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const galleryCounter = document.getElementById("galleryCounter");

  let currentImgIndex = 0;
  let images = [];

  function showGallery() {
    galleryOverlay.style.display = "block";
    updateGallery();
  }

  function hideGallery() {
    galleryOverlay.style.display = "none";
  }

  function updateGallery() {
    galleryContent.innerHTML = `<img class="gallery-img" src="${images[currentImgIndex]}" alt="Gallery Image">`;
    galleryCounter.textContent = `${currentImgIndex + 1} / ${images.length}`;
  }

  openGallery.addEventListener("click", function () {
    const pageId = this.dataset.pageId;
    switch (pageId) {
      case "LAKEWOODOAKS":
        images = [
          "../../img/Gallery/lakewoodOaks/exterior1.jpg",
          "../../img/Gallery/lakewoodOaks/exterior2.jpg",
          "../../img/Gallery/lakewoodOaks/exterior3.png",
          "../../img/Gallery/lakewoodOaks/exterior4.png",
          "../../img/Gallery/lakewoodOaks/interna1.jpg",
          "../../img/Gallery/lakewoodOaks/interna2.jpg",
          "../../img/Gallery/lakewoodOaks/interna3.jpg",
          "../../img/Gallery/lakewoodOaks/interna4.jpg",
          "../../img/Gallery/lakewoodOaks/interna5.jpg",
          // Agrega todas las imágenes de la página 1 aquí
        ];
        break;
      case "themaintown":
        images = [
          "../../img/Gallery/themaintown/exterior1.jpeg",
          "../../img/Gallery/themaintown/exterior2.jpeg"
          // Agrega todas las imágenes de la página 2 aquí
        ];
        break;
      case "theironroots":
        images = [
          "../../img/Gallery/theironroots/exterior1.jpg",
          "../../img/Gallery/theironroots/exterior2.jpg",
          "../../img/Gallery/theironroots/exterior3.jpg",
          "../../img/Gallery/theironroots/exterior4.jpg",
          "../../img/Gallery/theironroots/interna1.png",
          "../../img/Gallery/theironroots/interna2.jpg",
          "../../img/Gallery/theironroots/interna3.jpg",
          "../../img/Gallery/theironroots/interna4.jpg",
          "../../img/Gallery/theironroots/interna5.jpg",
          "../../img/Gallery/theironroots/interna6.jpg",
          "../../img/Gallery/theironroots/interna7.jpg"
          // Agrega todas las imágenes de la página 2 aquí
        ];
        break;
      case "mansionsantafe":
        images = [
          "../../img/Gallery/mansionsantafe/exterior1.jpg",
          "../../img/Gallery/mansionsantafe/exterior2.jpg",
          "../../img/Gallery/mansionsantafe/exterior3.jpg",
          "../../img/Gallery/mansionsantafe/exterior4.jpg",
          "../../img/Gallery/mansionsantafe/exterior5.jpg",
          "../../img/Gallery/mansionsantafe/exterior6.jpg",
          "../../img/Gallery/mansionsantafe/exterior7.jpg",
          "../../img/Gallery/mansionsantafe/interna1.png",
          "../../img/Gallery/mansionsantafe/interna2.png",
          "../../img/Gallery/mansionsantafe/interna3.jpg",
          "../../img/Gallery/mansionsantafe/interna4.png",
          "../../img/Gallery/mansionsantafe/interna5.png",
          "../../img/Gallery/mansionsantafe/interna6.png"
          // Agrega todas las imágenes de la página 2 aquí
        ];
        break;
      case "GrayOnyxTower":
        images = [
          "../../img/Gallery/GrayOnyxTower/DAY FRONT 1.jpg",
          "../../img/Gallery/GrayOnyxTower/DAY FRONT 2.jpg",
          "../../img/Gallery/GrayOnyxTower/DAY FRONT 4.jpg",
          "../../img/Gallery/GrayOnyxTower/NIGHT FRON LEFT 2.jpg",
          "../../img/Gallery/GrayOnyxTower/NIGHT FRON LEFT.jpg",
          "../../img/Gallery/GrayOnyxTower/NIGHT FRONT 2.jpg",
          "../../img/Gallery/GrayOnyxTower/CARDIO-YOGA & JACUZZI.jpg",
          "../../img/Gallery/GrayOnyxTower/GRILL 2.jpg",
          "../../img/Gallery/GrayOnyxTower/GRILL.jpg",
          "../../img/Gallery/GrayOnyxTower/interna4.jpg",
          "../../img/Gallery/GrayOnyxTower/INTERIOR NOCHE 1.jpg",
          "../../img/Gallery/GrayOnyxTower/INTERIOR NOCHE 2.jpg",
          "../../img/Gallery/GrayOnyxTower/INTERIOR NOCHE 3.jpg",
          "../../img/Gallery/GrayOnyxTower/INTERIOR NOCHE 8.jpg",
          // Agrega todas las imágenes de la página 2 aquí
        ];
        break;
      case "QuenbyOnyxTower":
        images = [
          "../../img/Gallery/QuenbyOnyxTower/exterior1.jpg",
          "../../img/Gallery/QuenbyOnyxTower/exterior2.jpg",
          "../../img/Gallery/QuenbyOnyxTower/exterior3.jpg",
          "../../img/Gallery/QuenbyOnyxTower/exterior4.jpg",
          "../../img/Gallery/QuenbyOnyxTower/interna1.png",
          "../../img/Gallery/QuenbyOnyxTower/interna2.jpg",
          "../../img/Gallery/QuenbyOnyxTower/interna3.jpg",
          "../../img/Gallery/QuenbyOnyxTower/interna4.jpg",
          "../../img/Gallery/QuenbyOnyxTower/interna5.jpg",
          "../../img/Gallery/QuenbyOnyxTower/interna6.jpg",
          "../../img/Gallery/QuenbyOnyxTower/interna7.jpg",
          // Agrega todas las imágenes de la página 2 aquí
        ];
        break;
      case "LewelOfTheCrown":
        images = [
          "../../img/Gallery/LewelOfTheCrown/exterior1.jpg",
          "../../img/Gallery/LewelOfTheCrown/exterior2.jpg",
          "../../img/Gallery/LewelOfTheCrown/exterior3.jpg",
          "../../img/Gallery/LewelOfTheCrown/exterior4.jpg",
          "../../img/Gallery/LewelOfTheCrown/interna1.png",
          "../../img/Gallery/LewelOfTheCrown/interna2.jpg",
          "../../img/Gallery/LewelOfTheCrown/interna3.jpg",
          "../../img/Gallery/LewelOfTheCrown/interna4.jpg",
          "../../img/Gallery/LewelOfTheCrown/interna5.jpg",
          "../../img/Gallery/LewelOfTheCrown/interna6.jpg",
          "../../img/Gallery/LewelOfTheCrown/interna7.jpg",
          // Agrega todas las imágenes de la página 2 aquí
        ];
        break;
      case "TheMainEntrance":
        images = [
          "../../img/Gallery/TheMainEntrance/exterior1.jpeg",
          "../../img/Gallery/TheMainEntrance/exterior2.jpeg",
          "../../img/Gallery/TheMainEntrance/exterior3.jpeg",
          "../../img/Gallery/TheMainEntrance/exterior4.jpeg",
          // Agrega todas las imágenes de la página 2 aquí
        ];
        break;
      // Agrega más cases según sea necesario para cada página

      default:
        images = [
          "../../img/Gallery/lakewoodOaks/exterior1.jpg",
          "../../img/Gallery/lakewoodOaks/exterior2.jpg",
          "../../img/Gallery/lakewoodOaks/exterior3.png",
          "../../img/Gallery/lakewoodOaks/exterior4.png",
          "../../img/Gallery/lakewoodOaks/interna1.jpg",
          "../../img/Gallery/lakewoodOaks/interna2.jpg",
          "../../img/Gallery/lakewoodOaks/interna3.jpg",
          "../../img/Gallery/lakewoodOaks/interna4.jpg",
          "../../img/Gallery/lakewoodOaks/interna5.jpg",
        ]; // Página por defecto sin imágenes
    }

    currentImgIndex = 0;
    showGallery();
  });
  galleryClose.addEventListener("click", hideGallery);
  prevBtn.addEventListener("click", () => {
    currentImgIndex = (currentImgIndex - 1 + images.length) % images.length;
    updateGallery();
  });
  nextBtn.addEventListener("click", () => {
    currentImgIndex = (currentImgIndex + 1) % images.length;
    updateGallery();
  });
});
