function additionner(){
    var txtA = document.getElementById('txtA');//zone input
    var a = Number(txtA.value);
    var txtB = document.getElementById('txtB');//zone input
    var b = Number(txtB.value);
    var res = a +b;
    var spanRes = document.getElementById('spanRes');//zone span
    spanRes.innerHTML="<b>"+res+"</b>";
    //spanRes.innerText=res;
    var li= document.createElement("li");
    li.innerText = "" + a + "+" + b + "=" + res;
    var ulHistorique = document.getElementById('ulHistorique');
    ulHistorique.appendChild(li);
}

function montrerOuCacherHistorique(){
    var ulHistorique = document.getElementById('ulHistorique');
    var cbHisto = document.getElementById('cbHisto');//zone input type=checkbox
    if(cbHisto.checked){
        //ulHistorique.style.visibility = "visible"
        ulHistorique.style.display = "block"
    }else{
        //ulHistorique.style.visibility = "hidden"
        ulHistorique.style.display = "none"
    }
}