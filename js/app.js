(() => {
    "use strict";
    const modules_flsModules = {};
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(2 == webP.height);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = true === support ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    function functions_FLS(message) {
        setTimeout((() => {
            if (window.FLS) console.log(message);
        }), 0);
    }
    class MousePRLX {
        constructor(props, data = null) {
            let defaultConfig = {
                init: true,
                logging: true
            };
            this.config = Object.assign(defaultConfig, props);
            if (this.config.init) {
                const paralaxMouse = document.querySelectorAll("[data-prlx-mouse]");
                if (paralaxMouse.length) {
                    this.paralaxMouseInit(paralaxMouse);
                    this.setLogging(`Прокинувся, стежу за об'єктами: (${paralaxMouse.length})`);
                } else this.setLogging("Немає жодного обєкта. Сплю...zzZZZzZZz...");
            }
        }
        paralaxMouseInit(paralaxMouse) {
            paralaxMouse.forEach((el => {
                const paralaxMouseWrapper = el.closest("[data-prlx-mouse-wrapper]");
                const paramСoefficientX = el.dataset.prlxCx ? +el.dataset.prlxCx : 100;
                const paramСoefficientY = el.dataset.prlxCy ? +el.dataset.prlxCy : 100;
                const directionX = el.hasAttribute("data-prlx-dxr") ? -1 : 1;
                const directionY = el.hasAttribute("data-prlx-dyr") ? -1 : 1;
                const paramAnimation = el.dataset.prlxA ? +el.dataset.prlxA : 50;
                let positionX = 0, positionY = 0;
                let coordXprocent = 0, coordYprocent = 0;
                setMouseParallaxStyle();
                if (paralaxMouseWrapper) mouseMoveParalax(paralaxMouseWrapper); else mouseMoveParalax();
                function setMouseParallaxStyle() {
                    const distX = coordXprocent - positionX;
                    const distY = coordYprocent - positionY;
                    positionX += distX * paramAnimation / 1e3;
                    positionY += distY * paramAnimation / 1e3;
                    el.style.cssText = `transform: translate3D(${directionX * positionX / (paramСoefficientX / 10)}%,${directionY * positionY / (paramСoefficientY / 10)}%,0);`;
                    requestAnimationFrame(setMouseParallaxStyle);
                }
                function mouseMoveParalax(wrapper = window) {
                    wrapper.addEventListener("mousemove", (function(e) {
                        const offsetTop = el.getBoundingClientRect().top + window.scrollY;
                        if (offsetTop >= window.scrollY || offsetTop + el.offsetHeight >= window.scrollY) {
                            const parallaxWidth = window.innerWidth;
                            const parallaxHeight = window.innerHeight;
                            const coordX = e.clientX - parallaxWidth / 2;
                            const coordY = e.clientY - parallaxHeight / 2;
                            coordXprocent = coordX / parallaxWidth * 100;
                            coordYprocent = coordY / parallaxHeight * 100;
                        }
                    }));
                }
            }));
        }
        setLogging(message) {
            this.config.logging ? functions_FLS(`[PRLX Mouse]: ${message}`) : null;
        }
    }
    modules_flsModules.mousePrlx = new MousePRLX({});
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    const menuBurger = document.querySelector(".page__title");
    const menuBurger2 = document.querySelector(".page__text");
    const menuBurger3 = document.querySelector(".circle");
    const menuBurger4 = document.querySelector(".btn_next1");
    const menuBurger5 = document.querySelector(".btn_prev1");
    const menuBurger7 = document.querySelector(".cont__title");
    const menuBurger8 = document.querySelector(".cont__text");
    const menuBurger6 = document.querySelector(".cont");
    const menuBurger11 = document.querySelector(".context");
    const menuBurgercontainer = document.querySelector(".page__container");
    const menuBody2 = document.querySelector(".btn_prev1");
    const menuBody = document.querySelector(".button_next");
    const menuBody3 = document.querySelector(".btn_next1");
    const menuBody4 = document.querySelector(".btn_prev2");
    if (menuBody) menuBody.addEventListener("click", (function(e) {
        menuBody.classList.toggle("_active");
        if (menuBurger) {
            menuBurger3.classList.remove("_active21");
            menuBurger.classList.remove("_active11");
            menuBurger2.classList.remove("_active11");
            menuBurger6.classList.remove("_contact1");
            menuBody.classList.remove("_active11");
            menuBurger5.classList.remove("_active41");
            menuBurger4.classList.remove("_active41");
            menuBurger7.classList.remove("_active41");
            menuBurger8.classList.remove("_active41");
            menuBurger3.classList.remove("_active211");
            menuBurger.classList.toggle("_active");
            menuBurger2.classList.toggle("_active");
            menuBurger6.classList.toggle("_contact");
            menuBurger3.classList.toggle("_active2");
            menuBurger4.classList.toggle("_active4");
            menuBurger5.classList.toggle("_active4");
            menuBurger7.classList.toggle("_active5");
            menuBurger8.classList.toggle("_active5");
            menuBurgercontainer.classList.toggle("_not-flex");
        }
    }));
    if (menuBody2) menuBody2.addEventListener("click", (function(e) {
        if (menuBurger) {
            menuBurger3.classList.remove("_active2");
            menuBody.classList.remove("_active");
            menuBurger.classList.remove("_active");
            menuBurger2.classList.remove("_active");
            menuBurger5.classList.remove("_active4");
            menuBurger4.classList.remove("_active4");
            menuBurger7.classList.remove("_active5");
            menuBurger8.classList.remove("_active5");
            menuBurgercontainer.classList.remove("_not-flex");
            menuBurger6.classList.remove("_contact");
            menuBurger3.classList.remove("_active211");
            menuBurger6.classList.remove("_contact1");
            menuBurger5.classList.toggle("_active41");
            menuBurger4.classList.toggle("_active41");
            menuBurger7.classList.toggle("_active41");
            menuBurger8.classList.toggle("_active41");
            menuBurger6.classList.toggle("_contact1");
            menuBurger3.classList.toggle("_active21");
            menuBurger.classList.toggle("_active11");
            menuBurger2.classList.toggle("_active11");
            menuBody.classList.toggle("_active11");
        }
    }));
    if (menuBody3) menuBody3.addEventListener("click", (function(e) {
        if (menuBurger) {
            menuBurger6.classList.toggle("_contact1");
            menuBurger3.classList.toggle("_active211");
            menuBurger11.classList.toggle("_context-active");
            menuBurger11.classList.remove("_active2111");
            menuBurger3.classList.remove("_activecircle");
        }
    }));
    if (menuBody4) menuBody4.addEventListener("click", (function(e) {
        if (menuBurger) {
            menuBurger11.classList.toggle("_active2111");
            menuBurger3.classList.toggle("_activecircle");
            menuBurger6.classList.remove("_contact1");
            menuBurger3.classList.remove("_active211");
            menuBurger11.classList.remove("_context-active");
        }
    }));
    window["FLS"] = true;
    isWebp();
})();