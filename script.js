const hamburger = document.getElementById('hamburger'); 
const menu = document.querySelector('.menu'); 
  
hamburger.addEventListener('click', function () { 
    const hamIcon = this.querySelector('.hamburger-icon'); 
    const crossIcon = this.querySelector('.cross-icon'); 
    if (hamIcon.style.display === "none") { 
        hamIcon.style.display = "inline-block"
        menu.style.display = "none"
        crossIcon.style.display = "none"
    } 
    else { 
        crossIcon.style.display = "inline-block"
        hamIcon.style.display = "none"
        menu.style.display = "block"
    } 
});
 const commonBtn = document.querySelector(".btn common-btn");
        commonBtn.addEventListener("click", ()=> {
            confetti({
                 particleCount: 100,
                 spread: 90,
                 origin: { y: 0.6 },
                   });
                   confetti({
                     particleCount: 100,
                     spread: 90,
                     origin: { y: 0.6 },
                   });
                 });
             