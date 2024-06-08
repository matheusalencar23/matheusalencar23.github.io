import animations from "./js/animations.js";

animations();

function buildServiceItem(item) {
  return `
    <div class="service-item">
      <div class="icon">
        <img
          src="${item.imgUrl}"
          alt="${item.imgAlt}"
        />
      </div>
      <h3>${item.title}</h3>
      <p>${item.text}</p>
    </div>
  `;
}

function buildServicesSection(experience) {
  $("#services .service-top h2").after(`<p>${experience.text}</p>`);
  const html = experience.items.reduce(
    (html, item) => html + buildServiceItem(item),
    ""
  );
  $("#services .service-bottom").html(html);
}

function getData() {
  fetch("data.json", { method: "GET" })
    .then((res) => res.json())
    .then((res) => {
      buildServicesSection(res.experiences);
    });
}

getData();
