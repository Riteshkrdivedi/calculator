let input = document.getElementById("input-box");
let buttons = document.querySelectorAll("button");

let string = "";
let arr = Array.from(buttons);
arr.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      string = eval(string);
      input.value = string;
    } else if (e.target.innerHTML == "DEL") {
      string = string.substring(0, string.length - 1);
    } else if (e.target.innerHTML == "RESET") {
      string = "";
      input.value = string;
    } else {
      string += e.target.innerHTML;
      input.value = string;
    }
  });
});
