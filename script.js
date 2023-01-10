let countEl = document.getElementById("count-el");
let previousEntry = document.getElementById("save-el");
console.log(previousEntry);

let count = 0;

function increment() {
  count++;
  countEl.textContent = count;
}

function save() {
  let countDash = count + " - ";
  previousEntry.textContent += countDash;
  countEl.textContent = 0;
  count = 0;
}
