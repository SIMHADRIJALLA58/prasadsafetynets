/*=========================================
  AOS INITIALIZATION
=========================================*/
console.log("JavaScript is working!");
AOS.init({
    duration: 1000,
    once: true,
    easing: "ease-in-out"
});
    
/*=========================================
  MOBILE MENU TOGGLE
=========================================*/

const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("active");
    menuToggle.classList.toggle("active");
});

/*=========================================
  CLOSE MENU WHEN CLICKING LINKS
=========================================*/

// const navLinks = document.querySelectorAll(".nav-links a");

// navLinks.forEach(link => {
//     link.addEventListener("click", () => {
//         navbar.classList.remove("active");
//         menuToggle.classList.remove("active");
//     });
// });


/*=========================================
  CLOSE MENU WHEN CLICKING NORMAL LINKS
=========================================*/

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {

    link.addEventListener("click", (e) => {

        /* Don't close menu for dropdown buttons */
        if (link.parentElement.classList.contains("dropdown")) {
            return;
        }

        navbar.classList.remove("active");
        menuToggle.classList.remove("active");

    });

});


/*=========================================
  MOBILE DROPDOWNS
=========================================*/

document.querySelectorAll(".dropdown > a").forEach(dropdownLink => {

    dropdownLink.addEventListener("click", function(e) {

        if (window.innerWidth <= 992) {

            e.preventDefault();
            e.stopPropagation();

            const dropdown = this.parentElement;

            /* Close other dropdowns */
            document.querySelectorAll(".dropdown").forEach(item => {

                if (item !== dropdown) {
                    item.classList.remove("active");
                }

            });

            /* Open / close current dropdown */
            dropdown.classList.toggle("active");

        }

    });

});

/*=========================================
  STICKY HEADER
=========================================*/

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});

/*=========================================
  ACTIVE MENU LINK
=========================================*/

const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    links.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

/*=========================================
  SMOOTH SCROLL
=========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            window.scrollTo({

                top: target.offsetTop - 80,

                behavior: "smooth"

            });

        }

    });

});


const counters = document.querySelectorAll(".counter");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const counter = entry.target;
            const target = +counter.dataset.target;

            let count = 0;

            const speed = target / 100;

            const updateCounter = () => {

                count += speed;

                if (count < target) {

                    if (target === 100) {
                        counter.innerHTML = Math.ceil(count) + "%";
                    }
                    else if (target === 24) {
                        counter.innerHTML = Math.ceil(count) + "/7";
                    }
                    else {
                        counter.innerHTML = Math.ceil(count) + "+";
                    }

                    requestAnimationFrame(updateCounter);

                } else {

                    if (target === 100) {
                        counter.innerHTML = "100%";
                    }
                    else if (target === 24) {
                        counter.innerHTML = "24/7";
                    }
                    else {
                        counter.innerHTML = target + "+";
                    }

                }

            };

            updateCounter();

            observer.unobserve(counter);

        }

    });

}, {
    threshold: 0.5
});

counters.forEach(counter => {
    observer.observe(counter);
});




const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", reveal);

function reveal(){

    reveals.forEach(item=>{

        const top = item.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){

            item.classList.add("active");

        }

    });

}

reveal();












/*=========================================
        WHATSAPP QUOTE FORM
=========================================*/

// document
// .getElementById("whatsappForm")
// .addEventListener("submit",function(e){

// e.preventDefault();

// const name=document.getElementById("name").value;
// const phone=document.getElementById("phone").value;
// const service=document.getElementById("service").value;
// const location=document.getElementById("location").value;
// const message=document.getElementById("message").value;

// const whatsappMessage=

// `*New Quote Request*

// 👤 Name : ${name}

// 📞 Phone : ${phone}

// 🛠 Service : ${service}

// 📍 Location : ${location}

// 📝 Requirement :
// ${message}

// Sent from prasad Safety Nets Website`;

// const url=

// `https://wa.me/919876543210?text=${encodeURIComponent(whatsappMessage)}`;

// window.open(url,"_blank");

// });





const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

let current = 0;

function showSlide(index){

    slides.forEach(slide=>slide.classList.remove("active"));
    dots.forEach(dot=>dot.classList.remove("active"));

    slides[index].classList.add("active");
    dots[index].classList.add("active");

}

function nextSlide(){

    current++;

    if(current>=slides.length){

        current=0;

    }

    showSlide(current);

}

setInterval(nextSlide,4000);

dots.forEach((dot,index)=>{

    dot.addEventListener("click",()=>{

        current=index;

        showSlide(current);

    });

});


AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    once: true,
    offset: 100
});





/*=========================================
        GALLERY FILTER
=========================================*/

// const filterButtons = document.querySelectorAll(".filter-btn");
// const galleryItems = document.querySelectorAll(".gallery-item");

// filterButtons.forEach(button => {

//     button.addEventListener("click", () => {

//         filterButtons.forEach(btn => btn.classList.remove("active"));

//         button.classList.add("active");

//         const filter = button.getAttribute("data-filter");

//         galleryItems.forEach(item => {

//             if (filter === "all" || item.classList.contains(filter)) {

//                 item.style.display = "block";

//                 setTimeout(() => {

//                     item.style.opacity = "1";
//                     item.style.transform = "scale(1)";

//                 },100);

//             } else {

//                 item.style.opacity = "0";
//                 item.style.transform = "scale(.9)";

//                 setTimeout(() => {

//                     item.style.display = "none";

//                 },300);

//             }

//         });

//     });

// });

/*=========================================
        CREATE LIGHTBOX
=========================================*/

// const lightbox = document.createElement("div");

// lightbox.className = "gallery-lightbox";

// lightbox.innerHTML = `

// <div class="lightbox-content">

