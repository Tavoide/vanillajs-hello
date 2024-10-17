/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector("#excusa").innerHTML = excusas();
  document.querySelector("#text").addEventListener("click", () => {
    document.querySelector("#excusa").innerHTML = excusas();
  });
};

function excusas() {
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  let sugeto = Math.floor(Math.random() * who.length);
  let verbo = Math.floor(Math.random() * action.length);
  let ubicacion = Math.floor(Math.random() * what.length);
  let dia = Math.floor(Math.random() * when.length);

  return (
    who[sugeto] + " " + action[verbo] + " " + what[ubicacion] + " " + when[dia]
  );
}
