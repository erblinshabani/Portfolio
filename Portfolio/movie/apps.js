const getHamburger = document.querySelector('.hamburger')
const getMenu = document.querySelector('.menu')
const btn =document.querySelector('.btn-sign-up')



getHamburger.addEventListener("click", ()=>{
    getHamburger.classList.toggle("active")
    getMenu.classList.toggle("active")
    btn.style.visibility = "visible"
    
})

let remove = () =>{
    getHamburger.classList.remove("active")
    getMenu.classList.remove("active")
}





        