function init(){
    // const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// }); THis code is for locomotive but locomotive and scrollTrigger doesn't work simoultanously therefore we don't usually use this code

gsap.registerPlugin(ScrollTrigger);



const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);


ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});




ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}
init()

var crsr = document.querySelector("#cursor")
document.querySelector("#main")
main.addEventListener("mousemove",function(dets){
 crsr.style.left= dets.x+ -20 +"px"
 crsr.style.top= dets.y+ -20 +"px"
})

var tl=gsap.timeline({
  scrollTrigger:{
    trigger:"#page1 .inside-page1-h1",
    scroller:"#main",
    // markers:true,
    start:"top 27%",
    end:"top 0",
    scrub:3
  }
})



tl.to("#page1 .inside-page1-h1",{
    x:-80,
    transform:" translateY(10%) rotate(0deg)"
     
},"anim")
tl.to("#page1 .inside-page1-h2",{
    x:100,
    transform:" translateY(10%) rotate(0deg)"
     
},"anim")
tl.to("#page1 video",{
   width:"90%",
     
},"anim")


var tl2=gsap.timeline({
  scrollTrigger:{
    trigger:"#page1 .inside-page1-h1",
    scroller:"#main",
    start:"top -110%",
    end:"top -130%",
    scrub:3
  }
})

tl2.to("#main",{
  backgroundColor:"#fff"
})

var tl3=gsap.timeline({
  scrollTrigger:{
    trigger:"#page1 .inside-page1-h1",
    scroller:"#main",
    // markers:true,
    start:"top -420%",
    end:"top -580%",
    scrub:3
  }
})
tl3.to("#main",{
  backgroundColor:"#0F0D0D"
})
tl3.to("#view-all-pgt",{
  color:"#fff"
})
tl3.to("#page3",{
 borderBottom:"2px solid #fff"
})
tl3.to("#page3 #page3-part1 img",{
  transform:" translateY(10%) rotate(20deg)"
})



var boxes=document.querySelectorAll("#box")
boxes.forEach(function(elem){
elem.addEventListener("mouseenter",function(){
  var att=elem.getAttribute("data-image")
  crsr.style.width="450px"
  crsr.style.height="400px"
  crsr.style.borderRadius="0"
  crsr.style.backgroundImage=`url(${att})`
})
elem.addEventListener("mouseleave",function(){
  elem.style.backgroundColor="transparent"})
  crsr.style.width="20px"
  crsr.style.height="20px"
  crsr.style.borderRadius="50%"
  crsr.style.backgroundImage=`none `
})

var h4=document.querySelectorAll("#nav .hover-elem")
var purple=document.querySelector("#purple")
h4.forEach(function(eleme){
eleme.addEventListener("mouseenter",function(){
 purple.style.display="block"
 purple.style.opacity="1"
})
eleme.addEventListener("mouseleave",function(){
  purple.style.display="none"
  purple.style.opacity="0"
})
})