//     <span class="close-lightbox">&times;</span>

//     <img src="" alt="Gallery Image">

//     <button class="prev-btn">&#10094;</button>

//     <button class="next-btn">&#10095;</button>

// </div>

// `;

// document.body.appendChild(lightbox);

// const lightboxImage = lightbox.querySelector("img");

// const closeBtn = lightbox.querySelector(".close-lightbox");

// const prevBtn = lightbox.querySelector(".prev-btn");

// const nextBtn = lightbox.querySelector(".next-btn");

/*=========================================
        IMAGE ARRAY
=========================================*/

let currentIndex = 0;

const images = [...galleryItems].map(item => {

    return item.querySelector("img").src;

});

/*=========================================
        OPEN
=========================================*/

galleryItems.forEach((item,index)=>{

    item.addEventListener("click",()=>{

        currentIndex = index;

        lightboxImage.src = images[currentIndex];

        lightbox.classList.add("show");

        document.body.style.overflow = "hidden";

    });

});

/*=========================================
        CLOSE
=========================================*/

closeBtn.addEventListener("click",()=>{

    lightbox.classList.remove("show");

    document.body.style.overflow="auto";

});

/*=========================================
        NEXT
=========================================*/

nextBtn.addEventListener("click",()=>{

    currentIndex++;

    if(currentIndex >= images.length){

        currentIndex = 0;

    }

    lightboxImage.src = images[currentIndex];

});

/*=========================================
        PREVIOUS
=========================================*/

prevBtn.addEventListener("click",()=>{

    currentIndex--;

    if(currentIndex < 0){

        currentIndex = images.length - 1;

    }

    lightboxImage.src = images[currentIndex];

});

/*=========================================
        ESC KEY
=========================================*/

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        lightbox.classList.remove("show");

        document.body.style.overflow="auto";

    }

});

/*=========================================
        CLICK OUTSIDE
=========================================*/

lightbox.addEventListener("click",(e)=>{

    if(e.target===lightbox){

        lightbox.classList.remove("show");

        document.body.style.overflow="auto";

    }

});



/*=========================================
            FAQ ACCORDION
=========================================*/

// const faqItems = document.querySelectorAll(".faq-item");

// faqItems.forEach((item) => {

//     const question = item.querySelector(".faq-question");

//     question.addEventListener("click", () => {

//         faqItems.forEach((faq) => {

//             if (faq !== item) {

//                 faq.classList.remove("active");

//             }

//         });

//         item.classList.toggle("active");

//     });

// });







/*=========================================
        COVERAGE SECTION
=========================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*=====================================
            COUNTER ANIMATION
    =====================================*/

    const counters = document.querySelectorAll(".mini-stat h3, .coverage-card-content h3");

    const counterObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                const counter = entry.target;

                const target = parseInt(counter.innerText.replace(/\D/g, ""));

                let count = 0;

                const speed = target / 120;

                const updateCounter = () => {

                    if (count < target) {

                        count += speed;

                        counter.innerText = Math.ceil(count) + "+";

                        requestAnimationFrame(updateCounter);

                    } else {

                        counter.innerText = target + "+";

                    }

                };

                updateCounter();

                counterObserver.unobserve(counter);

            }

        });

    }, {

        threshold: 0.6

    });

    counters.forEach(counter => {

        counterObserver.observe(counter);

    });



    /*=====================================
            PARALLAX IMAGE
    =====================================*/

    const image = document.querySelector(".coverage-image");

    if(image){

        image.addEventListener("mousemove", (e)=>{

            const rect = image.getBoundingClientRect();

            const x = e.clientX - rect.left;

            const y = e.clientY - rect.top;

            const rotateY = ((x / rect.width) - 0.5) * 10;

            const rotateX = ((y / rect.height) - 0.5) * -10;

            image.style.transform =
            `perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             scale(1.03)`;

        });

        image.addEventListener("mouseleave",()=>{

            image.style.transform =
            "perspective(1000px) rotateX(0) rotateY(0) scale(1)";

        });

    }



    /*=====================================
            FLOATING CARD
    =====================================*/

    const card = document.querySelector(".coverage-card");

    if(card){

        let direction = 1;

        setInterval(()=>{

            card.style.transform = `translateY(${direction * -10}px)`;

            direction *= -1;

        },2000);

    }

});



document.querySelectorAll(".footer-column,.footer-about").forEach(item=>{

item.addEventListener("mouseenter",()=>{

    item.style.transform="translateY(-8px)";

});


item.addEventListener("mouseleave",()=>{

    item.style.transform="translateY(0)";

});

});





const form = document.getElementById("psnWhatsappForm");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const fullName = form.querySelector('input[type="text"]').value.trim();
    const mobile = form.querySelector('input[type="tel"]').value.trim();
    const service = form.querySelector("select").value;
    const location = form.querySelectorAll('input[type="text"]')[1].value.trim();
    const requirement = form.querySelector("textarea").value.trim();

    // Validation

    if (
        fullName === "" ||
        mobile === "" ||
        service === "Choose Service" ||
        location === "" ||
        requirement === ""
    ) {
        alert("Please fill all the fields.");
        return;
    }

    if (!/^[6-9]\d{9}$/.test(mobile)) {
        alert("Please enter a valid 10-digit mobile number.");
        return;
    }

    // Your WhatsApp Number
    const whatsappNumber = "919876543210"; // Change this

    const message =
`*🛡️ New Website Enquiry*

👤 *Name:* ${fullName}

📱 *Mobile:* ${mobile}

🛠️ *Service:* ${service}

📍 *Location:* ${location}

📝 *Requirement:*
${requirement}

-------------------------
Prasad Safety Nets Website`;

    const url =
`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");

});



