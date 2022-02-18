const navbarSelectLinks = document.querySelectorAll(".navbar-select")
const sectionParts = document.querySelectorAll(".part")

navbarSelectLinks.forEach((navLink) => {
 navLink.addEventListener('click', function () {
   navbarSelectLinks.forEach((nav)=>{nav.classList.remove("active")
  })
  navLink.classList.add('active')
 })
})

sectionParts.forEach((part)=>{
  part.addEventListener('mouseover', function () {
    navbarSelectLinks.forEach((nav)=>{
      nav.classList.remove("active")
    })
  })
})

for(let i=0; i<sectionParts.length; i++){
  sectionParts[i].addEventListener('mouseover', function () {
    navbarSelectLinks[i].classList.add("active")
  })
}

