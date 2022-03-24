export default class SmoothScroll {
   constructor(links, options) {
      this.links = document.querySelectorAll(links)
      if (options === undefined) {
         this.options = {
            block: "start",
            behavior: "smooth",
         }
      } else {
         this.options = options
      }
      this.smoothScroll = this.smoothScroll.bind(this)
   }

   smoothScroll(event) {
      event.preventDefault()

      const href = event.currentTarget.getAttribute("href")
      const section = document.querySelector(href)

      section.scrollIntoView(this.options)
   }

   addLinkEvent() {
      this.links.forEach((link) => {
         link.addEventListener("click", this.smoothScroll)
      })
   }

   init() {
      if (this.links.length) {
         this.addLinkEvent()
      }
      return this
   }
}
