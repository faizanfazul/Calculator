/* features to be added:
    history feature,
    keyboard accessability,   
*/
let btns = document.querySelectorAll(".buttons");
let outPut = document.getElementById("output");
let backSpace = document.getElementById("backspace");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let btnValue = btn.innerText;
  });
});

// maybe use closures to make the calculator below is just random example.

function makeSizer(size) {
  return function () {
    document.body.style.fontSize = `${size}px`;
  };
}

const size12 = makeSizer(12);
const size14 = makeSizer(14);
const size16 = makeSizer(16);

document.getElementById("size-12").onclick = size12;
document.getElementById("size-14").onclick = size14;
document.getElementById("size-16").onclick = size16;
