$(document).ready(function() {
    var myCursor = jQuery(".teravon-cursor");
    if (myCursor.length) {
        if ($("body")) {
            const e = document.querySelector(".teravon-cursor")
            let n,
                i = 0,
                o = !1;
            (window.onmousemove = function(s) {
                o ||
                    (e.style.transform =
                        "translate(" + s.clientX + "px, " + s.clientY + "px)"),
                    (n = s.clientY),
                    (i = s.clientX);
            }),
            $("body").on("mouseenter", "a,.trigger, .cursor-none", function() {
                    e.classList.add("cursor-hover");
                }),
                $("body").on("mouseleave", "a,.trigger, .cursor-none", function() {
                    ($(this).is("a") && $(this).closest(".cursor-none").length) ||
                    (e.classList.remove("cursor-hover"));
                }),
                (e.style.visibility = "visible");
        }
    }
});

$(".navbar-toggler label").click(function() {
    $(".header").toggleClass("header-open");
});


// =========================== gsap start here =========================== //
$(document).ready(function() {
    // clear inline css function
    function clearInlineCss() {
        gsap.set(this.targets(), { clearProps: "all" });
    }

    // banner logo gsap start here
    gsap.timeline({
        scrollTrigger: {
            trigger: ".banner-logo",
            scrub: 2,
            start: "top center",
            end: "+=650",
        }
    }).to(".banner-logo", {
        duration: 2,
        scale: 0.7,
        ease: "none",
        onComplete: clearInlineCss,
    });


    // about image gsap start here
    const imageContainer = document.querySelector('.about-sticky');
    const images = imageContainer.querySelectorAll('img');

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.about-section',
            scrub: true,
            start: 'top top',
            end: 'bottom center',
            toggleActions: 'restart pause resume pause',
        },
    });

    images.forEach((image, index) => {
        tl.from(image, {
                opacity: 0,
                duration: 1,
                stagger: 2,
            }, index === 0 ? '+=1' : `+=${index * 10}`)
            .to(image, {
                opacity: 1,
                duration: 1,
                stagger: 2,
                ease: 'power4',
            }, index === 0 ? '+=10' : `+=${index * 10}`);
    });


    // collapse box gsap start here
    const thirdTimeline = gsap.timeline({ paused: true }).from(".collapse-box", {
        x: 300,
        stagger: 0.2,
        opacity: 0,
        ease: "power.inOut",
        onComplete: clearInlineCss,
    });

    const thirdTimelineTrigger = document.querySelector(".service-collapse");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const intersectionRatio = entry.intersectionRatio;
                if (intersectionRatio >= 0.5) {
                    thirdTimeline.play();
                }
            }
        });
    }, { threshold: 0.5 });
    observer.observe(thirdTimelineTrigger);

    // service box gsap start here
    const fourthTimeline = gsap.timeline({ paused: true }).from(".service-column", {
        y: 400,
        stagger: 0.5,
        duration: 0.5,
        opacity: 0,
        onComplete: clearInlineCss,
    });

    const fourthTimelineTrigger = document.querySelector(".service-row");

    const observer4 = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const intersectionRatio = entry.intersectionRatio;
                if (intersectionRatio >= 0.5) {
                    fourthTimeline.play();
                }
            }
        });
    }, { threshold: 0.5 });
    observer4.observe(fourthTimelineTrigger);


    // footer top gsap start here
    gsap.timeline({
        scrollTrigger: {
            trigger: ".footer-top",
            scrub: .1,
            start: "top center",
            end: "+=300",
        }
    }).from(".footer-top", {
        y: -150,
        ease: "power.inOut",
        onComplete: clearInlineCss,
    });


    // social media gsap start here
    let socialMarquee = gsap.to(".footer-middle a", {
        duration: 15,
        ease: "none",
        x: "-=103.5vw",
        repeat: -1
    });
    $('.footer-middle').on('mouseenter', () => {
        socialMarquee.pause();
    })
    $('.footer-middle').on('mouseleave', () => {
        socialMarquee.play();
    })

});
// =========================== gsap end here =========================== //