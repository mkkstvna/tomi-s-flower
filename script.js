const translations = {
    "kk": {
        "title": "Tomi",
        "subtitle": "Жаңа гүлдер — жаңа сезімдер",
        "order-btn": "Catalog",
        "nav-flowers": "Home",
        "nav-about": "Бестселлерлер",
        "nav-questions": "Сұрақтар",
        "nav-contacts": "Байланыстар",
        "mission-text": "Біздің миссия",
        "our-text": "Біздің миссиямыз — әрбір сәтке сұлулық, қуаныш және жылулық әкелетін керемет гүлді әшекейлер жасау.",
        "best": "Бестселлерлер",
        "frequent": "Жиі қойылатын сұрақтар",
        "q1": "ГҮЛДЕРДІ ҚАЛАЙ ТАПСЫРУҒА БОЛАДЫ",
        "a1": "Букетті таңдаңыз, оны суретке түсіріп, WhatsApp-қа жіберіңіз.",
        "q2": "ТАПСЫРЫС ҮШІН ҚАЛАЙ ТӨЛЕЙМІН",
        "a2": "Сіз қолма-қол ақша немесе Kaspi арқылы төлей аласыз.",
        "q3": "ГҮЛДЕРДІ ЖЕТКІЗУ ҚҰНЫ ҚАНША",
        "a3": "Жеткізу аймағына байланысты құны 3000-5000 теңге болады.",
        "bento": "",
        "teddy": "",
        "sweet": "Sweet pink cloud"
        
        
    
    },
    "ru": {
        "title": "Tomi",
        "subtitle": "Свежие цветы — свежие чувства",
        "order-btn": "Catalog",
        "nav-flowers": "Home",
        "nav-about": "Бестселлеры",
        "nav-questions": "Вопросы",
        "nav-contacts": "Контакты",
        "mission-text": "Наша миссия",
        "our-text": "Наша миссия — создавать потрясающие цветочные композиции, которые приносят красоту, радость и тепло в каждый момент.",
        "best": "Бестселлеры",
        "frequent": "Часто задаваемые вопросы",
        "q1": "КАК ЗАКАЗАТЬ ЦВЕТЫ",
        "a1": "Выберите букет, сделайте снимок и отправьте его в WhatsApp.",
        "q2": "КАК ОПЛАТИТЬ ЗАКАЗ",
        "a2": "Вы можете оплатить наличными или через Kaspi.",
        "q3": "СКОЛЬКО СТОИТ ДОСТАВКА ЦВЕТОВ",
        "a3": "Стоимость зависит от зоны доставки. Обычно 3000-5000 тенге.",
        "bento": "Счастье в каждом кусочке",
        "teddy": "Мягкое комбо с цветами",
        "sweet": "Розовое облако"
    },
    "en": {
        "title": "Tomi's Flower Shop",
        "subtitle": "Fresh Flowers, Fresh Feelings",
        "order-btn": "Catalog",
        "nav-flowers": "Home",
        "nav-about": "Bestsellers",
        "nav-questions": "Questions",
        "nav-contacts": "Contacts",
        "mission-text": "Our Mission",
        "our-text": "Our mission is to create stunning floral arrangements that bring beauty, joy, <br> and warmth to every occasion.",
        "best": "Bestsellers",
        "frequent": "Frequent Questions",
        "q1": "HOW TO ORDER FLOWERS",
        "a1": "Select a bouquet, screen it, and send to WhatsApp.",
        "q2": "HOW TO PAY FOR THE ORDER",
        "a2": "You can pay by cash, or Kaspi.",
        "q3": "HOW MUCH DOES FLOWER DELIVERY COST",
        "a3": "The cost depends on the delivery zone. Usually 3000-5000 tenge.",
        "bento": "Happiness in every piece",
        "teddy": "A soft combo with flowers",
        "sweet": "Sweet pink cloud"
    }
};

// This function is triggered by clicking on the language buttons
function changeLanguage(language) {
    // Update text content for title, subtitle, and other elements
    document.getElementById("title").textContent = translations[language]["title"];
    document.getElementById("subtitle").textContent = translations[language]["subtitle"];
    document.getElementById("order-btn").textContent = translations[language]["order-btn"];

    // Update navigation menu links
    document.getElementById("nav-flowers").textContent = translations[language]["nav-flowers"];
    document.getElementById("nav-about").textContent = translations[language]["nav-about"];
    document.getElementById("nav-questions").textContent = translations[language]["nav-questions"];
    document.getElementById("nav-contacts").textContent = translations[language]["nav-contacts"];

    // Update mission section text
    document.getElementById("mission-text").textContent = translations[language]["mission-text"];
    document.getElementById("our-text").innerHTML = translations[language]["our-text"]; // Allows <br> to work

    document.getElementById("best").innerHTML = translations[language]["best"]; // Allows <br> to work

    document.getElementById("frequent").textContent = translations[language]["frequent"];
    document.getElementById("q1").textContent = translations[language]["q1"];
    document.getElementById("a1").textContent = translations[language]["a1"];
    document.getElementById("q2").textContent = translations[language]["q2"];
    document.getElementById("a2").textContent = translations[language]["a2"];
    document.getElementById("q3").textContent = translations[language]["q3"];
    document.getElementById("a3").textContent = translations[language]["a3"];
   
}



document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const menuLinks = document.querySelectorAll(".nav-links a");

    function updateActiveLink() {
        let scrollPosition = window.scrollY + 100; // Offset to detect section early

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const sectionId = section.getAttribute("id");

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                // Remove 'active' class from all menu links
                menuLinks.forEach(link => link.classList.remove("active"));

                // Add 'active' class to the corresponding link
                document.querySelector(`.nav-links a[href="#${sectionId}"]`).classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", updateActiveLink);
    updateActiveLink(); // Run on page load in case user refreshes mid-scroll
});


let index = 0;
function moveSlide(step) {
    const slides = document.querySelector(".carousel");
    index = (index + step + 8) % 8;
    slides.style.transform = `translateX(-${index * 100}%)`;
}



// Intersection Observer to show text when visible
const slides = document.querySelectorAll(".slide");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const text = entry.target.querySelector(".slide-text");
        if (entry.isIntersecting) {
            text.classList.add("show");
        } else {
            text.classList.remove("show");
        }
    });
}, { threshold: 0.5 });

slides.forEach(slide => observer.observe(slide));

AOS.init(); 


function toggleAnswer(index) {
    const answers = document.querySelectorAll('.answer');
    const icons = document.querySelectorAll('.plus-minus');

    if (answers[index].style.display === 'block') {
        answers[index].style.display = 'none';
        icons[index].textContent = '+';
    } else {
        answers.forEach(ans => ans.style.display = 'none');
        icons.forEach(icon => icon.textContent = '+');

        answers[index].style.display = 'block';
        icons[index].textContent = '-';
    }
}


document.querySelector('.logo').addEventListener('click', function() {
    document.querySelector('.menu').classList.toggle('open');
});
