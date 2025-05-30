// Importing images
import cover2 from "../images/cover2.jpg";
import bsaChat from "../images/bsa-chat.jpeg";

// Importing CSS
// import "../css/fontawesome.css";
import "../css/style.css";

// Importing Components
import DoseCalcForm from "./DoseCalcForm";
import AnthroCalcForm from "./AnthroCalcForm";
import AiForm from "./AskAI";
import Hamburger from "./utilities/Hamburger";
import Textarea from "./utilities/Textarea";

let app;

if (document.body.id === "index") {
  console.log("index page");
} else if (document.body.id === "doseCalcPage") {
  app = new DoseCalcForm();
  console.log("index page");
} else if (document.body.id === "anthroCalcPage") {
  app = new AnthroCalcForm();
  console.log("anthropometric calculation page");
} else if (document.body.id === "askPage") {
  app = new AiForm();
  const textarea = new Textarea();
  console.log("AI page");
} else if (document.body.id === "kineticsPage") {
  // app = new ();
  console.log("Kinetics calculation page");
}

const hamburger = new Hamburger();
