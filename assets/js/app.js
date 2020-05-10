
function createCardElement(data){
    
    data.forEach((item) => {
        var cardContainer = document.querySelector('.card-container');       

        var cardHtml = `
            <div class="card">
                <img class="card-image" src="${item.photo}" />
                <p class="card-name">${item.name}</p>
                <div class="card-footer">
                    <span class="card-type"><strong>${item.property_type}</strong></span>
                        <var class="card-price">R$ ${item.price},00/mês</var>
                </div>
            </div>
        `;      
        cardContainer.innerHTML += cardHtml;
    });    
}


const url = 'https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72';
  fetch(url)
  .then(res => res.json())
  .then((data) => {
    let dataResult = data;
    createCardElement(dataResult)
  })
  .catch(function(error) {
    console.log(error);
  })   