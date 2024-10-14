// text effect
const texts = ["By Image", "By Text Description"];
    const typingSpeed = 150; 
    const deletingSpeed = 100;
    const delayBetweenTexts = 2000; 
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const dynamicTextElement = document.getElementById("dynamicText");

    function type() {
      const currentText = texts[textIndex];
      
      if (isDeleting) {
        dynamicTextElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
          isDeleting = false;
          textIndex = (textIndex + 1) % texts.length;
          setTimeout(type, 500); 
        } else {
          setTimeout(type, deletingSpeed);
        }
      } else {
        
        dynamicTextElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentText.length) {
          isDeleting = true;
          setTimeout(type, delayBetweenTexts);
        } else {
          setTimeout(type, typingSpeed);
        }
      }
    }

    document.addEventListener("DOMContentLoaded", function() {
      if (texts.length) setTimeout(type, typingSpeed);
    });
//scrolling effect
// Add scroll event listener to trigger animations
// window.addEventListener('scroll', function() {
//     const heroSection = document.querySelector('.heroSection');
//     const scrollPosition = window.scrollY;
//     const triggerPoint = 200; 

//     if (scrollPosition > triggerPoint) {
//         heroSection.classList.add('scrolled');
//     } else {
//         heroSection.classList.remove('scrolled');
//     }
// });