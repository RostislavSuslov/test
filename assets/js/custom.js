const input = document.querySelectorAll('.custom-input input, .custom-input textarea');
input.forEach(item => {
    item.oninput = () => {
        let inputValue = item.value;
        inputValue.length > 0 ? item.classList.add('focus') : item.classList.remove('focus')
    };
})

const checkbox = document.querySelectorAll("[type='checkbox'], [type='radio']");
checkbox.forEach(item => {
    item.closest('.custom-input').classList.add('checked-box')
})


const typePassword = document.querySelectorAll('[type="password"]');

typePassword.forEach(password => {

    const id = password.getAttribute('id')
    const link = document.createElement('a');
    link.href = "#" + id;
    link.className = 'show';
    link.title = 'show';


    password.before(link);

    link.addEventListener("click", (e) => {
        e.preventDefault()
        if (password.type === "password") {
            password.type = "text";
            link.classList.add('hide')
            link.classList.remove('show');
            link.title = 'hide';
        } else {
            password.type = "password";
            link.classList.add('show');
            link.classList.remove('hide');
            link.title = 'show';
        }
    })
})


const inputDropdown = document.querySelectorAll('.dropdown-input')



inputDropdown.forEach(input => {
    const inputWrapp = input.closest('.custom-input');
    const inputLabel = inputWrapp.querySelector('label');
    const inputWrappOptions = inputWrapp.querySelectorAll('.dropdown-input-values__item');
    const inputThis = inputWrapp.querySelector('.dropdown-input');

    inputWrapp.classList.add('close-dropdown')

    if (input.hasAttribute('value')) {
        input.classList.add('focus')
    }


    input.addEventListener('click', () => {



        inputWrapp.classList.toggle('active-dropdown');
        inputThis.classList.toggle('focus');
        inputWrappOptions.forEach(item => {
            item.addEventListener('click', () => {
                const itemValue = item.textContent
                console.log(itemValue);
                inputThis.setAttribute("value", itemValue);
                inputThis.classList.add('focus')

                inputWrapp.classList.remove('active-dropdown')

                inputLabel.style.transitionProperty = "top";
            })
        })


    })
})
 

if (document.querySelector('.docks-box')) {
    const docksBox = document.querySelectorAll('.docks-box')
    docksBox.forEach(item => {
        const input = item.querySelectorAll('.custom-input');
        
        if (input.length === 2) {
            item.classList.add('two-col');
        } else {
            null
        }
    })
}

if(document.querySelector('[type="radio"]')){
    const radioBtn = document.querySelectorAll('[type="radio"]');
    radioBtn.forEach(radio => {
        radio.closest('.component').classList.add('radiobuttons-box')
    })
}

 


if (document.querySelector('#drop-zone')) {


    const dropZone = document.getElementById("drop-zone");
    const fileInput = document.getElementById('file-input')
    // Функция для обработки события Drag & Drop
    function handleDrop(e) {
        e.preventDefault();
        dropZone.classList.remove("hover");

        const files = e.dataTransfer.files;
        if (files.length) {
            document.getElementById("file-input").files = files;
            updateThumbnail(files[0]);
        }
    }

    // Функция для обработки события перетаскивания над зоной
    function handleDragOver(e) {
        e.preventDefault();
        dropZone.classList.add("hover");
    }

    // Функция для обработки события выхода за пределы зоны Drag & Drop
    function handleDragLeave() {
        dropZone.classList.remove("hover");
    }

    // Функция для обновления отображения загруженного файла
    function updateThumbnail(file) {
        const thumbnail = document.createElement("div");
        thumbnail.innerHTML = file.name;
        document.getElementById("drop-zone").appendChild(thumbnail);
    }

    // Обработчики событий
    dropZone.addEventListener("dragover", handleDragOver);
    dropZone.addEventListener("dragleave", handleDragLeave);
    dropZone.addEventListener("drop", handleDrop);

    // Обработчик события выбора файла через input[type="file"]
    document.getElementById("file-input").addEventListener("change", function() {
        updateThumbnail(this.files[0]);
    });

    dropZone.addEventListener('click', () => {
        fileInput.click();
    });
}



