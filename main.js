//BAGIAN HALAMAN1 
var typed = new Typed(".multi-text", {
    strings: ["Frontend Developer", "Web Design", "Content Writing Service"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})

// BAGIAN HALAMAN 2
document.addEventListener("DOMContentLoaded", function(){
    // UNTUK H2 dan P
    let options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1
    };


    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateY(0)";
                observer.unobserve(entry.target);
            }
        });
    }, options);

document.querySelectorAll('.detail h2, .detail p').forEach(Element => {
    observer.observe(Element);
});
// UNTUK GAMBAR
let imgObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateX(0)";
            observer.unobserve(entry.target);
        }
    });
},options);

document.querySelectorAll('.img-wrapper').forEach(Element => {
    imgObserver.observe(Element);
    });
});
