const randomNumber1 = Math.floor(Math.random() * 6) + 1;
const imageLocation1 = "dice" + randomNumber1 + ".png";
const imageSize1 = "images/" + imageLocation1;
const image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", imageSize1);

const randomNumber2 = Math.floor(Math.random() * 6) + 1;
const imageLocation2 = "dice" + randomNumber2 + ".png";
const imageSize2 = "images/" + imageLocation2;
const image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", imageSize2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins 🚩";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 2 Wins";
} else {
  document.querySelector("h1").innerHTML = "Draw";
}
