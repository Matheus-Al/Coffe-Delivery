const menuBtn = document.getElementById('menu-icon');
const closeBtn = document.getElementById('close-btn');
const navbar = document.querySelector('.nav-links');
const links = document.querySelectorAll('li');
const roastedBtn = document.querySelector('.roastedBtn');
const unRoastedBtn = document.querySelector('.unRoastedBtn');
const roastedCoffe = document.querySelector('.cards-container');
const unRoastedCoffe = document.querySelector('.cards-container2');
const body = document.querySelector('body');
const panels = document.querySelectorAll('.panel');
const navItems = document.querySelectorAll('.nav-item');

menuBtn.addEventListener('click', () => {
	body.style.overflowY = 'hidden';
	navbar.classList.add('active');
});

closeBtn.addEventListener('click', () => {
	navbar.classList.remove('active');
	links.forEach((link, index) => {
		link.style.animation
			? (link.style.animation = '')
			: (link.style.animation = `navLinkFade 0.5s ease forwards ${
					index / 7 + 0.3
			  }s`);
	});
	body.style.overflowY = 'scroll';
});

roastedBtn.addEventListener('click', e => {
	e.preventDefault();
	if (unRoastedBtn.classList.contains('active')) {
		unRoastedBtn.classList.remove('active');
		roastedBtn.classList.add('active');
	} else {
		roastedBtn.classList.add('active');
	}

	unRoastedCoffe.style.display = 'none';
	roastedCoffe.style.display = 'flex';
});

unRoastedBtn.addEventListener('click', e => {
	e.preventDefault();
	if (roastedBtn.classList.contains('active')) {
		roastedBtn.classList.remove('active');
		unRoastedBtn.classList.add('active');
	} else {
		unRoastedBtn.classList.add('active');
	}
	roastedCoffe.style.display = 'none';
	unRoastedCoffe.style.display = 'flex';
});

panels.forEach(panel => {
	panel.addEventListener('click', () => {
		removeActiveClasses();
		panel.classList.add('active');
	});
});

function removeActiveClasses() {
	panels.forEach(panel => {
		panel.classList.remove('active');
	});
}

navItems.forEach(navItem => {
	navItem.addEventListener('click', () => {
		body.style.overflowY = 'scroll';
		navbar.classList.remove('active');
	});
});
