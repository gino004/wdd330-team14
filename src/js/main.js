import Alert from "./alert.mjs";

const alertInstance = new Alert("/json/alerts.json");
alertInstance.render();
