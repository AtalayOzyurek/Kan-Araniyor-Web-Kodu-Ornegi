  // Import the functions you need from the SDKs you need
  //import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDSt_Phqg1YrMdc9a3BT3fCVp2hph88mgs",
    authDomain: "kanver-d4555.firebaseapp.com",
    databaseURL: "https://kanver-d4555-default-rtdb.firebaseio.com",
    projectId: "kanver-d4555",
    storageBucket: "kanver-d4555.appspot.com",
    messagingSenderId: "403632938011",
    appId: "1:403632938011:web:1ecf3bbfb11e8509ab2cbe"
  };
     // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
db = firebase.database();

/*function kanEkle()
{
    var kan1=new Kan("A+","İstanbul","Kadıköy","Siyami Ersek");
    var key = db.ref().child("Web Kan İhtiyacı").push().key;
    db.ref("Web Kan İhtiyacı/"+key).set(kan1);
}

class Kan
{
    constructor(kanGrubu,sehirAdi,ilceAdi,hastaneAdi)
    {
        this.KanGrubu=kanGrubu;
        this.SehirAdi=sehirAdi;
        this.IlceAdi=ilceAdi;
        this.HastaneAdi=hastaneAdi;
    }
    get kanGrubu(){return this.KanGrubu;}
    get sehirAdi(){return this.SehirAdi;}
    get ilceAdi(){return this.IlceAdi;}
    get hastaneAdi(){return this.HastaneAdi;}
}*/

//VERİTABANINDAN ÇEK
function kanListener()
{
    var ref = db.ref("Kan İhtiyacı");
    var sayac = 1;
    ref.on('value',gotData,errData)
    function gotData(data)
        {
            data.forEach(element=>{
                addRow(element,sayac++);
            });
        }
    function errData(err)
        {
            alert("HATA");
        }
}

//VERİTABANINDAN ÇEKTİĞİN VERİYİ TABLOYA EKLE
function addRow(element,sayac)
{
    var tbl = document.getElementById("myTable");
    var tr = tbl.insertRow();
    
    var tdSira = tr.insertCell();
    var tdKanGrubu = tr.insertCell();
    var tdSehir = tr.insertCell();
    var tdIlce = tr.insertCell();
    var tdHastane = tr.insertCell();

    //var formKanGrubuId = document.getElementById("form kan grubu id yazıcan");
    //var formKanGrubuId = document.getElementById("form sehir ilçe hastane id yazıcan");

    tdSira.appendChild(document.createTextNode(sayac));
    tdKanGrubu.appendChild(document.createTextNode(element.val().KanGrubu));
    tdSehir.appendChild(document.createTextNode(element.val().SehirAdi));
    tdIlce.appendChild(document.createTextNode(element.val().IlceAdi));
    tdHastane.appendChild(document.createTextNode(element.val().HastaneAdi));

    tr.appendChild(tdSira); 
    tr.appendChild(tdKanGrubu);
    tr.appendChild(tdSehir);
    tr.appendChild(tdIlce);
    tr.appendChild(tdHastane);

    tbl.appendChild(tr);
}

            /*KAN BAĞIŞÇISININ VERİTABANINA EKLENMESİ*/
function kanBagisciEkle()
{
    var frmBagisciAdSoyad = document.getElementById("inputKullaniciAdi");
    var frmBagisciKanGrubu = document.getElementById("inputKanGrubu");
    var frmBagisciTelefon = document.getElementById("inputTelefon");
    var frmBagisciSehir = document.getElementById("inputSehir");
    var frmBagisciIlce = document.getElementById("inputIlce");
    if(frmBagisciAdSoyad.value != ""&&frmBagisciKanGrubu.value!=""&&frmBagisciTelefon.value!=""&&frmBagisciSehir.value!=""&&
    frmBagisciIlce.value!="")
    {
        var kanbagisci=new Bagisci(frmBagisciAdSoyad.value,frmBagisciKanGrubu.value,frmBagisciTelefon.value,frmBagisciSehir.value,frmBagisciIlce.value);
        var key = db.ref().child("Kan Bağışçı").push().key;
        db.ref("Kan Bağışçı/"+key).set(kanbagisci);

        alert("Kayıt İşlemi Başarılı");
        frmBagisciAdSoyad.value = "";
        frmBagisciKanGrubu.value = "";
        frmBagisciTelefon.value = "";
        frmBagisciSehir.value = "";
        frmBagisciIlce.value = "";
    }
    else
    {
        alert("Verileri Boş Bırakmayınız");
    }

}
class Bagisci
{
    constructor(bagisciAdSoyad,bagisciKanGrubu,bagisciTelefon,bagisciSehir,bagisciIlce)
    {
        this.BagisciAdSoyad=bagisciAdSoyad;
        this.BagisciKanGrubu=bagisciKanGrubu;
        this.BagisciTelefon=bagisciTelefon;
        this.BagisciSehir=bagisciSehir;
        this.BagisciIlce=bagisciIlce;
    }
    get bagisciAdSoyad(){return this.BagisciAdSoyad;}
    get bagisciKanGrubu(){return this.BagisciKanGrubu;}
    get bagisciTelefon(){return this.BagisciTelefon;}
    get bagisciSehir(){return this.BagisciSehir;}
    get bagisciIlce(){return this.BagisciIlce;}
}

/* KAN BAĞIŞÇISININ VERİTABANINDAN SORGULANIP DOĞRULANMASI
function kanBagisciGiris()
{
    if(girisAdSoyad.value!=""&&girisTelefon.value!="")
    {
        var girisAdSoyad = document.getElementById("girisAdSoyad");
        var adsoyaddogrumu = document.getElementById("girisAdSoyadSorgu");
        var telefondogrumu = document.getElementById("girisTelefonSorgu");
        var dbref = ref(db);
        
        get(child(dbref,"Kan Bağışçı/"+ girisAdSoyad.value)).then((snapshot)=>
        {
            if(snapshot.exists())
            {
                adsoyaddogrumu.value = snapshot.val().BagisciAdSoyad;
                telefondogrumu.value = snapshot.val().BagisciTelefon;
            }
        });

        
    }
    else
    {
        alert("Eksik alanları doldurunuz.");
    }
}

*/














