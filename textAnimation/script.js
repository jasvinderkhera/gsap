function breakText(){
    let h1 = document.querySelector("h1")
    text = h1.innerText

splitText = text.split('')

let halfVal = Math.round(text.length/2)
let clutter = ""
splitText.forEach((ele, id) => {
    if(id<halfVal){
        clutter += `<span class="start">${ele}</span>`
    }else{
        clutter += `<span class="end">${ele}</span>`
    }
});
h1.innerHTML = clutter
}

breakText()


gsap.from("h1 .start",{
    y:80,
    duration:0.6,
    delay:0.5,
    stagger:0.15,
    opacity:0
})
gsap.from("h1 .end",{
    y:80,
    duration:0.6,
    delay:0.5,
    stagger: -0.15,
    opacity:0
})

