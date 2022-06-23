let yearnow = document.getElementById("yearnow");
let year = new Date().getFullYear();
yearnow.textContent = year;

///////////////////////////////////////////////////////////
let menup = document.querySelectorAll(".menup");
let list = document.getElementById("list");

window.addEventListener("click", (e) => {
  menup.forEach((re) => {
    if (e.target != re && e.target.parentNode != re) {
      re.classList.remove("open");
    }
  });
});

menup.forEach((ee) => {
  ee.addEventListener("click", (e) => {
    menup.forEach((re) => {
      console.log(re);

      re === ee ? true : re.classList.remove("open");
    });
    ee.classList.toggle("open");
  });
});
///////////////////////////////////////////////////////////
