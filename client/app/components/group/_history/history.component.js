import template from "./history.html";
import controller from "./history.controller";
import "./history.styl";

let historyComponent = {
  bindings: {
    data: "<",
    options: "<"
  },
  template,
  controller
};

export default historyComponent;
