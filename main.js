const toggle = document.querySelector('.toggle');
toggle.addEventListener('click', (e) => {
    let menu = document.querySelector('.topnavbar_toggle');
    menu.classList.toggle('topnavbar_toggle__active');
    toggle.classList.toggle('toggle__active');
});
const showAll = document.querySelector('.showAll');
let allItems = document.querySelectorAll('.portfolio_item');
showAll.addEventListener('click', (e) => {
    let items = document.querySelectorAll('.portfolio_item_dis');
    if(items.length > 0){
        for( let i = 0; i < items.length; i++){
            items[i].classList.toggle('portfolio_item_dis');
        }
        showAll.innerHTML = 'SHOW LESS';
    }else{
        allItems[6].classList.toggle('portfolio_item_dis');
        allItems[7].classList.toggle('portfolio_item_dis');
        allItems[8].classList.toggle('portfolio_item_dis');
        allItems[9].classList.toggle('portfolio_item_dis');
        allItems[10].classList.toggle('portfolio_item_dis');
        allItems[11].classList.toggle('portfolio_item_dis');
        showAll.innerHTML = 'SHOW ALL';
    }
});
const options = document.querySelector('.portfolio_options');
options.addEventListener('click', (e) => {
    if(e.target.id && e.target.id !== 'all'){
        for( let i = 0; i < allItems.length; i++ ){
            allItems[i].style.display = 'none';
            if(allItems[i].dataset.tag === e.target.id){
                allItems[i].style.display = 'block';
            }
        }
        showAll.style.display = 'none';
    } else if(e.target.id === 'all'){
        for( let i = 0; i < allItems.length; i++ ){
            allItems[i].style.display = null;
        }
        showAll.style.display = 'flex';
    }

});


let $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
    return false;
});

$('.slider').slick({
    dots: true,
    slidesToShow: 3,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                dots: true,
                arrows: false,
                slidesToShow: 1
            }
        },
        {
            breakpoint: 991,
            settings: {
                dots: true,
                arrows: false,
                slidesToShow: 2
            }
        }
    ]
});

const form = document.getElementById('contacts_form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let email = e.target.elements.email.value;
    let message = e.target.elements.message.value;
    let name = e.target.elements.name.value;
    form.style.display = 'none';
    document.querySelector('.confirmation').style.display = 'flex';
});

