import HelloWorldButton from "./components/HelloWorldButton";
import Header from "./components/header";

const newHeader = new Header();
newHeader.render();

const helloWorldButton = new HelloWorldButton();
helloWorldButton.render();

if (process.env.NODE_ENV === "production") {
  console.log("we are in production mode");
} else if (process.env.NODE_ENV === "development") {
  console.log("we are in development mode");
}

helloWorldButton.methodThatDoesNotExist();
