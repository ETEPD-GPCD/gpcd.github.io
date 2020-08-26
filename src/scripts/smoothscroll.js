const menuItems = document.querySelectorAll('.nav-links a#scroll');

menuItems.forEach(item => {
  item.addEventListener('click', scrollToIdOnClick)
})

function scrollToIdOnClick (event) {
  event.preventDefault();

  const element = event.target
  const id = element.getAttribute('href')
  const target = document.querySelector(id).offsetTop
 

  window.scrollTo({
    top: target - 50,
    behavior: "smooth"
  })
}