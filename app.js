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

    // Create the board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img');
            card.setAttribute('src', 'images/blank.png');
            card.setAttribute('data-id', i);
            card.setAttribute('class', 'card');
            // card.addEventListener('click', flipCard);
            grid.appendChild(card);
        };

    };

    createBoard();

});
