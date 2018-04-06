// create the dynamic nav based on the navItems array
const nav = document.getElementById('main');
const navLinks = nav.querySelector('#nav-links');
const markup = `${navItems.map(listItem => `<li><a href="${listItem.link}">${listItem.label}</a></li>`).join('')}`;
navLinks.innerHTML = markup;

//This creates the reference to the logo.
const logo = document.querySelector('.logo');
//Now we are adding the show menu class on click.
logo.addEventListener('click', function (){
  document.body.classList.toggle('showmenu');
  event.preventDefault();
})



// sticky nav
let topOfNav = nav.offsetTop;

window.addEventListener('scroll', fixNav)

function fixNav() {
  if (window.scrollY >= topOfNav) {
    document.body.style.paddingTop = nav.offsetHeight + 'px';
    document.body.classList.add('fixed-nav')
  } else {
    document.body.style.paddingTop = 0;
    document.body.classList.remove('fixed-nav')
  }
}

// hashes
const siteWrap = document.querySelector('.site-wrap');

window.onload = function(){
  let newContent;
  //the first part below is someone is coming to the page for the first time.
  //ie, window.location.hash will be null.
  if(!window.location.hash){ 
    newContent = navItems.filter(
      navItem => navItem.link == '#watchlist'
    )
  } else {
    newContent = navItems.filter(
      navItem => navItem.link == window.location.hash
    )
  }
  renderPage(newContent)
}

window.onhashchange = function() {
  let newloc = window.location.hash;
  let newContent = navItems.filter(
    navItem => navItem.link == newloc
  )
  renderPage(newContent);
  //The below scrolls to the top once you change the navigation.
  window.scrollTo(0,0);
}

function renderPage(newContent){
  siteWrap.innerHTML = `
  <h2>${newContent[0].header}</h2>
  ${newContent[0].content}
  `
}