var movies = [
    'Beetle Juice',
    'Alice and Wonderland',
    'Edward Scissorhands',    
    'Hocus Pocus',
    'Coraline',
    'Nightmare before Christmas',
    'Pet Sematary',
    'The Amityville Horror',
    'Halloween',
    'House on Haunted Hill',
    'The Shining',
    'Nightmare on Elm Street',
    'Carrie',
    'Death becomes her',
    'The Blob',
    'Corpse Bride',
    'What we do in the shadows',
    'Matilda',
    'IT',
    'Clue',
    'Hellraiser'
]

function randomizeMovie() {
var randomNumber = Math.floor(Math.random() * (movies.length));
document.getElementById('movieDisplay').innerHTML = movies[randomNumber];
}

// document.getElementByID('movieDisplay').innerHTML = movies[randomNumber];