jQuery(document).ready(function($) {
    const $window = $(window);
    const $header = $('header');

    function adopFirstscreen() {

        if ((window.matchMedia('(max-width: 1024px)').matches) && $('.form-exchange').length) {
            $('.form-exchange')
            .closest(".banner")
            .addClass('append-title')
            .find($('.banner-subtitle, .banner-title'))
            .appendTo('.append-title .banner-col-right');
        } else {
            null
        }
    }
    adopFirstscreen()


    $window.scroll(onScroll);

    function onScroll() {
        if ($window.scrollTop()) {
            $header.addClass('header-fixed');
            $('body').css('padding-top', $header.outerHeight())
        } else {
            $header.removeClass('header-fixed');
            $('body').css('padding-top', "0")
        }
    }

    function adopFirstscreenSlider() {
        if ((window.matchMedia('(max-width: 1024px)').matches)) {
            $('.first-screen-slider').on('afterChange', function(event, slick, currentSlide) {
                var slideHeight = slick.$slides.eq(currentSlide).find($('.banner')).outerHeight();
                slick.$slider.css('height', slideHeight + 'px');
            });

            var firstScreenHeight = $('.slick-current').find($('.banner')).height() - 56;
            $('.slick-slider').css('height', firstScreenHeight);

        } else {
            null
        }
    }


    if ($('.first-screen-slider').length) {
        $('.first-screen-slider').slick({
            dots: true,
            arrows: false,
            // autoplay: true,
            autoplaySpeed: 2000,
            pauseOnHover: true,
            fade: true,
            speed: 500,
            infinite: true,
            cssEase: 'ease-in-out',

            responsive: [{
                    breakpoint: 1024,
                    settings: {
                        // autoHeight: true,
                        dots: false,
                    }
                },

            ]
        })

        adopFirstscreenSlider()
    }
    if ($('.slider-review').length) {
        $('.slider-review').slick({
            dots: false,
            arrows: true,
            autoplaySpeed: 2000,
            pauseOnHover: true,
            fade: true,
            speed: 500,
            infinite: true,
            cssEase: 'ease-in-out',
            appendArrows: '.slider-review__nav',
        })
    }




    if ($("[type='tel']").length) {
        $("[type='tel']").mask('+38(000)-00-00-000');
        $("[type='tel']").addClass('focus')
    }

    if ($('.date').length) {
        $('.date').mask('00/00/0000');
    }





    if ($('select').length) {
        $('select').wrap("<div class='select-wrap'></div>");
        $('select').niceSelect();
        $('.nice-select .list').addClass('scroll');
    }

    if ($('main.home').length) {
        $("header").addClass('before-transparent')
    }

    if ($('.exchange-aplication').length) {
        $('.exchange-info').addClass('has-commission')
    }

    $(".menu-item-has-children, .country-now").append(
        `<svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 3L7 9L13 3" stroke="#8E938C" stroke-width="2"/>
        </svg>
        `);




    $(".menu-item-has-children svg").click(function() {

        $(this).parent().toggleClass("open-menu");
        $(this).parent().siblings().removeClass("open-menu");

        if ($(document).width() < 1024) {
            $(this).siblings(".sub-menu").slideToggle();
        }
    });
    $(".country-now").click(function() {
        $(this).closest('.country').toggleClass("open-menu");
        $('.menu-item-has-children').removeClass('open-menu')
    });


    $(".lang-dropdown__top").on("click", function() {
        $(this).parent().toggleClass("open-dropdown");
    });

    $(document).click(function(e) {
        if (!$(e.target).hasClass("open-menu") &&
            $(e.target).parents(".open-menu").length === 0) {
            $(".menu-item-has-children").removeClass('open-menu');
        }
        if (!$(e.target).hasClass("open-dropdown") &&
            $(e.target).parents(".lang-dropdown").length === 0) {
            $(".lang-dropdown").removeClass('open-dropdown');
        }
        if (!$(e.target).hasClass("open-dropdown") &&
            $(e.target).parents(".lang-dropdown").length === 0) {
            $(".lang-dropdown").removeClass('open-dropdown');
        }
        if (!$(e.target).hasClass("open-dropdown") &&
            $(e.target).parents(".country").length === 0) {
            $(".country").removeClass('open-menu');
        }
    });


    $('.accordion').on('click', '.accordion-control', function() {
        $(this).toggleClass('active').next('.accordion-panel').not(':animated').slideToggle();
    });



    function selectIcons() {

        const selects = document.querySelectorAll('select');
        selects.forEach(item => {


            const attrArr = []


            const optionsList = item.querySelectorAll('option')
            const selectWrapp = item.closest('.select-wrap')
            const customSelect = selectWrapp.querySelectorAll('.nice-select li')


            optionsList.forEach(option => {
                const optionsDataIcon = option.getAttribute('data-icon')
                attrArr.push(optionsDataIcon)
            })

            for (var i = 0; i < customSelect.length; i++) {
                customSelect[i].setAttribute('style', 'background-image: url(' + attrArr[i] + ');');

            }

            customSelect.forEach(list => {
                list.addEventListener('click', () => {
                    const current = list.closest('.nice-select').querySelector('.current')
                    const checkItem = list.getAttribute('style')
                    current.setAttribute('style', checkItem)
                })
            })

            const selectTitle = selectWrapp.querySelector('.current')
            const selectedItem = selectWrapp.querySelector('.selected')
            const pathIcon = selectedItem.getAttribute('style')

            selectTitle.setAttribute('style', pathIcon)
        })
    }
    selectIcons();


    const mediaQuery = window.matchMedia('(min-width: 1025px)')
    // Check if the media query is true
    if (mediaQuery.matches) {
        $('.testimonials').each(function() {
            $(this).find('.comment:nth-child(even)').addClass('even')
            var even = $(this).find('.even')
            var secondCol = $(this).find('.second')
            even.appendTo(secondCol);
        });
    }

});


