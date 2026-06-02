let gnb = document.querySelector(".gnb")
let nav = document.querySelector(".nav")
let ham = document.querySelector('.ham')
let fullmenu = document.querySelector('.fullmenu')
let closebtn = document.querySelector('.closebtn')
function onpage(){
}
// let ses = document.querySelectorAll('.wrap>section')

//메뉴상단
if(gnb && nav){
    gnb.addEventListener("mouseenter", function(){
        nav.classList.add("on")
    })
    gnb.addEventListener("mouseleave", function(){
        nav.classList.remove("on")
    })
}

//햄버거바
if(ham && fullmenu){
    ham.addEventListener('click',function(){
        fullmenu.classList.add('on')
    })
}
if(closebtn && fullmenu){
    closebtn.addEventListener('click',function(){
        fullmenu.classList.remove('on')
    })
}

//섹션
//     function showpage(num){
//         ses.forEach(function(item){
//            item.classList.remove('on')
//         })
//         ses[num].classList.add('on')
//         ham.classList.remove('on')
//         fullmenu.classList.remove('on')
// }

//옵저버
let items = document.querySelectorAll(".scale1, .up2, .up3, .up4, .up5, .scale6, .up7 ")
if(items.length){
const observer = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
            if(entry.isIntersecting){
                entry.target.classList.add('on')
            }else{
                entry.target.classList.remove('on')
            }
    })
},{
   threshold:0.1
})
items.forEach(function(box){
  observer.observe(box)
})
}
