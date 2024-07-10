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
    dropdown.classList.toggle("show");
    var btn = document.getElementsByClassName("menubtn")[0];

    if (dropdown.classList.contains('show')) {
      btn.addEventListener('click', function closeMenu() {
        dropdown.classList.remove("show");
        btn.removeEventListener('click', closeMenu);
      }, { once: true });
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