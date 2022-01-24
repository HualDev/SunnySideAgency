let hamburger= document.getElementById('hamburger')
hamburger.addEventListener('click',displayMenu)

function displayMenu(){
    document.getElementById('menu').classList.toggle('menuVisible')
    document.getElementById('creatives').classList.toggle('creatives')
    document.getElementById('arrow').classList.toggle('arrowVisible')
}