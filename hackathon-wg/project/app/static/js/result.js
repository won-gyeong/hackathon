document.addEventListener("DOMContentLoaded", function () {
  // Retrieve the classification from the URL parameter
  var params = new URLSearchParams(window.location.search);
  var classification = document.getElementById("clas").innerText;

  // Display the classification on the page
  var resultSection = document.getElementById("resultSection");
  resultSection.textContent = "✨" + classification + "✨";
});

const classification = document.getElementById("clas").innerText;
const contentSection = document.querySelector(".contentSection");

console.log(classification[0]);

if (classification[0] == "A") {
  const li = document.createElement("li");
  li.innerText = "✅ 다른 무엇보다도 주점에 가고 싶은 당신 ✨";
  contentSection.appendChild(li);
} else {
  const li = document.createElement("li");
  li.innerText = "✅ 다른 무엇보다도 연예인들의 무대를 즐기러온 당신 ✨";
  contentSection.appendChild(li);
}

if (classification[1] == "C") {
  const li = document.createElement("li");
  li.innerText = "✅ 조용조용,, 잔잔하고, 평온한 분위기를 좋아하시는군요 🫠";
  contentSection.appendChild(li);
} else {
  const li = document.createElement("li");
  li.innerText = "✅ 시끌벅적! 화끈하고 신나는 분위기를 좋아하시는군요 🎉";
  contentSection.appendChild(li);
}

if (classification[1] == "E") {
  const li = document.createElement("li");
  li.innerText =
    "✅ 웨이팅보다는 할 수 있는 것을 빠르게 찾아서 즐기는 실행력있는 사람이네요 ☺";
  contentSection.appendChild(li);
} else {
  const li = document.createElement("li");
  li.innerText =
    "✅ 원하는 목표를 이루기 위해 오랫동안 웨이팅할 의향이 있는 참을성 강한 사람이네요 ☺ ";
  contentSection.appendChild(li);
}

if (classification[1] == "L") {
  const li = document.createElement("li");
  li.innerText =
    "✅ 두근두근! 이번 축제에서 새로운 인연을 만나 사랑 가득한 캠퍼스 라이프를 꿈꿔보아요 ❤";
  contentSection.appendChild(li);
} else {
  const li = document.createElement("li");
  li.innerText =
    "✅ 고대는 의리지! 사람들과 함께 우정을 쌓고 훗날 기억할 수 있는 추억을 만들어 보아요 🎈";
  contentSection.appendChild(li);
}
