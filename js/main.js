var yellowBox = document.querySelector(".change-color");

var setBlue = function () {
  yellowBox.classList.add("blue");
};

yellowBox.addEventListener("click", setBlue);
