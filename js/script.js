//1. Photo gallery (mobile)

document.querySelector("#pictures .pictures-prev")
  .addEventListener("click", function () {
    // advantages.classList.toggle("hidden");

    let imgList = document.querySelector("#gallery-thumbs");
    imgList.appendChild(imgList.firstElementChild);
    // });
    //   document.querySelector("#pictures .button .pictures-next").addEventListener("click", function () {
    //     let imgList = document.querySelector("#gallery-thumbs");
    //     imgList.appendChild(imgList.lastElementChild);
  });

//1. Photo gallery (desktop)

document.querySelectorAll(".thumbs-img").forEach((img) => {
  document
    .querySelectorAll("#gallery-thumbs img[data-title]")
    .forEach((img) => {
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

//3. Add to the basket

let cta = document.getElementById("add-cta");
let cartnb = document.getElementById("cart-nb");
let qtity = document.getElementById("add-qty");

function addBasket() {
  cta.addEventListener("click", function () {
    cartnb.value === parseInt(qtity.value);
    cta.classList.toggle("add-cta-click");
    cta.innerHTML = "Déjà au panier";
  });
}

addBasket();
cta.removeEventListener("click", addBasket);

//3. Accordions

const advantages = document.querySelector("#advantages");
const buttonAdv = document.querySelector(".adv");

function accordionsAdvantages (){
buttonAdv.addEventListener("click", function () {
  advantages.classList.toggle("hidden");
  buttonAdv.classList.toggle("closed");
});
};
accordionsAdvantages();
// localStorage.setItem("buttonAdv");


const features = document.querySelector("#features");
const buttonFeatures = document.querySelector(".ftrs");

function accordionsFeatures() {
  
  buttonFeatures.addEventListener("click", function () {
    features.classList.toggle("hidden");
    buttonFeatures.classList.toggle("closed");
  });
}
accordionsFeatures();

//4. Similar products (mobile)

//5. Similar products (desktop)