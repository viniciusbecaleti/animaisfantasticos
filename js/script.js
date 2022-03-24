import SmoothScroll from "./modules/smoothScroll.js"
import initAnimationOnScroll from "./modules/animationOnScroll.js"
import initAccordion from "./modules/accordion.js"
import initTabNav from "./modules/tabNav.js"
import initModal from "./modules/modal.js"
import initTooltip from "./modules/tooltip.js"
import initDropdownMenu from "./modules/dropdownMenu.js"
import initMenuMobile from "./modules/menuMobile.js"
import initFuncionamento from "./modules/funcionamento.js"
import initFetchAnimais from "./modules/fetchAnimais.js"
import initFetchBitcoin from "./modules/fetchBitcoin.js"

const smoothScroll = new SmoothScroll('[data-menu="suave"] a[href^="#"]')
smoothScroll.init()

initAnimationOnScroll()
initAccordion()
initTabNav()
initModal()
initTooltip()
initDropdownMenu()
initMenuMobile()
initFuncionamento()
initFetchAnimais()
initFetchBitcoin()
