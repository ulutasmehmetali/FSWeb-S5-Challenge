




  // GÖREV 3
  // ---------------------
  // Tek argümanı bir dizi ("konu") olan bu fonksiyonu uygulayın.
  // Örnek olarak, konu dizisi şu şekilde deklare edilmişse ['javascript', 'bootstrap', 'teknoloji']
  // fonksiyon aşağıdaki şekilde bir DOM öğesi döndürecek.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">teknoloji</div>
  // </div>
  //

  const Tablar = (konu) => {
    const topicDiv = document.createElement('div');
    topicDiv.className = 'topics';
  
    konu.forEach((eleman) => {
      const tabDiv = document.createElement('div');
      tabDiv.className = 'tab';
      tabDiv.textContent = eleman;
      topicDiv.appendChild(tabDiv);
    });
  
    return topicDiv;
  };
  // GÖREV 4
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu işlevi uygulayın.
  // Konuları bu uç noktadan almalıdır: `http://localhost:5001/api/konular` (console.log ile test edin!).
  // Yanıtın içindeki konu dizisini bulun ve Tablar bileşenini kullanarak tabları oluşturun.
  // Tabları, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //

  const tabEkleyici = (secici) => {
    fetch('http://localhost:5001/api/konular')
      .then(response => response.json())
      .then(data => {
        const konular = data.konu;
  
        const tablarDiv = Tablar(konular);
  
        const hedefElement = document.querySelector(secici);

        hedefElement.appendChild(tablarDiv);
      })
      .catch(error => {
        console.log('Bir hata oluştu:', error);
      });
  };


export { Tablar, tabEkleyici }
