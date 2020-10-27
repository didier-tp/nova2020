function onSelection(evt){
   //console.log( evt.target.nodeName + ' - ' +  evt.target.id);
   var td = evt.target;
   var trParent  = td.parentNode;
   console.log("id="+trParent.id);
   var codeProd = trParent.id.substring(2); //apres p_
   makeAjaxGetRequest("http://localhost:8282/produit-api/public/produit/"+codeProd ,
                       function (data){
                          var prod = JSON.parse(data);
                          document.getElementById("spanCode").innerText=prod.code;
                          document.getElementById("txtNom").value=prod.nom;
                          document.getElementById("txtPrix").value=prod.prix;
                       });
}

function recupererListeProduit(data){
  // console.log("data="+data); //data est au format JSON
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

function callbackApresMaj(data){
   var spanMessage  = document.getElementById("spanMessage");
   spanMessage.innerHTML="mise à jour ok : " + data ;
   //rafraichir les valeurs du tableau
   //ici via nouvel appel ajax (sans optimisation):
   var bodyTableau = document.getElementById("bodyTableau");
   bodyTableau.innerHTML="";
   makeAjaxGetRequest("http://localhost:8282/produit-api/public/produit" , recupererListeProduit);
}

function errCallback(data){
   var spanMessage  = document.getElementById("spanMessage");
   spanMessage.innerHTML="error : " + data ;
}

function updateProduit(){
   var prod = { code : undefined , nom : undefined , prix : undefined};
   prod.code = Number(document.getElementById("spanCode").innerText);
   prod.nom = document.getElementById("txtNom").value;
   prod.prix = Number(document.getElementById("txtPrix").value);
   var url = "http://localhost:8282/produit-api/private/role-admin/produit";
   var jsonData = JSON.stringify(prod);
   makeAjaxPutRequest(url,jsonData,callbackApresMaj,errCallback);
}

window.onload = function () {
    //console.log("code declenche des le chargement de la page dans le navigateur");

    makeAjaxGetRequest("http://localhost:8282/produit-api/public/produit" , recupererListeProduit);

    var btnUpdate =  document.getElementById("btnUpdate");
    btnUpdate.addEventListener("click",updateProduit);
   
}