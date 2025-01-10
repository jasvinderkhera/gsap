gsap.from(".container .head1", {
    opacity:0,
    transform:"translateX(-100%)",
    duration:1,
    scrollTrigger:{
        trigger:".container .head1",
        scroller:"body",
        scrub:2
    }
})
gsap.from(".container .head2", {
    opacity:0,
    transform:"translateX(100%)",
    duration:1,
    scrollTrigger:{
        trigger:".container .head2",
        scroller:"body",
        scrub:2
    }
})