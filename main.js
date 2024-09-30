/*Landing page*/
const paralax_el = document.querySelectorAll(".paralax");

/*mouse paralax - based on where the cursor is*/
let xValue = 0, yValue = 0;
window.addEventListener("mousemove", (e) => {
    xValue = e.clientX - window.innerWidth / 2;
    yValue = e.clientY - window.innerHeight / 2;

    paralax_el.forEach((el) => {
        let speedx = el.dataset.speedx;
        let speedy = el.dataset.speedy;
        el.style.transform = `translateX(calc(-50% + ${
            -xValue * speedx
        }px)) translateY(calc(-50% + ${
            yValue * speedy
        }px))`;
    });
});

/*scroll paralax - to displace the images on y-axis(vertically)*/
window.addEventListener(("scroll"),()=>{
    document.querySelector(".Sun").style.marginTop = `${window.scrollY * 1.2}px`
    document.querySelector(".Clouds").style.marginTop = `${window.scrollY * .9}px`
    document.querySelector(".Layer2").style.marginTop = `${window.scrollY * .8}px`
    document.querySelector(".Layer3").style.marginTop = `${window.scrollY * .5}px`
    document.querySelector(".Layer4").style.marginTop = `${window.scrollY * .3}px`
    document.querySelector(".Layer5").style.marginTop = `${window.scrollY * .1}px`
    document.querySelector(".Layer6").style.marginTop = `-${window.scrollY * .1}px`
})


/*----------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
/*=======SIDE BAR scrolling=======*/
/*SIDEBAR Scroll - CANCELED
window.addEventListener('scroll', function() {
    var fixedDiv = document.getElementById('fixedDiv');
    var page2 = document.getElementById('page2');
    
    // Calculate the scroll position to determine when to fix the div
    var scrollPosition = window.scrollY || window.pageYOffset;
    var page2Offset = page2.offsetTop;

    // Check if the scroll position is past the top of page2
    if (scrollPosition > page2Offset) {
        fixedDiv.style.display = 'block';
    } else {
        fixedDiv.style.display = 'none';
    }
});

*/



/*=============== SHOW SIDEBAR ===============*/


/*===== SIDEBAR SHOW =====*/
/* Validate If Constant Exists */


/*===== SIDEBAR HIDDEN =====*/
/* Validate If Constant Exists */


/*=============== SKILLS TABS ===============*/
const tabs = document.querySelectorAll('[data-target]'),
tabContent = document.querySelectorAll('[data-content]')

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            const target = document.querySelector(tab.dataset.target)

            tabContent.forEach(tabContent => {
                tabContent.classList.remove("skills_active")
            })

            target.classList.add('skills_active')



            tabs.forEach(tab => {
                tab.classList.remove("skills_active")
            })

            tab.classList.add('skills_active')
        })
    });


//skills description



/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixerPortfolio = mixitup('.work_container', {
    selectors: {
        target: '.work_card'
    },
    animation: {
        duration: 300
    }
})


/*==============Certifications===============*/
//mixitup part
let mixerCertification = mixitup('.cert_container', {
    selectors: {
        target: '.cert_card'
    },
    animation: {
        duration: 300
    }
})
//main part
const linkCert = document.querySelectorAll('.cert_header')

function activeCert() {
    linkCert.forEach(l=> l.classList.remove('active-cert'))
    this.classList.add('active-cert')
}

linkCert.forEach(l=> l.addEventListener("click", activeCert))

//popup part
document.addEventListener("click", (e) => {
    if(e.target.classList.contains("cert_button")) {
        toggleCertificatePopup();
        certificateItemDetails(e.target.parentElement);
    }
})

function toggleCertificatePopup() {
    document.querySelector(".certificate_popup").classList.toggle("open");
}

document.querySelector(".certificate_popup-close").addEventListener("click", toggleCertificatePopup)

function certificateItemDetails(certificateItem) {
    document.querySelector(".cert_thumbnail img").src = certificateItem.querySelector(".cert_img").src;
    document.querySelector(".certificate_popup h3").innerHTML = certificateItem.querySelector(".cert_title").innerHTML;
    document.querySelector(".certificate_popup h3").dataset.heading = certificateItem.querySelector(".cert_title").dataset.heading;
}




/*===== Link Active Work =================================================================================================*/
const linkWork = document.querySelectorAll('.work_item')

function activeWork() {
    linkWork.forEach(l=> l.classList.remove('active-work'))
    this.classList.add('active-work')
}

linkWork.forEach(l=> l.addEventListener("click", activeWork))



/*===== Work Popup =====*/
document.addEventListener("click", (e) => {
    if(e.target.classList.contains("work_button")) {
        togglePortfolioPopup();
        portfolioItemDetails(e.target.parentElement);
    }
})

function togglePortfolioPopup() {
    document.querySelector(".portfolio_popup").classList.toggle("open");
}

document.querySelector(".portfolio_popup-close").addEventListener("click", togglePortfolioPopup)

function portfolioItemDetails(portfolioItem) {
    document.querySelector(".pp_thumbnail model-viewer").src = portfolioItem.querySelector(".work_img").src;
    document.querySelector(".portfolio_popup-subtitle span").innerHTML = portfolioItem.querySelector(".work_title").innerHTML;
    document.querySelector(".portfolio_popup-body").innerHTML = portfolioItem.querySelector(".portfolio_item-details").innerHTML;

    document.querySelector(".portfolio_popup-inner style").innerHTML = portfolioItem.querySelector(".popup_gradient").innerHTML;
    document.querySelector(".pp_thumbnail model-viewer").camera-controls == portfolioItem.querySelector(".work_img").camera-controls;
}


/*=============== SERVICES MODAL ===============*/


/*=============== SWIPER TESTIMONIAL ===============*/
    let swiper = new Swiper(".swiper", {
        loop: true,
        spaceBetween: 24,
        slidesPerView: 1,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
        },
        observer: true,
        observerParents: true,
      });

/*=============== INPUT ANIMATION ===============*/

const inputs = document.querySelectorAll(".input");

function focusFunc () {
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc() {
    let parent = this.parentNode;
    if(this.value == "") {
        parent.classList.remove("focus");
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
})



/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
/*=============== SHOW SCROLL UP ===============*/




/*video timestamp 45min 00sec*/
/*about section*/