/**/
const mapUA = [{
    id: 1,
    region: "Kyiv",
    title: "Київськa область",
    cityes: [{
            city: "Київ",
            cwt: "пн-сб з 09:00 до 20:00",
            telephone: "<li><a href='tel:+380983580001'>+38 (098) 358-00-01</a></li><li><a href='tel:+380509740001'>+38 (050) 974-00-01</a></li>",
            address: "",
            link: 'range-of-services.html',
        },
        {
            city: "Бiла Церква",
            cwt: "пн-сб з 09:00 до 20:00",
            telephone: "<li><a href='tel:+380983580001'>+38 (098) 358-00-01</a></li><li><a href='tel:+380509740001'>+38 (050) 974-00-01</a></li>",
            address: "",
            link: 'range-of-services.html',
        },
    ],
},{
    id: 2,
    region: "Dnipropetrovsk",
    title: "Днiпропетровська область",
    cityes: [{
            city: "Днiпро",
            cwt: "пн-сб з 09:00 до 20:00",
            telephone: "<li><a href='tel:+380983580001'>+38 (098) 358-00-01</a></li><li><a href='tel:+380509740001'>+38 (050) 974-00-01</a></li>",
            address: "",
            link: 'range-of-services.html',
        },
        {
            city: "Кривий Рiг",
            cwt: "пн-сб з 09:00 до 20:00",
            telephone: "<li><a href='tel:+380983580001'>+38 (098) 358-00-01</a></li><li><a href='tel:+380509740001'>+38 (050) 974-00-01</a></li>",
            address: "",
            link: 'range-of-services.html',
        },
    ],
},{
    id: 3,
    region: "Odessa",
    title: "Одеська область",
    cityes: [{
            city: "Одеса",
            cwt: "пн-сб з 09:00 до 20:00",
            telephone: "<li><a href='tel:+380983580001'>+38 (098) 358-00-01</a></li><li><a href='tel:+380509740001'>+38 (050) 974-00-01</a></li>",
            address: "",
            link: 'range-of-services.html',
        },
    ],
},
{
    id: 4,
    region: "Lviv",
    title: "Львiвська область",
    cityes: [{
            city: "Львiв",
            cwt: "пн-сб з 09:00 до 20:00",
            telephone: "<li><a href='tel:+380983580001'>+38 (098) 358-00-01</a></li><li><a href='tel:+380509740001'>+38 (050) 974-00-01</a></li>",
            address: "",
            link: 'range-of-services.html',
        },
    ],
},
{
    id: 5,
    region: "Ivano-Frankivsk",
    title: "Івано-Франківська область",
    cityes: [{
            city: "Івано-Франківськ",
            cwt: "пн-сб з 09:00 до 20:00",
            telephone: "<li><a href='tel:+380983580001'>+38 (098) 358-00-01</a></li><li><a href='tel:+380509740001'>+38 (050) 974-00-01</a></li>",
            address: "",
            link: 'range-of-services.html',
        },
    ],
},
{
    id: 6,
    region: "Chernivtsi",
    title: "Чернівецька область",
    cityes: [{
            city: "Чернівці",
            cwt: "пн-сб з 09:00 до 20:00",
            telephone: "<li><a href='tel:+380983580001'>+38 (098) 358-00-01</a></li><li><a href='tel:+380509740001'>+38 (050) 974-00-01</a></li>",
            address: "",
            link: 'range-of-services.html',
        },
    ],
},
{
    id: 7,
    region: "Cherkasy",
    title: "Черкаська область",
    cityes: [
            {
            city: "Черкаси",
            cwt: "пн-сб з 09:00 до 20:00",
            telephone: "<li><a href='tel:+380983580001'>+38 (098) 358-00-01</a></li><li><a href='tel:+380509740001'>+38 (050) 974-00-01</a></li>",
            address: "",
            link: 'range-of-services.html',
            },
            {
            city: "Умань",
            cwt: "пн-сб з 09:00 до 20:00",
            telephone: "<li><a href='tel:+380983580001'>+38 (098) 358-00-01</a></li><li><a href='tel:+380509740001'>+38 (050) 974-00-01</a></li>",
            address: "",
            link: 'range-of-services.html',
        },
    ],
},
{
    id: 8,
    region: "Vinnytsia",
    title: "Вінницька область",
    cityes: [{
            city: "Вінниця",
            cwt: "пн-сб з 09:00 до 20:00",
            telephone: "<li><a href='tel:+380983580001'>+38 (098) 358-00-01</a></li><li><a href='tel:+380509740001'>+38 (050) 974-00-01</a></li>",
            address: "",
            link: 'range-of-services.html',
        },
    ],
},
{
    id: 9,
    region: "Khmelnytskyi",
    title: "Хмельницька область",
    cityes: [{
            city: "Хмельницький",
            cwt: "пн-сб з 09:00 до 20:00",
            telephone: "<li><a href='tel:+380983580001'>+38 (098) 358-00-01</a></li><li><a href='tel:+380509740001'>+38 (050) 974-00-01</a></li>",
            address: "",
            link: 'range-of-services.html',
        },
        {
            city: "Кам‘янець-Подільський",
            cwt: "пн-сб з 09:00 до 20:00",
            telephone: "<li><a href='tel:+380983580001'>+38 (098) 358-00-01</a></li><li><a href='tel:+380509740001'>+38 (050) 974-00-01</a></li>",
            address: "",
            link: 'range-of-services.html',
        },
    ],
},
{
    id: 10,
    region: "Lutsk",
    title: "Волинська область",
    cityes: [{
            city: "Луцьк",
            cwt: "пн-сб з 09:00 до 20:00",
            telephone: "<li><a href='tel:+380983580001'>+38 (098) 358-00-01</a></li><li><a href='tel:+380509740001'>+38 (050) 974-00-01</a></li>",
            address: "",
            link: 'range-of-services.html',
        },
        {
            city: "Ковель",
            cwt: "пн-сб з 09:00 до 20:00",
            telephone: "<li><a href='tel:+380983580001'>+38 (098) 358-00-01</a></li><li><a href='tel:+380509740001'>+38 (050) 974-00-01</a></li>",
            address: "",
            link: 'range-of-services.html',
        },
    ],
},
{
    id: 11,
    region: "Rivne",
    title: "Рівненська область",
    cityes: [{
            city: "Рівне",
            cwt: "пн-сб з 09:00 до 20:00",
            telephone: "<li><a href='tel:+380983580001'>+38 (098) 358-00-01</a></li><li><a href='tel:+380509740001'>+38 (050) 974-00-01</a></li>",
            address: "",
            link: 'range-of-services.html',
        },
    ],
},
{
    id: 12,
    region: "Kropyvnytskyi",
    title: "Кіровоградська область",
    cityes: [{
            city: "Кропивницький",
            cwt: "пн-сб з 09:00 до 20:00",
            telephone: "<li><a href='tel:+380983580001'>+38 (098) 358-00-01</a></li><li><a href='tel:+380509740001'>+38 (050) 974-00-01</a></li>",
            address: "",
            link: 'range-of-services.html',
        },
    ],
},
{
    id: 13,
    region: "Uzhhorod",
    title: "Закарпатська область",
    cityes: [{
            city: "Ужгород",
            cwt: "пн-сб з 09:00 до 20:00",
            telephone: "<li><a href='tel:+380983580001'>+38 (098) 358-00-01</a></li><li><a href='tel:+380509740001'>+38 (050) 974-00-01</a></li>",
            address: "",
            link: 'range-of-services.html',
        },
        {
            city: "Мукачево",
            cwt: "пн-сб з 09:00 до 20:00",
            telephone: "<li><a href='tel:+380983580001'>+38 (098) 358-00-01</a></li><li><a href='tel:+380509740001'>+38 (050) 974-00-01</a></li>",
            address: "",
            link: 'range-of-services.html',
        },
        {
            city: "Хуст",
            cwt: "пн-сб з 09:00 до 20:00",
            telephone: "<li><a href='tel:+380983580001'>+38 (098) 358-00-01</a></li><li><a href='tel:+380509740001'>+38 (050) 974-00-01</a></li>",
            address: "",
            link: 'range-of-services.html',
        },
        {
            city: "Тячев",
            cwt: "пн-сб з 09:00 до 20:00",
            telephone: "<li><a href='tel:+380983580001'>+38 (098) 358-00-01</a></li><li><a href='tel:+380509740001'>+38 (050) 974-00-01</a></li>",
            address: "",
            link: 'range-of-services.html',
        },
        {
            city: "Iршава",
            cwt: "пн-сб з 09:00 до 20:00",
            telephone: "<li><a href='tel:+380983580001'>+38 (098) 358-00-01</a></li><li><a href='tel:+380509740001'>+38 (050) 974-00-01</a></li>",
            address: "",
            link: 'range-of-services.html',
        },
        {
            city: "Рахiв",
            cwt: "пн-сб з 09:00 до 20:00",
            telephone: "<li><a href='tel:+380983580001'>+38 (098) 358-00-01</a></li><li><a href='tel:+380509740001'>+38 (050) 974-00-01</a></li>",
            address: "",
            link: 'range-of-services.html',
        },
        {
            city: "Виноградiв",
            cwt: "пн-сб з 09:00 до 20:00",
            telephone: "<li><a href='tel:+380983580001'>+38 (098) 358-00-01</a></li><li><a href='tel:+380509740001'>+38 (050) 974-00-01</a></li>",
            address: "",
            link: 'range-of-services.html',
        },
       
    ],
},
{
    id: 14,
    region: "Poltava",
    title: "Полтавська область",
    cityes: [{
            city: "Полтава",
            cwt: "пн-сб з 09:00 до 20:00",
            telephone: "<li><a href='tel:+380983580001'>+38 (098) 358-00-01</a></li><li><a href='tel:+380509740001'>+38 (050) 974-00-01</a></li>",
            address: "",
            link: 'range-of-services.html',
        },
        {
            city: "Кременчук",
            cwt: "пн-сб з 09:00 до 20:00",
            telephone: "<li><a href='tel:+380983580001'>+38 (098) 358-00-01</a></li><li><a href='tel:+380509740001'>+38 (050) 974-00-01</a></li>",
            address: "",
            link: 'range-of-services.html',
        },
    ],
},
{
    id: 15,
    region: "Ternopil",
    title: "Тернопільська область",
    cityes: [{
            city: "Тернопіль",
            cwt: "пн-сб з 09:00 до 20:00",
            telephone: "<li><a href='tel:+380983580001'>+38 (098) 358-00-01</a></li><li><a href='tel:+380509740001'>+38 (050) 974-00-01</a></li>",
            address: "",
            link: 'range-of-services.html',
        },
       
    ],
},
{
    id: 16,
    region: "Zhytomyr",
    title: "Житомирська область",
    cityes: [{
            city: "Житомир",
            cwt: "пн-сб з 09:00 до 20:00",
            telephone: "<li><a href='tel:+380983580001'>+38 (098) 358-00-01</a></li><li><a href='tel:+380509740001'>+38 (050) 974-00-01</a></li>",
            address: "",
            link: 'range-of-services.html',
        },
       
    ],
},
{ 
    id: 17,
    region: "Mykolaiv",
    title: "Миколаївська область",
    cityes: [{
            city: "Миколаїв",
            cwt: "пн-сб з 09:00 до 20:00",
            telephone: "<li><a href='tel:+380983580001'>+38 (098) 358-00-01</a></li><li><a href='tel:+380509740001'>+38 (050) 974-00-01</a></li>",
            address: "",
            link: 'range-of-services.html',
        },
       
    ],
},
{ 
    id: 18,
    region: "Chernihiv",
    title: "Чернігівська область",
    cityes: [{
            city: "Чернігів",
            cwt: "пн-сб з 09:00 до 20:00",
            telephone: "<li><a href='tel:+380983580001'>+38 (098) 358-00-01</a></li><li><a href='tel:+380509740001'>+38 (050) 974-00-01</a></li>",
            address: "",
            link: 'range-of-services.html',
        },
       
    ],
},
{ 
    id: 19,
    region: "Sumy",
    title: "Сумська область",
    cityes: [{
            city: "Суми",
            cwt: "пн-сб з 09:00 до 20:00",
            telephone: "<li><a href='tel:+380983580001'>+38 (098) 358-00-01</a></li><li><a href='tel:+380509740001'>+38 (050) 974-00-01</a></li>",
            address: "",
            link: 'range-of-services.html',
        },
       
    ],
},
{ 
    id: 20,
    region: "Zaporizhzhia",
    title: "Запорiзька область",
    cityes: [{
            city: "Запорiжжя",
            cwt: "пн-сб з 09:00 до 20:00",
            telephone: "<li><a href='tel:+380983580001'>+38 (098) 358-00-01</a></li><li><a href='tel:+380509740001'>+38 (050) 974-00-01</a></li>",
            address: "",
            link: 'range-of-services.html',
        },
       
    ],
},
{ 
    id: 21,
    region: "Donetsk",
    title: "Донецька область",
    cityes: [{
            city: "Краматорськ",
            cwt: "пн-сб з 09:00 до 20:00",
            telephone: "<li><a href='tel:+380983580001'>+38 (098) 358-00-01</a></li><li><a href='tel:+380509740001'>+38 (050) 974-00-01</a></li>",
            address: "",
            link: 'range-of-services.html',
        },
        {
            city: "Дружківка",
            cwt: "пн-сб з 09:00 до 20:00",
            telephone: "<li><a href='tel:+380983580001'>+38 (098) 358-00-01</a></li><li><a href='tel:+380509740001'>+38 (050) 974-00-01</a></li>",
            address: "",
            link: 'range-of-services.html',
        },
        {
            city: "Константинівка",
            cwt: "пн-сб з 09:00 до 20:00",
            telephone: "<li><a href='tel:+380983580001'>+38 (098) 358-00-01</a></li><li><a href='tel:+380509740001'>+38 (050) 974-00-01</a></li>",
            address: "",
            link: 'range-of-services.html',
        },
        {
            city: "Покровськ",
            cwt: "пн-сб з 09:00 до 20:00",
            telephone: "<li><a href='tel:+380983580001'>+38 (098) 358-00-01</a></li><li><a href='tel:+380509740001'>+38 (050) 974-00-01</a></li>",
            address: "",
            link: 'range-of-services.html',
        },

    ],
},
{ 
    id: 20,
    region: "Kharkiv",
    title: "Харківська область",
    cityes: [{
            city: "Харькiв",
            cwt: "пн-сб з 09:00 до 20:00",
            telephone: "<li><a href='tel:+380983580001'>+38 (098) 358-00-01</a></li><li><a href='tel:+380509740001'>+38 (050) 974-00-01</a></li>",
            address: "",
            link: 'range-of-services.html',
        },
       
    ],
},
{ 
    id: 21,
    region: "Luhansk",
    title: "⚒🏛⚒ Луганськ, чекаємо на повернення! ",
    cityes: [{
            city: "",
            cwt: "Слава Україні! Слава ЗСУ!",
            telephone: "",
            address: "",
            link: 'range-of-services.html',
        },
       
    ],
},
{ 
    id: 22,
    region: "Kherson",
    title: "🍉Херсон, чекаємо на повернення! ",
    cityes: [{
            city: "",
            cwt: "Слава Україні! Слава ЗСУ!",
            telephone: "",
            address: "",
            link: 'range-of-services.html',
        },
       
    ],
},
{ 
    id: 23,
    region: "Simferopol",
    title: "🏖️Крим, чекаємо на повернення! ",
    cityes: [{
            city: "",
            cwt: "Слава Україні! Слава ЗСУ!",
            telephone: "",
            address: "",
            link: 'range-of-services.html',
        },
       
    ],
},
]

