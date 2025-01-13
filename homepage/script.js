let tl = gsap.timeline()

gsap.from(".logo", {
    y:-40,
    opacity:0,
    delay:0.3,
    duration:1,
})

tl.from(".menuItems",{
    transform:"translateX(100%)",
    opacity:0,
    delay:0.1,
    duration:0.6
})
tl.from(".menuItems a",{
    x:200,
    opacity:0,
    delay:0.3,
    duration:0.5,
    stagger:0.2,
})
tl.from(".menuItems i",{
    x: 200,
    opacity:0,
    duration:0.3,
})

tl.pause()

let menuBtn = document.querySelector(".menu i")

let closeBtn = document.querySelector(".menuItems i")

menuBtn.addEventListener("click", function(){
   tl.play()
})

closeBtn.addEventListener("click", function(){
    tl.reverse()
})

