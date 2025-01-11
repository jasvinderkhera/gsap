let container = document.querySelector(".container")
let cursor = document.querySelector("#cursor")
let innerContainer = document.querySelector(".innerContainer")

container.addEventListener("mousemove", function(dets){
gsap.to(cursor,{
    x:dets.x,
    y:dets.y,
    ease:"back.out",
    duration:0.5
})
})

innerContainer.addEventListener("mouseenter", function(){
    gsap.to(cursor,{
        scale:3,
        innerHTML:"View More",
        duration:1,
        backgroundColor:"#ffffff8a"
    })
})
innerContainer.addEventListener("mouseleave", function(){
    gsap.to(cursor,{
        scale:1,
        innerHTML:"",
        backgroundColor:"#fff"
    })
})
