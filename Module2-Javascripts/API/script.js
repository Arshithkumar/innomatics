const cont=document.querySelector('.container')

function fetchApiData(){
    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'

    //promise part
    fetch(url)
    .then(response=>{
        return response.json();
    }).then(data=>{
        console.log(data);
        //create card
        crateCards(data)
    })
}

fetchApiData()

function crateCards(data)
{
    data.forEach((coin) => {
        const div = document.createElement('div')

        div.classList.add('card')

        const img = document.createElement('img')
        //img.src='https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579'
        img.src = coin.image

        const headline= document.createElement('h1')
        //headline.innerHTML="Bitcoin"
        headline.innerHTML=coin.name

        div.appendChild(img)
        cont.appendChild(div)
        div.appendChild(headline)
    });
}


