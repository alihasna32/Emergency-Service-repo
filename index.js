function reuseableConnected (id){
    const connected = document.getElementById(id)
    return connected;
}

// Heart Increase
const hearts = document.getElementsByClassName('card-heard');
const heartHeader = reuseableConnected ('heart')

for (const heart of hearts) {
  heart.addEventListener('click', function(){
    let currentHearts = parseInt(heartHeader.innerText)
    heartHeader.innerText = currentHearts + 1;
  });
}

// call button
// document.getElementById('call-button').addEventListener('click', function(){
//     const cardTitle = reuseableConnected ('card-title').innerText
//     alert('📞 Calling ' + cardTitle)
// })


// call button
reuseableConnected('body').addEventListener('click', function(event){
    if(event.target.className.includes('card-button')){
        const cartButton = event.target;
        // coin decrease
        let coinsElement = cartButton.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.children[0].children[1].children[1].children[0];

        let coins = parseInt(coinsElement.innerText);

        if(coins < 20){
            alert('You have no sufficient coins')
            return;
        }

        coins = coins - 20;
        coinsElement.innerText = coins; 

        // Toggle Right card with dynamic history      
        const time = new Date().toLocaleTimeString();

        let cardTitleElements = cartButton.parentNode.parentNode.children[1].children[0]
        let cardTitles = cardTitleElements.innerText;

        let cardNumbeer = cartButton.parentNode.parentNode.children[1].children[2]
        let cardNumberr = cardNumbeer.innerText;

        const rightCard = document.getElementById('right-card')
        const newCart = document.createElement('div')

        newCart.innerHTML = `
        <div class="p-4 rounded-xl flex justify-between items-center bg-gray-100">
        <div>
        <h1 class="text-[18px] font-semibold">${cardTitles}</h1>
        <p class="font-light">${cardNumberr}</p>
        </div>
        <div>${time}</div>
        </div>
        `
        rightCard.append(newCart)

        reuseableConnected ('clear').addEventListener('click', function(){
            newCart.innerHTML = ''
        })

        // alert
        const cardTitleElement = cartButton.parentNode.parentNode.children[1].children[0]
        const cardTitle = cardTitleElement.innerText;

        const cardNumbers = cartButton.parentNode.parentNode.children[1].children[2]
        const cardNumber = cardNumbers.innerText;
        alert('📞 Calling ' + cardTitle+ ' ' +cardNumber+'...')
    }
    
})


    
