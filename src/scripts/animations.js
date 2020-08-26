const target = document.querySelectorAll('[data-anime]')
const animationClass = 'animate'


function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

 
const animeScroll = () => {
  const windowTop = window.pageYOffset + (window.innerHeight * 0.75)
  
  target.forEach(element => {

    if(windowTop > element.offsetTop) {
      element.classList.add(animationClass)
    }
    else {
      element.classList.remove(animationClass)
    }
  })
}

animeScroll();

if(target.length)  {
  window.addEventListener('scroll', debounce(() => {
    animeScroll();
    console.log('activated')
  }, 40))
}