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