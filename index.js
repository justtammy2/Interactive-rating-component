const section1 = document.querySelector(".first-section");
const section2 = document.querySelector(".thank-you-section");
const buttons = document.querySelectorAll(".btn");
let selectedNum = document.querySelector(".num-selected");
const submitBtn = document.querySelector(".submit-btn");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const clickedButton = event.target;
    const value = clickedButton.textContent;
    console.log("Selected button value:", value);
    selectedNum.textContent = value;

    // Loop to remove the active class on clicking another button
    buttons.forEach((button) => {
      button.classList.remove("active");
    });

    submitBtn.addEventListener("click", () => {
      button.classList.remove("active");
      section1.style.display = "none";
      section2.style.display = "flex";
    });
    // Adds the active class on clicking it
    button.classList.add("active");
  });
});
