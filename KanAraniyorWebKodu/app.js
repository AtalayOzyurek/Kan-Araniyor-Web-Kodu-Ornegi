

function btnClick()
{
    addRow();
}

/*function addRow()
{
    var tbl = document.getElementById("myTable");

    var tr = tbl.insertRow();
    
    var tdSira = tr.insertCell();
    var tdKanGrubu = tr.insertCell();
    var tdSehir = tr.insertCell();
    var tdIlce = tr.insertCell();
    var tdHastane = tr.insertCell();

    //var formKanGrubuId = document.getElementById("form kan grubu id yazıcan");
    //var formSehirİlçeHastaneId = document.getElementById("form sehir ilçe hastane id yazıcan");

    tdSira.appendChild(document.createTextNode("1"));
    tdKanGrubu.appendChild(document.createTextNode("A+"));
    tdSehir.appendChild(document.createTextNode("Edirne"));
    tdIlce.appendChild(document.createTextNode("Keşan"));
    tdHastane.appendChild(document.createTextNode("Keşan Devlet"));

    tr.appendChild(tdSira); 
    tr.appendChild(tdKanGrubu);
    tr.appendChild(tdSehir);
    tr.appendChild(tdIlce);
    tr.appendChild(tdHastane);

    tbl.appendChild(tr);
}*/
    var girisBolumu = document.getElementById("girisBolum");
    var kayitBolumu = document.getElementById("kayitBolum");



function kayitSayfaAc()
{
    var girisBolumu = document.getElementById("girisBolum");
    var kayitBolumu = document.getElementById("kayitBolum");
    girisBolumu.classList.add("d-none");
    kayitBolumu.classList.remove("d-none");
    kayitBolumu.classList.add("d-flex");

}
/*function girisSayfaAc()
{
    var girisBolumu = document.getElementById("girisBolum");
    var kayitBolumu = document.getElementById("kayitBolum");
    kayitBolumu.classList.add("d-none");
    girisBolumu.classList.remove("d-none");
    girisBolumu.classList.add("d-flex");

}*/