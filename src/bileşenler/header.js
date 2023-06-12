function Header(baslik, tarih, temp) {

  const div = document.createElement("div");
  div.setAttribute("class", "header");

  const spanDate = document.createElement("span");
  spanDate.setAttribute("class", "date");
  spanDate.textContent = tarih;

  const h1 = document.createElement("h1");
  h1.textContent = baslik;

  const spanTemp = document.createElement("span");
  spanTemp.setAttribute("class", "temp");
  spanTemp.textContent = temp;

  div.appendChild(spanDate);
  div.appendChild(h1);
  div.appendChild(spanTemp);

  return div;
}

  // GÖREV 1
  // ---------------------
  // Bu fonksiyon argüman olarak `baslik`, `tarih` ve `temp` alarak aşağıdaki yapıyı döndürecek.
  // Kullanılan html etiketleri, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  //  <div class="header">
  //    <span class="date">{ tarih }</span>
  //    <h1>{ baslik }</h1>
  //    <span class="temp">{ yazi }</span>
  //  </div>
  //


  const headerEkleyici = (secici) => {
    // Header bileşenini oluşturma
    const baslik = "Başlık";
    const tarih = "2023-06-12";
    const yazi = "25°C";
    const headerBileseni = createHeader(baslik, tarih, yazi);
  
    // Seçiciyle eşleşen DOM öğesini bulma
    const hedefOge = document.querySelector(secici);
  
    // Header bileşenini DOM öğesine ekleme
    if (hedefOge) {
      hedefOge.appendChild(headerBileseni);
    }
  };
  // GÖREV 2
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Görev 1'de tanımladığınız Header bileşenini kullanarak bir header oluşturun (baslik,tarih,yazi parametrelerini kendi isteğinize göre belirleyin)
  // Oluşturulan header'i, verilen seçiciyle eşleşen DOM'daki öğeye eklemelidir.
  //

  // İPUCU: querySelector bir string alabilir (bknz: querySelector("#wrapper")) 
  // fakat aynı zamanda bir değişken de alabilir (bknz: querySelector(secici))
 


export { Header, headerEkleyici }
