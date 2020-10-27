function onSelection(evt){
   //console.log( evt.target.nodeName + ' - ' +  evt.target.id);
   var td = evt.target;
   var trParent  = td.parentNode;
   console.log("id="+trParent.id);
}

function recupererListeProduit(data){
   console.log("data="+data);
   //...
}

window.onload = function () {
    console.log("code declenche des le chargement de la page dans le navigateur");

    makeAjaxGetRequest("../produit-api/public/produit" , recupererListeProduit);


    var prodA = { code : 1 , nom : "cahier" , prix : 1.2 };

    var bodyTableau = document.getElementById("bodyTableau");
    var newRow = bodyTableau.insertRow(-1);
    newRow.setAttribute("id","p_"+ prodA.code);
    var cellCode = newRow.insertCell(0);
    cellCode.innerText=prodA.code;
    newRow.insertCell(1).innerText=prodA.nom;
    newRow.insertCell(2).innerText=prodA.prix;

    newRow.addEventListener("click",onSelection);
}