window.addEventListener('load', function() {
    document.querySelector('.map-ua') ? installMap() : null;

    function installMap() {
        const regionPath = document.querySelectorAll('.region');
        const regionTitle = document.querySelector('.region-title')
        const regionList = document.querySelector('.region-list')

        document.querySelector('#Kyiv').classList.add('active')


        function clearActive() {
            regionPath.forEach(item => {
                item.classList.remove('active')
            })
        }

        let cityInfo = [{title: "Київська область",}];

        const renderTitle = (region) => {
            const title = region.map(region =>{
                return (`${region.title}`)
            }).join("")

            regionTitle.innerHTML = title
        }
        renderTitle(cityInfo);


        regionPath.forEach(item => {
            item.addEventListener('click', (event) => {
                clearActive();
                item.classList.add('active')
                let thisCity = item.getAttribute('id')
                // console.log(thisId);
                // let thisCity = event.target.id;
                let region = mapUA.find(obj => obj.region === thisCity);
               
                let cityes = region.cityes 
                console.log(cityes);

                cityInfo.length = 0;
                cityInfo.push(region)
                renderTitle(cityInfo)
                
                const renderInfo = (cityItemTemplate) => {
                    const regionInformation = cityItemTemplate.map(item =>{
                         return (`
                            <div class="region-item">
                                <div class="region-item__title">${item.city}</div>
                                <div class="region-item__cwt">${item.cwt}</div>
                                <div class="region-item__address">${item.address}</div>
                                <ul class="region-item__phone">
                                    ${item.telephone}
                                </ul>
                                <a href="${item.link}" class="btn btn-secondary">Перейти</a>
                            </div>
                        `)
                    }).join("")
        
                    regionList.innerHTML = regionInformation
                }
                renderInfo(cityes)
            })
        })
    }
})


