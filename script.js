window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");

    // Desvanece el preloader
    gsap.to(preloader, {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
            preloader.style.display = "none";

            // Animar el contenido cuando termine el preloader
            gsap.from("header", { opacity: 0, y: -30, duration: 0.6 });
            gsap.from("nav", { opacity: 0, y: -30, duration: 0.6, delay: 0.2 });
            gsap.from("main", { opacity: 0, y: 20, duration: 0.8, delay: 0.4 });
            gsap.from("footer", { opacity: 0, y: 20, duration: 0.8, delay: 0.6 });
        }
    });
});
