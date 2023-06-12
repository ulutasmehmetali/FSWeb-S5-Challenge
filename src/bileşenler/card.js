import { response } from "msw";

const Card = (makale) => {

  const cardDiv = document.createElement('div');
  cardDiv.setAttribute('class','card');

  const headLineDiv = document.createElement('div');
  headLineDiv.setAttribute('class','headline');
  headLineDiv.textContent = makale.anabaslik;

  const author = document.createElement('div');
  author.setAttribute('class','author');

  const imgContainer = document.createElement('div');
  imgContainer.setAttribute('class','img-container');

  const imgElement = document.createElement('img');
  imgElement.src = makale.yazarFoto

  const spanElement = document.createElement('span');
  spanElement.textContent = yazarAdi + 'tarafından';

  cardDiv.appendChild(headLineDiv);
  cardDiv.appendChild(author);
  author.appendChild(imgContainer);
  imgContainer.appendChild(imgElement);
  author.appendChild(spanElement);


  return cardDiv;
  // GÖREV 5
  // ---------------------
  // Aşağıda gördüğünüz işaretlemeyi döndürmesi gereken bu fonksiyonu uygulayın.
  // Tek argümanı olarak "anabaslik", "yazarFoto" ve "yazarAdı" özelliklerine sahip bir "makale" nesnesi alır.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  // Bir kullanıcı bir kartı tıkladığında makalenin başlığının konsola kaydedilmesi için click event dinleyicisi ekleyin.
  //
  // <div class="card">
  //   <div class="headline">{ anabaslik }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ yazarFoto }>
  //     </div>
  //     <span>{ yazarAdı } tarafından</span>
  //   </div>
  // </div>
  //
}

const cardEkleyici = (secici) => {
  fetch('http://localhost:5001/api/makaleler')
  .then(response => response.json())
  .then(data => {
    const makaleler = data.makaleler;

    makaleler.forEach(makale => {
      const kart = Card(makale);
      const hedef = document.querySelector(secici);
      hedef.appendChild(kart);
    });
  })
  .catch(error => {
    console.log('makaleler alınamadı!', error)
  });
}

// GÖREV 6
  // ---------------------
  // Tek bağımsız değişkeni olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Makaleleri bu uç noktadan almalıdır: `http://localhost:5001/api/makaleler` (console.log ile test edin!!).
  // Bununla birlikte, makaleler tek bir düzenli dizi halinde organize edilmemiştir. Yanıtı yakından inceleyin!
  // Card bileşenini kullanarak yanıttaki her makale nesnesinden bir kart oluşturun.
  // Her cardı, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
export { Card, cardEkleyici }
