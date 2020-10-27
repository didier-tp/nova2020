function onSelection(evt){
   //console.log( evt.target.nodeName + ' - ' +  evt.target.id);
   var td = evt.target;
   var trParent  = td.parentNode;
   console.log("id="+trParent.id);
}

function recupererListeProduit(data){
   console.log("data="+data); //data est au format JSON
   var tabProduits = JSON.parse(data);
   for(let prod of tabProduits){
      ajouterLigneDansTableau(prod);
   }
}

function ajouterLigneDansTableau(prod){
    
    var bodyTableau = document.getElementById("bodyTableau");
    var newRow = bodyTableau.insertRow(-1);
    newRow.setAttribute("id","p_"+ prod.code);
    var cellCode = newRow.insertCell(0);
    cellCode.innerText=prod.code;
    newRow.insertCell(1).innerText=prod.nom;
    newRow.insertCell(2).innerText=prod.prix;

    newRow.addEventListener("click",onSelection);
}

window.onload = function () {
    console.log("code declenche des le chargement de la page dans le navigateur");

    makeAjaxGetRequest("../produit-api/public/produit" , recupererListeProduit);


   
}