/*tab*/

const installTabs = () => {
    // Получаем все элементы кнопок и контента
    const tabButtons = document.querySelectorAll(".tab-button");
    const tabContents = document.querySelectorAll(".tab-content");

    const removeActiveBtn = () => tabButtons.forEach(btn => btn.classList.remove("active"));
    const removeActiveContent = () => tabContents.forEach(content => content.classList.remove("active"));

    // Функция, которая будет вызываться при клике на кнопку
    const onTabClick = (event) => {
        // Удаляем класс "active" со всех кнопок и контента
        removeActiveBtn();
        removeActiveContent();

        // Получаем id таба, который нужно показать
        const getTabId = event.target.getAttribute("data-tab");
        console.log(getTabId);

        //тут  мы получаем data-tab id кнопки и добавляем класс "active" к кнопке
        const tabButton = document.querySelector('[data-tab="' + getTabId + '"]');
        tabButton.classList.add("active");
    
        // и контенту таба
        const tabContent = document.getElementById(getTabId);
        tabContent.classList.add("active");
    }


    // Добавляем обработчик клика для каждой кнопки
    tabButtons.forEach(btn => {
        btn.addEventListener('click', onTabClick)
    })

    tabButtons.forEach(button => {
        button.addEventListener('click', ()=>{
            // Получаем id таба, который нужно показать
                const getTabId = event.target.getAttribute("data-tab");
               

        })
    })
}

document.querySelector('.tabs') ? installTabs() : null;