"use strict";

const btn = document.querySelector(".btn--submit");
const field = document.querySelector(".main__field");
const form = document.querySelector(".main__form");
const invalidEmail = document.querySelector(".main__form-invalid");
const label = document.querySelector(".main__label");
const input = document.querySelector(".main__input");

const inputValue = input.value;

btn.addEventListener("click", function (e) {
  e.preventDefault;

  if (!input.validity.valid || inputValue === "") {
    form.classList.add("form-error-border");
    invalidEmail.classList.add("unhide");
    label.classList.add("unhide");
    console.log(form);
  } else if (input.validity.valid) {
    form.classList.remove("form-error-border");
    invalidEmail.classList.remove("unhide");
    label.classList.remove("unhide");
  }
});
