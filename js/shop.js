// sidebar navigation

const sideNav = document.getElementById('side-nav')
const arrow = document.getElementById('arrow')


arrow.addEventListener('click',()=>{
    const categoryshow = sideNav.getAttribute('data-category')

    if(categoryshow === 'false'){
        sideNav.setAttribute('data-category',true)
        arrow.setAttribute('data-category',true)
    }else{
        sideNav.setAttribute('data-category',false)
        arrow.setAttribute('data-category',false)
    }
})