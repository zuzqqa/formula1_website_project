const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");

hiddenElements.forEach((el) => observer.observe(el));

const toggleButton =
  document.getElementsByClassName("toggle-button")[0]; /* navBar toggle */
const nav_links = document.getElementsByClassName("nav_links")[0];

toggleButton.addEventListener("click", () => {
  nav_links.classList.toggle("active");
});

function fname() {
  window.localStorage["name"] = document.getElementById("name").value;
  document.getElementById("ds1").innerHTML = "";

  if (localStorage.click_count) {
    localStorage.click_count = Number(localStorage.click_count) + 1;
  } else {
    localStorage.click_count = 1;
  }

  var l = document.createElement("p");
  l.innerHTML =
    "Hi! " +
    localStorage.getItem("name") +
    ", you are our " +
    localStorage.click_count +
    " Formula 1 fan ;)";

  var m = document.getElementById("ds1");
  m.appendChild(l);
}

function driver1() {
  window.sessionStorage["driver"] = document.getElementById("andrew").value;
  document.getElementById("ds").innerHTML = "";

  var x = document.createElement("p");
  x.innerHTML = "You support: " + sessionStorage.getItem("driver");
  var v = document.getElementById("ds");
  v.appendChild(x);
}

const modal = document.querySelector("#input_1");
const openModal = document.querySelector("#bute");
const closeModal = document.querySelector("#sub");

openModal.addEventListener("click", () => {
  modal.showModal();
  modal.classList.add("open");
  document.getElementById("input_1").style.display = "flex";
  window.addEventListener("keyup", function (event) {
    if (event.key === "Escape") {
      document.getElementById("input_1").style.display = "none";
    }
  });
});

closeModal.addEventListener("click", () => {
  window.localStorage["e-mail"] = document.getElementById("input_1_3").value;
  modal.close();
  document.getElementById("input_1").style.display = "none";
});

const modal1 = document.querySelector("#input_1");
const openModal1 = document.querySelector("#bute1");
const closeModal1 = document.querySelector("#sub");

openModal1.addEventListener("click", () => {
  modal1.showModal();
  modal1.classList.add("open");
  document.getElementById("input_1").style.display = "flex";
  window.addEventListener("keyup", function (event) {
    if (event.key === "Escape") {
      document.getElementById("input_1").style.display = "none";
    }
  });
});

closeModal.addEventListener("click", () => {
  window.localStorage["e-mail"] = document.getElementById("input_1_3").value;
  modal1.close();
  document.getElementById("input_1").style.display = "none";
});

$('html').click(function (e) {
  if (e.target.id == 'dropdown') 
  {
    $(".dropdown-content").css("display", "block");
  }
  else
  {
    $(".dropdown-content").css("display", "none");
  }
 });
