particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 80,
            "density": {
                "enable": true,
                "value_area": 962.0472365193136
            }
        },
        "color": {
            "value": "#00ffcd"
        },
        "shape": {
            "type": "triangle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 1,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 0.48724632738080703,
                "opacity_min": 0.7471110353172375,
                "sync": true
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 100,
                "size_min": 83.64395286703855,
                "sync": true
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#00ffcd",
            "opacity": 1,
            "width": 2
        },
        "move": {
            "enable": true,
            "speed": 3,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": true,
                "rotateX": 320.6824121731046,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "window",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "grab"
            },
            "onclick": {
                "enable": true,
                "mode": "repulse"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 133.99274002972194,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
}); var count_particles, stats, update; stats = new Stats; stats.setMode(0);
 stats.domElement.style.position = 'absolute'; 
 stats.domElement.style.left = '0px'; 
 stats.domElement.style.top = '0px'; 
 document.body.appendChild(stats.domElement); 
 count_particles = document.querySelector('.js-count-particles'); 
 update = function () { 
     stats.begin(); 
     stats.end();
     if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) 
     { window.pJSDom[0].pJS.particles.array.length; } 
     requestAnimationFrame(update); };
      requestAnimationFrame(update);




