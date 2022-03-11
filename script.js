function initTabNav() {
   const tabMenu = document.querySelectorAll(".js-tabmenu li")
   const tabContent = document.querySelectorAll(".js-tabcontent section")

   if (tabMenu.length && tabContent.length) {
      function activeTab(index) {
         tabContent.forEach(section => {
            section.classList.remove("ativo")
         })
         tabContent[index].classList.add("ativo")
      }

      tabMenu.forEach((li, index) => {
         li.addEventListener("click", function () {
            activeTab(index)
         })
      })
   }
}

initTabNav()

function initAccordion() {
   const accordionList = document.querySelectorAll(".js-accordion dt")

   if (accordionList.length) {
      function activeAccordion() {
         this.classList.toggle("ativo")
         this.nextElementSibling.classList.toggle("ativo")
      }

      accordionList.forEach(item => {
         item.addEventListener("click", activeAccordion)
      })
   }
}

initAccordion()

function initScrollSuave() {
   const links = document.querySelectorAll('.js-menu a[href^="#"]')

   function scrollToSection(event) {
      event.preventDefault()
      const href = this.getAttribute("href")
      const section = document.querySelector(href)

      // farma alternativa
      // const sectionTop = section.offsetTop
      // window.scrollTo({
      //    top: sectionTop,
      //    behavior: "smooth"
      // })

      section.scrollIntoView({
         block: "start",
         behavior: "smooth"
      })
   }

   links.forEach(link => {
      link.addEventListener("click", scrollToSection)
   })
}

initScrollSuave()

function initAnimacaoScroll() {
   const sections = document.querySelectorAll(".js-scroll")
   const windowMetade = window.innerHeight / 2

   if (sections.length) {
      function animaScroll() {
         sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top
            const isSectionVisible = (sectionTop - windowMetade) <= 0

            if (isSectionVisible) {
               section.classList.add("ativo")
            }
         })
      }

      animaScroll()

      window.addEventListener("scroll", animaScroll)
   }
}

initAnimacaoScroll()