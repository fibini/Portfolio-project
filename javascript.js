const hamburgerIcon = document.querySelector('.button');
const navigationBar = document.querySelector('.nav-bar');
const closeIcon = document.querySelector('.clos');

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

const projects = [
  
]
//popout-window//
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