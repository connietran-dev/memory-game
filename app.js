document.addEventListener('DOMContentLoaded', () => {

    // Array for card options
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

    // VARIABLES
    const scoreDiv = document.querySelector('#score');
    const grid = document.querySelector('.grid');
    const cardsChosen = [];
    const cardsChosenId = [];
    const cardsWon = [];


    // CALL FUNCTIONS
    createBoard();


    // DEFINE FUNCTIONS

    // Create the board
    function createBoard() {

        // For cards in cardArray
        for (let i = 0; i < cardArray.length; i++) {

            // Create back of cards with blank.png
            var card = document.createElement('img');
            card.setAttribute('src', 'images/blank.png');
            // And set data-id = index
            card.setAttribute('data-id', i);
            card.setAttribute('class', 'card');

            card.addEventListener('click', flipCard);

            grid.appendChild(card);
        };

    };


    // Flip card function - When card clicked - 
    function flipCard() {

        // Get data-id of img
        var cardId = this.getAttribute('data-id');

        // Push chosen card onto arrays to later checkForMatch()
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);

        console.log(cardsChosen);
        console.log(cardsChosenId);

        // Set front of card with image out of cardArray based on clicked data-id
        this.setAttribute('src', cardArray[cardId].img);

        // If user has chosen 2 cards, run checkforMatch()
        if (cardsChosen.length === 2) {

            // setTimeout to 500 ms give some buffer time
            setTimeout(checkforMatch, 500);
        }

    }


    // Check for matches function
    function checkforMatch() {
        var cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];

        // If first card matches second card
        if (cardsChosen[0] === cardsChosen[1]) {

            // Show match message
            var matchMessage = document.createElement('p');
            matchMessage.innerText = 'You found a match!';
            matchMessage.setAttribute('class', 'matchMessage');
            scoreDiv.appendChild(matchMessage);

            // And assign white.png to make them "disappear"
            cards[optionOneId].setAttribute('src', 'images/white.png');
            cards[optionTwoId].setAttribute('src', 'images/white.png');

            // And push 2 chosen cards to cardsWon array to be stored
            cardsWon.push(cardsChosen);

            // If they don't match
        } else {

            // Show mismatch message
            var mismatchMessage = document.createElement('p');
            mismatchMessage.innerText = "Sorry! Try again";
            mismatchMessage.setAttribute('class', 'matchMessage');
            scoreDiv.appendChild(mismatchMessage);

            //  And give them blank.png to "reset" them
            cards[optionOneId].setAttribute('src', 'images/blank.png')
            cards[optionTwoId].setAttribute('src', 'images/blank.png')

        }

        // After checking match, reset arrays to start again
        cardsChosen = [];
        cardsChosenId = [];

    }

});
