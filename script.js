let btn = document.querySelectorAll(".buttons");
let output = document.getElementById("output");

let calculation = [];
let final;

function calculate(button) {
  const value = button.textContent;
  if (value === "AC") {
    calculation = [];
    output.innerText = 0;
  } else if (value === "=") {
    output.innerText = eval(final);
  } else if (value === "<<") {
    calculation.length--;
    final = calculation.join("");
    output.innerText = final;
  } else {
    calculation.push(value);
    final = calculation.join("");
    output.innerText = final;
  }
}

btn.forEach((button) =>
  button.addEventListener("click", () => {
    calculate(button);
  })
);
