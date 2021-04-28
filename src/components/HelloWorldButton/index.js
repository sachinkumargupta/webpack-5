import "./index.scss";

class HelloWorldButton {
  render() {
    const body = document.querySelector("body");
    const button = document.createElement("button");
    button.classList.add("button-style");

    button.onclick = function () {
      console.log("I got clicked");
      const p = document.createElement("p");
      p.classList.add("para-style");
      p.innerHTML = "Hello World Button Clicked";
      body.append(p);
    };

    button.innerHTML = "Hello World Button";
    body.append(button);
  }
}

export default HelloWorldButton;
