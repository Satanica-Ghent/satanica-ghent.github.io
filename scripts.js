particlesJS("particles-js", {
    particles: {
        number: {
            value: 128,
            density: {
                enable: false,
                value_area: 800
            }
        },
        color: { value: "#E26417" },
        shape: {
            type: "polygon",
            polygon: { nb_sides: 6 }
        },
        opacity: {
            value: 0.4,
            random: true,
            anim: { enable: true, speed: 0.5, opacity_min: 0.1, sync: false }
        },
        size: {
            value: 3,
            random: true,
            anim: { enable: true, speed: 1, size_min: 0.1, sync: false }
        },
        line_linked: {
            enable: false,
            distance: 150,
            color: "#000",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 1.666,
            direction: "bottom-left",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: { enable: false, rotateX: 600, rotateY: 1200 }
        },
    },
    retina_detect: true
});

var update = function () {
    requestAnimationFrame(update);
};
requestAnimationFrame(update);
