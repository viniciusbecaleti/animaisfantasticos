export default function initAnimationOnScroll() {
   const sections = document.querySelectorAll('[data-anime="scroll"]')
   const windowMetade = window.innerHeight * 0.7

   if (sections.length) {
      function animationOnScroll() {
         sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top
            const isSectionVisible = (sectionTop - windowMetade) <= 0

            if (isSectionVisible) {
               section.classList.add("ativo")
            }
         })
      }

      animationOnScroll()

      window.addEventListener("scroll", animationOnScroll)
   }
}