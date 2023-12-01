const getElement = async () => {
    const data = await fetch('./data/indexElem.json');
    const elements = await data.json();
    let news = document.querySelector('#main');
    elements.forEach((element) => {
      news.innerHTML +=  `
      <aside class="${element.clase}">
      <img src="Imagenes/${element.image}.jpg" alt="Error Img" class="bertie"><br>
          <div class="section">
              <article>
                  <h2 class="whi">${element.title}</h2>
                  <div>
                      <p class="descripcion">
                          ${element.descripcion}
                      </p>
                      <a href="${element.link}" target="_blank" class="custom-button">Leer Mas...</a>
                  </div>
              </article>
          </div>
      </aside>
      <br>
      <hr>
      <br>
      `;
    });
  }
  
  getElement();