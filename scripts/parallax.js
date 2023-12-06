function parallax(event){
        this.querySelectorAll('.layer3').forEach(element => {
            element.style.transform=`translateY(${window.scrollY/7}px)`;
        });
        this.querySelectorAll('.layer2').forEach(element => {
            element.style.transform=`translateY(${window.scrollY/15}px)`;
        });
}
document.addEventListener('scroll',parallax);

gsap.registerPlugin(ScrollTrigger,ScrollSmoother,ScrollToPlugin)
  ScrollSmoother.create(
  {
    wrapper:'.wrapper',
    content:'.content'
  }

)


document.getElementById("s1btn").onclick=function(){
  gsap.to(window, {duration:0.1,scrollTo:{y:"#s1",offsetY:100}})
}
document.getElementById("s2btn").onclick=function(){
  gsap.to(window, {duration:0.1,scrollTo:{y:"#s2",offsetY:100}})
}
document.getElementById("s3btn").onclick=function(){
  gsap.to(window, {duration:0.1,scrollTo:{y:"#s3",offsetY:100}})
}