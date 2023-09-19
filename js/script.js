//1. Galerie des photos (mobile)

// document.querySelector("#pictures .pictures-prev").addEventListener("click", function () {
//     let imgList = document.querySelector("#gallery-thumbs");
//     imgList.appendChild(imgList.firstElementChild);
//   });
//   document.querySelector("#pictures .button .pictures-next").addEventListener("click", function () {
//     let imgList = document.querySelector("#gallery-thumbs");
//     imgList.appendChild(imgList.lastElementChild);
//   });
//2. Galerie des photos (desktop)

document.querySelectorAll(".thumbs-img").forEach((img) => {
  document.querySelectorAll("#gallery-thumbs img[data-title]").forEach((img) => {
      img.addEventListener("mouseover", function () {
        document.getElementById("pictures-img").src = this.src;
        showImage({
          src: this.src,
        });
      });
    });
});

function showImage(imageData) {
  document.getElementById("pictures-img").src = imageData.src;
}

//3. Ajout au panier

//4. Accordéons
const advantages = document.querySelector("#advantages");
const buttonAdv = document.querySelector(".adv");
buttonAdv.addEventListener("click", function () {
    advantages.classList.toggle("hidden");
  });

  const features = document.querySelector("#features");
const buttonFeatures = document.querySelector(".ftrs");
buttonFeatures.addEventListener("click", function () {
    features.classList.toggle("hidden");
  });
//5. Produits similaires (mobile)

//6. Produits similaires (desktop)
