/*Funcion para motrar y ocultar menuScreen*/
const header = document.getElementById('header');
const pie = document.getElementById('pie');
const menuScreen = document.getElementById('menuScreen');

function toggleMenuVisibility() {
    const headerHeight = header.offsetHeight;
    const pieRect = pie.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    const headerOutOfView = window.pageYOffset > headerHeight;

    const pieInView = pieRect.top < windowHeight && pieRect.bottom >= 0;

    if (headerOutOfView && !pieInView) {
        menuScreen.classList.remove('hidden');
    } else {
        menuScreen.classList.add('hidden');
    }
}
window.addEventListener('scroll', toggleMenuVisibility);

/*Funcion menu responsive*/
function toggleMenu() {
    var dropdown = document.getElementById("menuDes");
    var btn = document.getElementsByClassName("menubtn")[0];

    if (dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
        dropdown.classList.add('hide');
        dropdown.addEventListener('animationend', function handleAnimationEnd() {
            dropdown.classList.remove('hide');
            dropdown.style.display = 'none';
            dropdown.removeEventListener('animationend', handleAnimationEnd);
        });
    } else {
        dropdown.style.display = 'flex';
        dropdown.classList.remove('hide');
        dropdown.classList.add('show');
    }
}


  
 
/*Funcion para clasificar las cards*/
function filterCards(category) {
    const cards = document.querySelectorAll('#cards .card');

    cards.forEach(card => {
        card.style.display = 'none'; 
        if (category === 'all') {
            card.style.display = 'flex'; 
        } else if (card.classList.contains(category)) {
            card.style.display = 'flex';
        }
    });
}

filterCards('all');

/*Funcion de texto copiado*/
document.getElementById('copyText').addEventListener('click', function() {
    const textToCopy = 'alfonsoaguor@gmail.com';
    const textArea = document.createElement('textarea');
    textArea.value = textToCopy;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);

    const confirmationMessage = document.getElementById('showMail');
    confirmationMessage.innerText = 'El correo ' + textToCopy + ' ha sido copiado';
    confirmationMessage.style.display = 'block';

    setTimeout(function() {
        confirmationMessage.style.display = 'none';
    }, 2000);
});

/* Funcion del carousel*/
function showSlide(carousel, index) {
    const slides = carousel.querySelectorAll('.carousel-item');
    let currentIndex = index;

    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    }

    const offset = -currentIndex * 100;
    carousel.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;

    carousel.dataset.currentIndex = currentIndex;
}

function nextSlide(carousel) {
    const currentIndex = parseInt(carousel.dataset.currentIndex);
    showSlide(carousel, currentIndex + 1);
}

function prevSlide(carousel) {
    const currentIndex = parseInt(carousel.dataset.currentIndex);
    showSlide(carousel, currentIndex - 1);
}

document.querySelectorAll('.carousel').forEach(carousel => {
    carousel.dataset.currentIndex = 0; 

    carousel.querySelector('.next').addEventListener('click', () => nextSlide(carousel));
    carousel.querySelector('.prev').addEventListener('click', () => prevSlide(carousel));

    setInterval(() => nextSlide(carousel), 30000);
});
