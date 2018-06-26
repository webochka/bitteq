
 $(document).ready(function(){
      $('.partners__slider').slick({
        infinite: true,
        slidesToShow: 4.15,
        slidesToScroll: 1,
        responsive: [
    {
      breakpoint: 1160,
      settings: {
        slidesToShow: 3.5,
       
      }
    },

    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 3.1,
       
      }
    },

    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2.5,
       
      }
    },

    {
      breakpoint: 680,
      settings: {
        slidesToShow: 2.1,
       
      }
    },

    {
      breakpoint: 550,
      settings: {
        slidesToShow: 1.7,
       
       
      }

    },

    {
      breakpoint: 400,
      settings: {
        slidesToShow: 1.2,
       
       
      }

    },

    {
      breakpoint: 300,
      settings: {
        slidesToShow: 1,
       
       
      }

    }

    ]

    });
});
    

$(document).ready(function(){
      $('.positions').slick({
        infinite: true,
        slidesToShow: 2.65,
        slidesToScroll: 1,
         responsive: [
    {
      breakpoint: 1185,
      settings: {
        slidesToShow: 2.3,
       
      }
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
       
      }
    },

    {
      breakpoint: 900,
      settings: {
        slidesToShow: 1.7,
       
      }
    },

    {
      breakpoint: 750,
      settings: {
        slidesToShow: 1.5,
       
      }
    },

    {
      breakpoint: 650,
      settings: {
        slidesToShow: 1.3,
       
      }
    },

     {
      breakpoint: 390,
      settings: {
        slidesToShow: 1,
       
      }
    },
]
   });
});




let button = document.querySelector('.sidebar__menu__button');
let menu = document.querySelector('.sidebar__menu');
let icons = document.querySelector('.sidebar__icons');
let body = document.getElementsByTagName('body');
let sidebar = document.querySelector('.sidebar');
let menuLink = document.getElementsByClassName('sidebar__menu__link');


button.addEventListener('click', (e) => {
  sidebar.classList.toggle('sidebar__open');
  menu.classList.toggle('sidebar__menu__open');
  icons.classList.toggle('sidebar__icons__open');
  body[0].style.overflow = (body[0].style.overflow == 'hidden') ? '' : 'hidden';



});

button.addEventListener('touchmove', (e) => {
   body[0].style.overflow = (body[0].style.overflow == 'hidden') ? '' : 'hidden';
});

for(var key in menuLink){
    menuLink[key].addEventListener('click', (e) => {
      sidebar.classList.remove('sidebar__open');
      menu.classList.remove('sidebar__menu__open');
      icons.classList.remove('sidebar__icons__open');
      body[0].style.overflow = '';

      })
}














