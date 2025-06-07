// creating a 4x4 grid

let numberofSquares = parseInt(prompt("What Size Grid Would You Like"));

if (numberofSquares > 48) {
  numberofSquares = parseInt(prompt("Please Enter a Number Less than 48"));
}

if (numberofSquares % 4 != 0) {
  numberofSquares += Math.floor(numberofSquares / 4);
}
const builder = document.querySelector(".container");

for (let i = 0; i < numberofSquares; i++) {
  const gridBox = document.createElement("div");
  gridBox.classList.add("item"); // Remove the dot here
  gridBox.id = `item ${i}`;

  builder.append(gridBox);
}

const items = document.querySelectorAll(".item");

items.forEach((item) => {
  item.addEventListener("click", () => {
    item.style.opacity = parseFloat(getComputedStyle(item).opacity) + 0.1;
  });
});
