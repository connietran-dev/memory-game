document.addEventListener('DOMContentLoaded', () => {

    // Card options
    const cardArray = [
        {
            name: 'cake',
            img: 'gifs/cake.gif'
        },
        {
            name: 'cake',
            img: 'gifs/cake.gif'
        },
        {
            name: 'cookie',
            img: 'gifs/cookie.gif'
        },
        {
            name: 'cookie',
            img: 'gifs/cookie.gif'
        },
        {
            name: 'cotton-candy',
            img: 'gifs/cotton-candy.gif'
        },
        {
            name: 'cotton-candy',
            img: 'gifs/cotton-candy.gif'
        },
        {
            name: 'doughnut',
            img: 'gifs/doughnut.gif'
        },
        {
            name: 'doughnut',
            img: 'gifs/doughnut.gif'
        },
        {
            name: 'ice-cream',
            img: 'gifs/ice-cream.gif'
        },
        {
            name: 'ice-cream',
            img: 'gifs/ice-cream.gif'
        },
        {
            name: 'watermelon',
            img: 'gifs/watermelon.gif'
        },
        {
            name: 'watermelon',
            img: 'gifs/watermelon.gif'
        }
    ]

    const grid = document.querySelector('.grid');
    var cardsChosen = [];
    var cardsChosenId = [];

    // Create the board
    function createBoard() {
        // For cardArray
        for (let i = 0; i < cardArray.length; i++) {
            
            // Set images with data-id = index
            var card = document.createElement('img');
            card.setAttribute('src', 'images/blank.png');
            card.setAttribute('data-id', i);
            card.setAttribute('class', 'card');

            card.addEventListener('click', flipCard);

            grid.appendChild(card);
        };

    };

    // Flip card function
    function flipCard() {
        
        // When flipped, get data-id of img
        var cardId = this.getAttribute('data-id');
        
        // Push chosen card onto arrays
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        
        // Set image based on data-id
        this.setAttribute('src', cardArray[cardId].img);

        // If user has chosen 2 cards, run checkforMatch function
        // setTimeout to 500 ms give some buffer time
        if (cardsChosen.length === 2) {
            setTimeout(checkforMatch, 500);
        }

    }

    createBoard();

});
