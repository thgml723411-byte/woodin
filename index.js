//Observer
let items = document.querySelectorAll(".scale1, .up2, .up3, .up4, .up5, .scale6, .up7 ")
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