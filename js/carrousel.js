(function(){
    console.log("Début du carrousel")
    let carrousel_ouvrir_avec_images = document.querySelector(".wp-block-gallery");
    let carrousel = document.querySelector(".carrousel")
    let carrousel__x = document.querySelector(".carrousel__x");
    let carrousel__precedent = document.querySelector(".carrousel__precedent");
    let carrousel__suivant = document.querySelector(".carrousel__suivant");
    let carrousel__figure = document.querySelector(".carrousel__figure");
    let carrousel__form = document.querySelector(".carrousel__form");
    console.log(carrousel__form.tagName); 


    let galerie = document.querySelector(".galerie");
    let galerie__img = galerie.querySelectorAll("img");

    

    carrousel__x.addEventListener("mousedown", function(){
        carrousel.classList.remove("carrousel--activer")
    })

    carrousel__precedent.addEventListener("mousedown", function(){
        
        index = index - 1
        affiche_image_carrousel()
        
       
        
        
    })

    carrousel__suivant.addEventListener("mousedown", function(){
        
        index = index + 1
        affiche_image_carrousel()
        
    })
    
let position = 0
let index  = [0,3]
let ancienIndex = -1

// Pour chaque image de la galerie l'ajouter dans le carrousel

    for(const elem of galerie__img){
        elem.dataset.index = position
        elem.addEventListener("mousedown",function(e){
            carrousel.classList.add("carrousel--activer")
            index = e.target.dataset.index
            affiche_image_carrousel()

        })
        // console.log(elem.getAttribute('src'))
        ajouter_une_image_dans_carrousel(elem)
        ajouter_un_radio_bouton_dans_carrousel()
    }


/** 
 * @param (*) elem une image de la galerie
 */
// Création dynamique d'une image dans le carrousel
function ajouter_une_image_dans_carrousel(elem){
    let img = document.createElement('img')
        img.classList.add("carrousel__img")
        img.src = elem.src
        // console.log(img.src)
        carrousel__figure.appendChild(img)
}

function ajouter_un_radio_bouton_dans_carrousel(){
    let rad = document.createElement('input')
    rad.setAttribute('type','radio')
    rad.setAttribute('name','carrousel__rad')
    rad.classList.add('carrousel__rad')
    rad.dataset.index = position
    rad.addEventListener('mousedown',function(){
        index = this.dataset.index
        affiche_image_carrousel()

    })
    position = position + 1
    carrousel__form.appendChild(rad)
}

// Affiche la nouvelle image du carrousel
function affiche_image_carrousel(){
    if(ancienIndex != -1){
        carrousel__figure.children[ancienIndex].style.opacity = "0"
        // carrousel__form.children[ancienIndex].checked = false
        // carrousel__figure.children[ancienIndex].classList.remove("carrousel__img--activer")
    } 
    // console.log(this.dataset.index)
    carrousel__figure.children[index].style.opacity = "1"
    // carrousel__figure.children[index].classList.add("carrousel__img--activer")
    ancienIndex = index

}

})()