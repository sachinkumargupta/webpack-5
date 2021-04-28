import pubgImage from "./pubg.png";

function addImage() {
  const imgElement = document.createElement("img");
  imgElement.alt = "PUBG";
  imgElement.width = 300;
  imgElement.src = pubgImage;
  const body = document.querySelector("body");
  body.appendChild(imgElement);
}

export default addImage;
