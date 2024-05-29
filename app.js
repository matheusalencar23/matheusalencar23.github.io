import animations from "./js/animations.js";

animations();

function buildServicesSection(experience) {}

function getData() {
  fetch("data.json", { method: "GET" })
    .then((res) => res.json())
    .then((res) => {});
}

getData();
