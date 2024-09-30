document.querySelectorAll(".card").forEach(card => {
    gsap.to(card,{
        scale:0.7,
        x:-250,
        opacity:0,
        scrollTrigger:{
            trigger:card,
            start:"top 15%",
            end: "bottom 15%",
            // markers:true,
            scrub: true
        }
    })
})
