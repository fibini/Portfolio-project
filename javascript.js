const hamburgerIcon = document.querySelector('.button');
const navigationBar = document.querySelector('.nav-bar');
const closeIcon = document.querySelector('.clos');
const firstproject = document.getElementById('middle');
const secondproject = document.getElementById('middle2');
const thirdproject = document.getElementById('middle3');
const fourthproject = document.getElementById('middle4');
const project = {
  name :'Multi-Post Stories',
  featureimage : './img/Img-Placeholder.png',
  description : `A daily selection of privately personalized reads; no accounts or
  sign-ups required. has been the industry's standard dummy text ever
  since the 1500s, when an unknown printer took a standard dummy text.`,
  technologies : ['css','html','bootstrap','Ruby'],
  liveversion : '',
  source : '', 
};

firstproject.innerHTML =`<h2 id="work">MY RECENT WORK</h2>
<img class="divi" src="./img/Devider.png" alt="small horizontal line" />
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
  <li>${project.technologies[0]}</li>
  <li>
    <img src="./img/Rectangle-70.png" alt="upright small rectangle" />
  </li>
  <li>${project.technologies[1]}</li>
  <li>
    <img src="./img/Rectangle-70.png" alt="upright small rectangle" />
  </li>
  <li>${project.technologies[2]}</li>
  <li>
    <img src="./img/Rectangle-70.png" alt="upright small rectangle" />
  </li>
  <li>${project.technologies[3]}</li>
</ul>
<div class="but">
  <button class="bt2" type="button">see project</button>
</div>`;

secondproject.innerHTML =`<img
class="blank2"
src="${project.featureimage}"
alt="blank image white screen"
/>
<h3 class="post2">${project.name}</h3>
<p class="select2">
${project.description}
</p>
<ul class="stuff2">
<li>${project.technologies[0]}</li>
<li>
  <img src="./img/Rectangle-70.png" alt="upright small rectangle" />
</li>
<li>${project.technologies[1]}</li>
<li>
  <img src="./img/Rectangle-70.png" alt="upright small rectangle" />
</li>
<li>${project.technologies[2]}</li>
<li>
  <img src="./img/Rectangle-70.png" alt="upright small rectangle" />
</li>
<li>${project.technologies[3]}</li>
</ul>
<div class="but2">
<button class="bt2" type="button">see project</button>
</div>`;

thirdproject.innerHTML =`<img
class="blank"
src="${project.featureimage}"
alt="blank image white screen"
/>
<h3 class="post">${project.name}</h3>
<p class="select">
${project.description}
</p>
<ul class="stuff">
<li>${project.technologies[0]}</li>
<li>
  <img src="./img/Rectangle-70.png" alt="upright small rectangle" />
</li>
<li>${project.technologies[1]}</li>
<li>
  <img src="./img/Rectangle-70.png" alt="upright small rectangle" />
</li>
<li>${project.technologies[2]}</li>
<li>
  <img src="./img/Rectangle-70.png" alt="upright small rectangle" />
</li>
<li>${project.technologies[3]}</li>
</ul>
<div class="but">
<button class="bt2" type="button">see project</button>
</div>`;

fourthproject.innerHTML =`<img
class="blank2"
src="${project.featureimage}"
alt="blank image white screen"
/>
<h3 class="post2">${project.name}</h3>
<p class="select2">
${project.description}
</p>
<ul class="stuff2">
<li>${project.technologies[0]}</li>
<li>
  <img src="./img/Rectangle-70.png" alt="upright small rectangle" />
</li>
<li>${project.technologies[1]}</li>
<li>
  <img src="./img/Rectangle-70.png" alt="upright small rectangle" />
</li>
<li>${project.technologies[2]}</li>
<li>
  <img src="./img/Rectangle-70.png" alt="upright small rectangle" />
</li>
<li>${project.technologies[3]}</li>
</ul>
<div class="but2">
<button class="bt2" type="button">see project</button>
</div>`;




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

const body = document.querySelector('body');
const blur = document.querySelector('.container');
const active = document.querySelector('.bt2')
active.addEventListener('click', ()=> {
  blur.classList.toggle('blur')
  const section = document.createElement('section');
  section.className ='popup-box'
  const article = document.createElement('article');
  article.className = 'popup-window'
  article.innerHTML = `
        <div class="popup-top-section">
          <h2>Multi-Post stories</h2>
          <button class="popup-close">&times;</button>
        </div>
        <div class="popout-image">
          <img src="./img/Snapshoot Portfolio.png" alt="picture with all kinds of shapes inside">
        </div>
        <div class="popout-image2">
          <img src="./img/Snapshoot Portfolio1.png" alt="picture with all kinds of shapes inside">
        </div>
        <div class="popout-description">
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.
          </p>
        </div>
        <div class="popout-technologies">
          <img src="./img/Devider1.png" alt="upright small devider line">
          <h4>html</h4>
          <img src="./img/Devider1.png" alt="upright small devider line">
          <h4>Ruby on Rails</h4>
          <img src="./img/Devider1.png" alt="upright small devider line">
          <h4>css</h4>
          <img src="./img/Devider1.png" alt="upright small devider line">
        </div>
        <div class="popout-buttons">
          <button class="popout-live">See Live<span><img src="./img/Icon4.png" alt="pointer icon"></span></button>
          <button class="popout-source">See Source <span><img src="./img/Vector.png" alt="Github icon"></span></button>
        </div>`

        section.appendChild(article);
        body.appendChild(section);

        const popclose = document.querySelector('.popup-close');
        popclose.addEventListener('click', ()=> {
          section.remove(article)
          blur.classList.toggle('blur')
        })
})