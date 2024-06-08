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

function buildProjectItem(project) {
  const prefixTag = project.url
    ? `<a class="project-item" href="${project.url}" target="_blank">`
    : '<div class="project-item">';
  const suffixTag = project.url ? "</a>" : "</div>";
  return `
  ${prefixTag}
    <div class="project-info">
      <h2>${project.name}</h2>
      <h3>${project.technology}</h3>
      <p>${project.description}</p>
    </div>
    <div class="project-image">
      <img src="${project.imgUrl}" alt="${project.imgAlt}" />
    </div>
  ${suffixTag}`;
}

function buildProjectSection(projects) {
  const html = projects.reduce(
    (html, item) => html + buildProjectItem(item),
    ""
  );
  $("#projects .project-bottom").html(html);
}

function getData() {
  fetch("data.json", { method: "GET" })
    .then((res) => res.json())
    .then((res) => {
      buildServicesSection(res.experiences);
      buildProjectSection(res.projects);
    });
}

getData();
