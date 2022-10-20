const board = document.querySelector("#board");
// const colors = [
//   "#A52A2A",
//   "#D2691E",
//   "#9370DB",
//   "#4B0082",
//   "#4682B4",
//   "#808000",
//   "#B22222",
//   "#7CFC00",
//   "#008B8B",
//   "#FF69B4",
// ];
const SQUARES_NUMBER = 726;

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => setColor(square));
  square.addEventListener("mouseleave", () => removeColor(square));

  board.append(square);
}

function setColor(element) {
  //   const color = getColor();
  const color = generateColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
  element.style.backgroundColor = "#474747";
  element.style.boxShadow = `0 0 2px #000`;
}

// function getColor() {
//   const index = Math.floor(Math.random() * colors.length);
//   return colors[index];
// }

function generateColor() {
  const hexSymbols = "0123456789ABCDEF";
  let color = "";
  for (let i = 0; i < 6; i++) {
    color += hexSymbols[Math.floor(Math.random() * hexSymbols.length)];
  }
  return "#" + color;
}
