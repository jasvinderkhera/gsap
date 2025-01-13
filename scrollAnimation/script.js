window.addEventListener("wheel",function(dets){
    if(dets.deltaY > 0){
        gsap.to(".banner",{
            transform:"translateX(-200%)",
            duration:4,
            repeat:-1,
            ease:"none"
        })
        gsap.to(".banner img",{
            rotate:180
        })
    } else{
        gsap.to(".banner",{
            transform:"translateX(0%)",
            duration:4,
            repeat:-1,
            ease:"none"
        })
        gsap.to(".banner img",{
            rotate:0
        })
    }
})