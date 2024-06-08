const loadingContainer=document.querySelector(".loadingContainer")
window.addEventListener('load',function (){
    loadingContainer.classList.remove('hidden')
    setTimeout(()=>{

        loadingContainer.remove()
    },1500)

})