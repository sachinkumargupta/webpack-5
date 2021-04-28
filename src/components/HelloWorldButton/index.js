import "./index.scss";

class HelloWorldButton {
  // in the tutorial, webpack version was throwing error in this line,
  // reason webpack was not supportting class properties (attributes)
  // so we needed a loader - babel
  // right now even optional chaining is supported by webpack
  classNameList = { button: "button-style" };

  render() {
    const body = document.querySelector("body");
    const button = document.createElement("button");
    button.classList.add(this.classNameList?.button);

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
