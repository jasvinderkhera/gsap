let tl = gsap.timeline()

tl.from(".nav .start", {
    y: "-40",
    opacity:0,
    duration:1,
    delay:0.3,
    
})
tl.from(".nav .logo",{
    x:300,
    opacity:0,
    duration:1,
    
})
tl.from(".nav .end .menuItem", {
    y:"-40",
    opacity:0,
    duration:1,
    stagger:0.3
})

tl.from(".container .redBox", {
    x:500,
    scale:0,
    opacity:0,
    duration:1,
    rotate:360,
    borderRadius:0,
    backgroundColor:"yellow",
})
tl.to(".container .redBox", {
    backgroundColor:"skyblue",
    duration:1,
    // delay:0.3,
    scrub:2,
    pin:true
})

