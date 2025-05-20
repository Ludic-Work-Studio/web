
window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");
    const body = document.body;

    // Timeline para coordinar preloader + entrada
    const tl = gsap.timeline({
        onComplete: () => {
            // Limpiamos clases al final
            body.classList.remove("no-scroll");
            body.classList.add("loaded");
            preloader.style.display = "none";
        }
    });

    // Empezamos con el preloader saliendo
    tl.to(preloader, {
        opacity: 0,
        duration: 0.5
    })

        // En el mismo timeline: animaciones de entrada SIN esperar manualmente
        .from("header", {
            opacity: 0,
            y: -30,
            duration: 0.6
        }, "-=0.3") // Empieza un poco antes que termine el preloader

        .from("nav", {
            opacity: 0,
            y: -30,
            duration: 0.6
        }, "-=0.4")

        .from("main", {
            opacity: 0,
            y: 20,
            duration: 0.8
        }, "-=0.4")

        .from("footer", {
            opacity: 0,
            y: 20,
            duration: 0.8
        }, "-=0.5");
});

