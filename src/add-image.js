import pubgImage from "./pubg.png";
import pubgText from "./pubg.txt";

function addImage() {
  const imgElement = document.createElement("img");
  imgElement.alt = pubgText;
  imgElement.width = 300;
  imgElement.src = pubgImage;
  const body = document.querySelector("body");
  body.appendChild(imgElement);
}

export default addImage;
