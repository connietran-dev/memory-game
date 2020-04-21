document.addEventListener('DOMContentLoaded', () => {

    // Array for card options
    // Create two of each card
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

    // Randomize cardArray
    cardArray.sort(() => 0.5 - Math.random());


    // VARIABLES
    const scoreDiv = document.querySelector('#score');
    const resultSpan = document.querySelector('#result');
    const grid = document.querySelector('.grid');
    var cardsChosen = [];
    var cardsChosenId = [];
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

        console.log("cardsChosen: ", cardsChosen);
        console.log("cardsChosenId: ", cardsChosenId);

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

            setTimeout(() => scoreDiv.removeChild(matchMessage), 1000);

            // And assign white.png to make them "disappear"
            cards[optionOneId].setAttribute('src', 'images/white.png');
            cards[optionTwoId].setAttribute('src', 'images/white.png');

            // And push 2 chosen cards to cardsWon array to be stored
            cardsWon.push(cardsChosen);
            console.log("cardsChosen: ", cardsChosen);
            console.log("cardsWon: ", cardsWon);
            console.log("cardsWon.length: ", cardsWon.length);


        // If they don't match
        } else {

            // Show mismatch message
            var mismatchMessage = document.createElement('p');
            mismatchMessage.innerText = "Sorry! Try again";
            mismatchMessage.setAttribute('class', 'matchMessage');
            scoreDiv.appendChild(mismatchMessage);

            setTimeout(() => scoreDiv.removeChild(mismatchMessage), 1000);

            //  And give them blank.png to "reset" them
            cards[optionOneId].setAttribute('src', 'images/blank.png')
            cards[optionTwoId].setAttribute('src', 'images/blank.png')

        }

        // After checking match, reset arrays to start again
        cardsChosen = [];
        cardsChosenId = [];

        // Then display score result
        displayResult();

    }


    // Display score result
    function displayResult() {

        // Score is 1 point for every pair of cards in cardsWon array
        resultSpan.textContent = cardsWon.length;

        // If cardsWon is the same length as half of the cardsArray, player has chosen all the cards and has won
        if (cardsWon.length === cardArray.length / 2) {
            var winMessage = document.createElement('p');

            // Show congrats message after 1 second to give matchMessage chance to display 
            // Here, I am trying a different style of function for setTimeout
            setTimeout(function() {
                winMessage.innerText = "Congratulations. You win!";
                winMessage.setAttribute('class', 'matchMessage');
                scoreDiv.appendChild(winMessage);

                var restartForm = document.createElement('form');
                var restartBtn = document.createElement('button');
                restartBtn.innerText = "Restart Game";
                scoreDiv.appendChild(restartForm);
                restartForm.appendChild(restartBtn);

            }, 1000);

        }
    }

});
