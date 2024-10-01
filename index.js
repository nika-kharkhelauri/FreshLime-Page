window.onscroll = function () {
  let header = document.querySelector("header");
  let section = document.querySelector("section");
  let heightOfSection = section.offsetHeight;

  if (window.scrollY > heightOfSection) {
    header.classList.add("header-sticky");
  } else {
    header.classList.remove("header-sticky");
  }
};

// ----------------------------------------------------------------

let headerButton = document.querySelector(".header-button");
let navBar = document.querySelector("nav");

headerButton.addEventListener("click", () => {
  let firstBtnDiv = document.querySelector(".first-btn-div");
  let secondBtnDiv = document.querySelector(".second-btn-div");
  let thirdBtnDiv = document.querySelector(".third-btn-div");

  if (navBar.classList.contains("translate-x-full")) {
    navBar.classList.remove(
      "translate-x-full",
      "opacity-0",
      "pointer-events-none",
      "invisible",
    );
    navBar.classList.add("nav-open");

    firstBtnDiv.classList.remove("block");
    firstBtnDiv.classList.add(
      "relative",
      "top-[6px]",
      "rotate-45",
      "rigth-[2px]",
    );

    secondBtnDiv.classList.remove("block");
    secondBtnDiv.classList.add("relative", "rotate-[138deg]");

    thirdBtnDiv.classList.remove("block");
    thirdBtnDiv.classList.add("hidden");
  } else {
    navBar.classList.remove("nav-open");
    navBar.classList.add(
      "translate-x-full",
      "opacity-0",
      "pointer-events-none",
      "invisible",
    );

    firstBtnDiv.classList.remove(
      "relative",
      "top-[6px]",
      "rotate-45",
      "rigth-[2px]",
    );
    firstBtnDiv.classList.add("block");

    secondBtnDiv.classList.remove("relative", "rotate-[138deg]");
    secondBtnDiv.classList.add("block");

    thirdBtnDiv.classList.remove("hidden");
    thirdBtnDiv.classList.add("block");
  }
});

// ------------------- Form for Email-----------------------
const form = document.querySelector("form");
const nameInput = document.querySelector(".name-input");
const emailInput = document.querySelector(".email-input");
const selectInput = document.querySelector(".select-input");

const serviceID = "service_t0p2wng";
const templateID = "template_onddhed";
const publickKey = "ma0QVCtEgxhmZLEV8";

emailjs.init(publickKey);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputData = {
    from_name: nameInput.value,
    user_email: emailInput.value,
    message: selectInput.value,
  };

  emailjs.send(serviceID, templateID, inputData).then(
    () => {
      nameInput.value = "";
      emailInput.value = "";
      selectInput.value = "";
      console.log("SUCCESS!");
    },
    (error) => console.log(error),
  );
});

// ------------------------------------------------------------- >>>
const imageLogo = document.getElementById("logoimage");
const navLinks = document.querySelectorAll(".main-nav-links");

imageLogo.addEventListener("click", (e) => {
  e.stopPropagation();
  imageLogo.classList.toggle("border-solid");
  imageLogo.classList.toggle("border-[10px]");
  imageLogo.classList.toggle("border-emerald-400");
});

document.addEventListener("click", (event) => {
  if (!imageLogo.contains(event.target)) {
    imageLogo.classList.remove(
      "border-solid",
      "border-[10px]",
      "border-emerald-400",
    );
  }
});

imageLogo.addEventListener("focusout", () => {
  imageLogo.classList.remove(
    "border-solid",
    "border-[10px]",
    "border-emerald-400",
  );
});
