const checkbox = document.getElementById("checkbox");
const titleInput = document.querySelector(".title").innerHTML;


checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark");
  document.querySelector(".title").innerHTML === "Dark Mode" ? document.querySelector(".title").innerHTML = "Light Mode" : document.querySelector(".title").innerHTML = "Dark Mode";
});

