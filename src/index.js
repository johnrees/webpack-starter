import { greeting } from "./utils";

const name = prompt("what's your name?") || "human";

document.getElementById("app").innerHTML = greeting(name);
