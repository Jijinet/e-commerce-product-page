const cartContainer = document.querySelector("#cart-container");
const cart = document.querySelector("#cart");

const increase = document.querySelector("#increase");
const decrease = document.querySelector("#decrease");
const qte = document.querySelector("#qte");

const cartEmpty = document.querySelector("#cart-empty");

const cartCmd = document.querySelector("#cart-cmd");
const cmdQte = document.querySelector("#cart-cmd span");
const addToCard = document.querySelector("#btn-add");
const counter = document.querySelector("#counter");
const cmdTotal = document.querySelector("#total");
const btnDelete = document.querySelector("#delete");

const thumbImgs = document.querySelectorAll(
  "#section-img > :nth-of-type(2) li img"
);

const fullImg = document.querySelector(".slider > :nth-of-type(1) img");
const lightboxFullImg = document.querySelector(
  "#lightbox-container #main-img > :nth-child(2) img"
);

const next = document.querySelector(
  "#lightbox-container > div > div:nth-child(1)"
);
const previous = document.querySelector(
  "#lightbox-container > div > div:nth-child(2)"
);


const lightbox = document.querySelector("#lightbox-container");
const btnClose = document.querySelector("#main-img > :nth-of-type(1)");
const lightboxThumbImgs = document.querySelectorAll("#thumb-imgs img");

const menu = document.querySelector("#menu");
const closeMenu = document.querySelector("#close-menu");
const menuContainer = document.querySelector("#menu-container");

const nextMobile=document.querySelector('#section-img >  div:nth-child(1) > div > :nth-child(2)');
const prevMobile=document.querySelector('#section-img >  div:nth-child(1) > div > :nth-child(3)');
let num = 0;
let total = 0;

let imageCounter = 1;


nextMobile.addEventListener('click',()=>{
  imageCounter++;
  if (imageCounter > thumbImgs.length) {
    imageCounter = 1;
  }
  thumbImgs.forEach((img) => {
    img.classList.remove("active");
    img.parentElement.classList.remove("active");
  });
  thumbImgs[imageCounter - 1].classList.add("active");
  thumbImgs[imageCounter - 1].parentElement.classList.add("active");
  fullImg.src = `../images/image-product-${imageCounter}.jpg`;
})

prevMobile.addEventListener('click',()=>{
  imageCounter--;
  if (imageCounter < 1) {
    imageCounter = thumbImgs.length;
  }
  thumbImgs.forEach((img) => {
    img.classList.remove("active");
    img.parentElement.classList.remove("active");
  });
  thumbImgs[imageCounter - 1].classList.add("active");
  thumbImgs[imageCounter - 1].parentElement.classList.add("active");
  fullImg.src = `../images/image-product-${imageCounter}.jpg`;
})

menu.addEventListener("click", () => {
  menuContainer.classList.remove("visible");
});

closeMenu.addEventListener("click", () => {
  menuContainer.classList.add("visible");
});

menuContainer.addEventListener("click", () => {
  menuContainer.classList.add("visible");
});



fullImg.parentElement.addEventListener("click", () => {
  let maxWidth = window.screen.availWidth;
  console.log(maxWidth);
  if (maxWidth <= 550) {
    lightbox.style.display = "none";
  } else {
    lightbox.style.display = "flex";
  }
});

btnClose.addEventListener("click", () => {
  lightbox.style.display = "none";
});



lightboxThumbImgs.forEach((elem) => {
  elem.addEventListener("click", (e) => {
    lightboxThumbImgs.forEach((img) => {
      img.classList.remove("active");
      img.parentElement.classList.remove("active");
    });

    e.target.classList.add("active");
    e.target.parentElement.classList.add("active");
    lightboxFullImg.src = e.target.src.replace("-thumbnail", "");
  });
});
next.addEventListener("click", () => {
  imageCounter++;
  if (imageCounter > lightboxThumbImgs.length) {
    imageCounter = 1;
  }
  lightboxThumbImgs.forEach((img) => {
    img.classList.remove("active");
    img.parentElement.classList.remove("active");
  });
  lightboxThumbImgs[imageCounter - 1].classList.add("active");
  lightboxThumbImgs[imageCounter - 1].parentElement.classList.add("active");
  lightboxFullImg.src = `../images/image-product-${imageCounter}.jpg`;
});

previous.addEventListener("click", () => {
  imageCounter--;
  if (imageCounter < 1) {
    imageCounter = lightboxThumbImgs.length;
  }
  lightboxThumbImgs.forEach((img) => {
    img.classList.remove("active");
    img.parentElement.classList.remove("active");
  });
  lightboxThumbImgs[imageCounter - 1].classList.add("active");
  lightboxThumbImgs[imageCounter - 1].parentElement.classList.add("active");
  lightboxFullImg.src = `../images/image-product-${imageCounter}.jpg`;
});

thumbImgs.forEach((elem) => {
  elem.addEventListener("click", (e) => {
    thumbImgs.forEach((img) => {
      img.classList.remove("active");
      img.parentElement.classList.remove("active");
    });

    e.target.classList.add("active");
    e.target.parentElement.classList.add("active");
    fullImg.src = e.target.src.replace("-thumbnail", "");
  });
});

addToCard.addEventListener("click", () => {
  if (num != 0) {
    cartEmpty.classList.add("visible");
    cartCmd.style.display = "flex";
    counter.style.display = "flex";
    cmdQte.innerText = num;
    counter.innerText = num;
    total = 125 * num;
    cmdTotal.innerText = `$${total.toFixed(2)}`;
  }
});

cart.addEventListener("click", () => {
  cartContainer.classList.toggle("visible");
});

increase.addEventListener("click", () => {
  num++;
  qte.innerText = num;
});

decrease.addEventListener("click", () => {
  num <= 0 ? 0 : num--;
  qte.innerText = num;
});

btnDelete.addEventListener("click", () => {
  cartEmpty.classList.remove("visible");
  cartCmd.style.display = "none";
  counter.style.display = "none";
});
