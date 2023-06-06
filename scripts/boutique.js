//Barre de recherche

let barre_recherche = document.getElementById("name");

let produits = document.querySelectorAll(".produit");

barre_recherche.addEventListener("keyup", () => {
  const recherche = barre_recherche.value.toLowerCase();
  console.log(recherche)

  produits.forEach(function (produit) {
    const titre_produit = produit.querySelector("h1").textContent.toLowerCase(); 

    if(recherche.length == 0){
      produit.classList.remove("disparition")
    }


    for ( i = 0; i <recherche.length; i++){
      if (!titre_produit[i].includes(recherche[i])){
        produit.classList.add("disparition");
        break
      }
      
      if (titre_produit[i].includes(recherche[i])){
        produit.classList.remove("disparition");
        
      }
    }



    /********ANCIENNE VERSION (Si vous souhaitez la conserver) ************
    if (recherche.length == 0 || title_lower.includes(recherche) || title_upper.includes(recherche) ) {
      produit.classList.remove("disparition");
    }

    if (!title_lower.includes(recherche) && !title_upper.includes(recherche)) {
      produit.classList.add("disparition");
    }
    */
  });
});



//Panier

const buttons = document.querySelectorAll(".produit button");
let nbr_article = document.querySelector(".nombre");

let all_quantities = document.querySelectorAll("#nbr_quantité")
let total = 0;



const notification = document.querySelector(".notif_panier");
const notif_write = document.querySelector("span");
notification.classList.add("disparition");

const verbe_changer = document.querySelector("verb")

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (getComputedStyle(button).backgroundColor === "rgb(78, 43, 43)") {
      quantity_plus()
      button.style.background = "rgb(178,34,34)";
      button.innerHTML = "<strong style = 'font-size: 18px'> Supprimer de mon panier </strong>";
    } else {
      quantity_moins()
      button.style.background = "rgb(78, 43, 43)";
      button.innerHTML = "<strong style = 'font-size: 18px'> Ajouter à  mon panier </strong>";
      
    }
  });
});


function quantity_plus(){
  all_quantities.forEach((q) =>{
    if (q.value > 0){
      total += parseInt(q.value)
      nbr_article.textContent = total;
      setTimeout(afficher_notification0(q), 2000);
      setTimeout(disparition_notif, 2500)

    }
  q.value = "";
  })
}


function quantity_moins(){
  all_quantities.forEach((q) =>{
    if (q.value > 0){
      total -= parseInt(q.value)
      if (total < 0){
        nbr_article.textContent = 0
      } else {
        nbr_article.textContent = total;
        setTimeout(afficher_notification1(q), 2000);
        setTimeout(disparition_notif, 2800)
      }

    }
  q.value = "";
  })
}



function  afficher_notification0(q){
  verbe_changer.textContent = "ajouter"
    notification.classList.remove("disparition");
    notif_write.textContent = parseInt(q.value);
}


function  afficher_notification1(q){
  verbe_changer.textContent = "enlever"
  notification.classList.remove("disparition");
  notif_write.textContent = parseInt(q.value);
}



function disparition_notif(){
  notification.classList.add("disparition");
}

