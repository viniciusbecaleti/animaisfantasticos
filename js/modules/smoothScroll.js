export default function initSmoothScroll() {
   const links = document.querySelectorAll('[data-menu="suave"] a[href^="#"]')

   function smoothScroll(event) {
      event.preventDefault()
      
      const href = this.getAttribute("href")
      const section = document.querySelector(href)
      const sectionTop = section.offsetTop

      window.scrollTo({
         top: sectionTop,
         behavior: "smooth"
      })

      // forma alternativa, não suportado para iOS até o presente momento (03/22)
      // section.scrollIntoView({
      //    block: "start",
      //    behavior: "smooth"
      // })
   }

   links.forEach(link => {
      link.addEventListener("click", smoothScroll)
   })
}