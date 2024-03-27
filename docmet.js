let saturate = document.getElementById("saturate")
let contrast = document.getElementById("contrast")
let brightness = document.getElementById("brightness")
let sepia = document.getElementById("sepia")
let grayscale = document.getElementById("grayscale")
let blur = document.getElementById("blur")
let hue_rotate = document.getElementById("hue-rotate")

let upload = document.getElementById("upload")
let download = document.getElementById("download")
let img = document.getElementById("img")

let reses = document.querySelector("span")
let img_box = document.querySelector(".img_box")


const canvas = document.getElementById("canvas")
const cxt = canvas.getContext("2d")








// befro updoad img
window.onload = function(){
    download.style.display = "none";
    reses.style.display = "none"
    img_box.style.display= "none"
}


// change img
upload.onchange = function(){
    download.style.display = "block";
    reses.style.display = "block"
    img_box.style.display= "block";
    
    let file = new FileReader();
    file.readAsDataURL(upload.files[0])
    file.onload = function(){
        img.src = file.result
    }
    img.onload = function(){
        canvas.width = img.width;
        canvas.height = img.height;
        cxt.drawImage(img,0,0,canvas.width,canvas.height)
        img.style.display= "none"
    }
    resetvalue()
}

// reset value
function resetvalue(){
    img.style.filter= "none"
    saturate.value =100;
    contrast.value =100;
    brightness.value =100;
    sepia.value =0;
    grayscale.value =0;
    blur.value =0;
    hue_rotate.value =0

}





// edit img

let filres =document.querySelectorAll("ul li input")
filres.forEach(filter => {
    filter.addEventListener("input", function(){
        cxt.filter = `
            saturate(${saturate.value}%)
            contrast(${contrast.value}%)
            brightness(${brightness.value}%)
            sepia(${sepia.value}%)
            grayscale(${grayscale.value})
            blur(${blur.value}px)
            hue-rotate(${hue_rotate.value}deg)
            `
            cxt.drawImage(img,0,0,canvas.width,canvas.height)

    })
});





// download

download.onclick = function(){
    download.href = canvas.toDataURL()
}