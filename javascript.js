const hamburgerIcon = document.querySelector('.button');
const navigationBar = document.querySelector('.nav-bar');
const closeIcon = document.querySelector('.clos');

// Making Projects load dynamically
const projects = [
  {
    name: 'Spotify-API',
    featureimage: './img/Screenshot_spotitfy.png',
    description: 'In this app, you can like and comment on songs. External API used: Spotify',
    technologies: ['Css', 'Html', 'Javascript'],
    liveversion: 'https://daf98.github.io/Spotify-API/dist/',
    source: 'https://github.com/Daf98/Spotify-API',
  },
  {
    name: 'React-Bookstore',
    featureimage: './img/Screenshot_bookstore.png',
    description: 'A Bookstore App which allows you to add and remove your favorite books',
    technologies: ['Css', 'Html', 'React', 'Javascript'],
    liveversion: 'https://62e301da62d6ee1be945ba41--zesty-palmier-fd5ec0.netlify.app/',
    source: 'https://github.com/fibini/React-Bookstore',
  },
  {
    name: 'Space-Travelers-Hub',
    featureimage: './img/Screenshot_missions.png',
    description: 'This web app works with the real live data from the SpaceX API. It is for a company (not a real one) that provides commercial and scientific space travel services. The application allows users to book rockets and join selected space missions',
    technologies: ['Css', 'Html', 'Javascript'],
    liveversion: 'https://dev--frolicking-kataifi-133879.netlify.app/',
    source: 'https://github.com/GiuseppeTG/Space-Travelers-Hub',
  },
  {
    name: 'Budget_app',
    featureimage: './img/Screenshot_budgetapp.png',
    description: 'This project is about building a mobile web application where you can manage your budget, you have a list of transactions associated with a category, so that you can see how much money you spent and on what',
    technologies: ['Css', 'Html', 'Scss', 'Ruby', 'Javascript'],
    liveversion: 'https://sleepy-shelf-32739.herokuapp.com/',
    source: 'https://github.com/fibini/Budget_app',
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
const active = document.querySelectorAll('.bt2');
for (let i = 0; i < active.length; i += 1) {
  let tech = '';
  for (let j = 0; j < projects[i].technologies.length; j += 1) {
    tech += `<img src="./img/Devider1.png" alt="upright small devider line">
    <h4>${projects[i].technologies[j]}</h4>`;
  }
  active[i].addEventListener('click', () => {
    const section = document.getElementById('popup-box');
    section.style.display = 'flex';
    section.innerHTML = `
        <article class="popup-window">
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
            <a target="_blank" href="${projects[i].liveversion}"><button class="popout-live">See Live<span><img src="./img/Icon4.png" alt="pointer icon"></span></button></a>
            <a target="_blank" href="${projects[i].source}"><button class="popout-source">See Source<span><img src="./img/Vector.png" alt="Github icon"></span></button></a>
          </div>
        </article>`;

    const popclose = document.querySelector('.popup-close');
    popclose.addEventListener('click', () => {
      section.style.display = 'none';
    });

    window.onclick = function (event) {
      if (event.target === section) {
        section.style.display = 'none';
      }
    };
  });
}

// Email Validation
const contactform = document.getElementById('forms');
const email = document.getElementById('mail');
const errormessage = document.getElementById('error');
const regx = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;

contactform.addEventListener('submit', (event) => {
  const error = [];
  if (!regx.test(email.value)) {
    error.push('Email needs to be lowercase.Form not sent!');
    errormessage.innerText = error;
    event.preventDefault();
  }
});
