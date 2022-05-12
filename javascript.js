const hamburgerIcon = document.querySelector('.button');
const navigationBar = document.querySelector('.nav-bar');
const closeIcon = document.querySelector('.clos');

// Making Projects load dynamically
const projects = [
  {
    name: 'Multi-Post Stories',
    featureimage: './img/Snapshoot Portfolio.png',
    description: `A daily selection of privately personalized reads; no accounts or
    sign-ups required. has been the industry's standard dummy text ever
    since the 1500s, when an unknown printer took a standard dummy text.`,
    technologies: ['css', 'html', 'bootstrap', 'Ruby'],
    liveversion: '',
    source: '',
  },
  {
    name: 'Multi-Post Stories',
    featureimage: './img/Img-Placeholder.png',
    description: `A daily selection of privately personalized reads; no accounts or
    sign-ups required. has been the industry's standard dummy text ever
    since the 1500s, when an unknown printer took a standard dummy text.`,
    technologies: ['css', 'html', 'bootstrap', 'Ruby'],
    liveversion: '',
    source: '',
  },
  {
    name: 'Multi-Post Stories',
    featureimage: './img/Img-Placeholder.png',
    description: `A daily selection of privately personalized reads; no accounts or
    sign-ups required. has been the industry's standard dummy text ever
    since the 1500s, when an unknown printer took a standard dummy text.`,
    technologies: ['css', 'html', 'bootstrap', 'Ruby'],
    liveversion: 'https://fibini.github.io/Portfolio-project/',
    source: 'https://github.com/fibini/Portfolio-project',
  },
  {
    name: 'ABC',
    featureimage: './img/Img-Placeholder.png',
    description: `A daily selection of privately personalized reads; no accounts or
    sign-ups required. has been the industry's standard dummy text ever
    since the 1500s, when an unknown printer took a standard dummy text.`,
    technologies: ['css', 'html', 'bootstrap', 'Ruby'],
    liveversion: 'https://fibini.github.io/Portfolio-project/',
    source: 'https://github.com/fibini/Portfolio-project',
  },
];

projects.forEach((project, index) => {
  let tech = '';
  project.technologies.forEach((technology) => {
    tech += `<li>${technology}</li><li>
    <img src="./img/Rectangle-70.png" alt="upright small rectangle" />
  </li>`;
  });

  const card = `
<img
  class="blank"
  src="${project.featureimage}"
  alt="blank image white screen"
/>
<h3 class="post">${project.name}</h3>
<p class="select">
  ${project.description}
</p>
<ul class="stuff">
  ${tech}
</ul>
<div class="but">
  <button class="bt2" type="button">see project</button>
</div>`;
  document.getElementById(`middle${index + 1}`).innerHTML += card;
});

// Menu button
hamburgerIcon.addEventListener('click', () => {
  hamburgerIcon.classList.toggle('show');
  navigationBar.classList.toggle('show');
  closeIcon.classList.toggle('show');
});

document.querySelectorAll('.adj,.clos').forEach((n) => n.addEventListener('click', () => {
  hamburgerIcon.classList.remove('show');
  navigationBar.classList.remove('show');
  closeIcon.classList.remove('show');
}));

// Popup window for projects
const body = document.querySelector('body');
const blur = document.querySelector('.container');
const active = document.querySelectorAll('.bt2');
for (let i = 0; i < active.length; i += 1) {
  let tech = '';
  for (let j = 0; j < projects[i].technologies.length; j += 1) {
    tech += `<img src="./img/Devider1.png" alt="upright small devider line">
    <h4>${projects[i].technologies[j]}</h4>`;
  }
  active[i].addEventListener('click', () => {
    blur.classList.toggle('blur');
    const section = document.createElement('section');
    section.className = 'popup-box';
    const article = document.createElement('article');
    article.className = 'popup-window';
    article.innerHTML = `
          <div class="popup-top-section">
            <h2>${projects[i].name}</h2>
            <button class="popup-close">&times;</button>
          </div>
          <div class="popout-image">
            <img src="${projects[i].featureimage}" alt="picture with all kinds of shapes inside">
          </div>
          <div class="popout-image2">
            <img class="portfolio-img" src="${projects[i].featureimage}" alt="picture with all kinds of shapes inside">
          </div>
          <div class="popout-description">
            <p>${projects[i].description}
            </p>
          </div>
          <div class="popout-technologies">
            ${tech}
          </div>
          <div class="popout-buttons">
            <button class="popout-live"><a href="${projects[i].liveversion}">See Live</a><span><img src="./img/Icon4.png" alt="pointer icon"></span></button>
            <button class="popout-source"><a href="${projects[i].source}">See Source</a><span><img src="./img/Vector.png" alt="Github icon"></span></button>
          </div>`;

    section.appendChild(article);
    body.appendChild(section);

    const popclose = document.querySelector('.popup-close');
    popclose.addEventListener('click', () => {
      section.remove(article);
      blur.classList.toggle('blur');
    });
  });
}