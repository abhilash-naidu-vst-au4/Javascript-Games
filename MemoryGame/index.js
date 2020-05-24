document.addEventListener('DOMContentLoaded', () => {
            

    // Options on Grid
    const cardGridArray = [ 
        {
            name: 'kiwi',
            img: 'images_fruits/kiwi.png'

        }, {
            name: 'kiwi',
            img: 'images_fruits/kiwi.png'

        }, {
            name: 'pineapple',
            img: 'images_fruits/pineapple.png'
        }, {
            name: 'pineapple',
            img: 'images_fruits/pineapple.png'
        }, {
            name: 'green apple',
            img: 'images_fruits/green-apples.png'
        }, {
            name: 'green apple',
            img: 'images_fruits/green-apples.png'
        }, , {
            name: 'banana',
            img: 'images_fruits/banana.png'
        }, {
            name: 'banana',
            img: 'images_fruits/banana.png'
        }, {
            name: 'apple',
            img: 'images_fruits/apple.png'
        }, {
            name: 'apple',
            img: 'images_fruits/apple.png'
        }, {
            name: 'strawberry',
            img: 'images_fruits/strawberry.png'
        }, {
            name: 'strawberry',
            img: 'images_fruits/strawberry.png'
        }
    
    ]


    cardGridArray.sort(() => 0.5 -  Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#score')
    var cardsChosen = []
    var cardsChosenId = []
    const cardsWon = []

      // Create Grid...

    function createGrid() {
        for( let i = 0; i < cardGridArray.length - 1; i++) {

            var card = document.createElement('img')
            card.setAttribute('src', 'images_fruits/gridImage.png')
            card.setAttribute('id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card) 
        }
    }

    // Check For Match


    function checkForMatch() {

        var cards =  document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];

        if(optionOneId == optionTwoId) {

            cards[optionOneId].setAttribute('src', 'images_fruits/gridImage.png')
            cards[optionTwoId].setAttribute('src', 'images_fruits/gridImage.png')
            
            alert('Image Clicked Twice..')
          }
          else if (cardsChosen[0] === cardsChosen[1]) {

            alert('Perfect Match...')
            cards[optionOneId].setAttribute('src', 'images_fruits/blank_white.png')
            cards[optionTwoId].setAttribute('src', 'images_fruits/blank_white.png')
            cards[optionOneId].removeEventListener('click', flipCard)
            cards[optionTwoId].removeEventListener('click', flipCard)
            cardsWon.push(cardsChosen)
          } else {

            cards[optionOneId].setAttribute('src', 'images_fruits/gridImage.png')
            cards[optionTwoId].setAttribute('src', 'images_fruits/gridImage.png')
            alert('Sorry, Try again...')
          }
          cardsChosen = []
          cardsChosenId = []
          resultDisplay.textContent = cardsWon.length

          if(cardsWon.length === (cardGridArray.length - 1)/2) {
            resultDisplay.textContent = ' 6, Congratulations! You Won...'
          }
        
    }
           // Flip Your Card
        function flipCard() {
        var cardId = this.getAttribute('id');
        cardsChosen.push(cardGridArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cardGridArray[cardId].img)
        if(cardsChosen.length === 2) {
            setTimeout(checkForMatch, 100)

        }
    }

    createGrid()


})

