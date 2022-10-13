/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let domainOptions = [];
  let pronouns = ["el", "un", "aquel"];
  let adjectives = ["despierto", "niño", "pequeño"];
  let nouns = ["motorizado.com", "musico.com", "futbolista.com"];

  for (let p in pronouns)
    for (let n in nouns)
      for (let a in adjectives)
        domainOptions.push(pronouns[p] + adjectives[a] + nouns[n]);
  console.log(domainOptions);

  let outputDomains = "";
  for (let domain of domainOptions) {
    outputDomains += `<li class="listItem">${domain}</li>`;
  }
  document.querySelector("#resultadofinal").innerHTML = outputDomains;
};
