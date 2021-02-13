let play_board = ["", "", "", "", "", "", "", "", "", ""];
player = 'X';
bot = 'O';
result = 0;
var count = 0;

function onClick1() {
    if ( result === 1 ) {
        return false;
    }
    image1.src = 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Transparent_X.png';
    play_board[1] = player;
    image1.removeEventListener('click', onClick1);
    check();
    botMove();
}

function onClick2() {
    if ( result === 1 ) {
        return false;
    }
    image2.src = 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Transparent_X.png';
    play_board[2] = player;
    image2.removeEventListener('click', onClick2);
    check();
    botMove();
}

function onClick3() {
    if ( result === 1 ) {
        return false;
    }
    image3.src = 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Transparent_X.png';
    play_board[3] = player;
    image3.removeEventListener('click', onClick3);
    check();
    botMove();
}

function onClick4() {
    if ( result === 1 ) {
        return false;
    }
    image4.src = 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Transparent_X.png';
    play_board[4] = player;
    image4.removeEventListener('click', onClick4);
    check();
    botMove();
}

function onClick5() {
    if ( result === 1 ) {
        return false;
    }
    image5.src = 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Transparent_X.png';
    play_board[5] = player;
    image5.removeEventListener('click', onClick5);
    check();
    botMove();
}

function onClick6() {
    if ( result === 1 ) {
        return false;
    }
    image6.src = 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Transparent_X.png';
    play_board[6] = player;
    image6.removeEventListener('click', onClick6);
    check();
    botMove();
}

function onClick7() {
    if ( result === 1 ) {
        return false;
    }
    image7.src = 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Transparent_X.png';
    play_board[7] = player;
    image7.removeEventListener('click', onClick7);
    check();
    botMove();
}

function onClick8() {
    if ( result === 1 ) {
        return false;
    }
    image8.src = 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Transparent_X.png';
    play_board[8] = player;
    image8.removeEventListener('click', onClick8);
    check();
    botMove();
}

function onClick9() {
    if ( result === 1 ) {
        return false;
    }
    image9.src = 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Transparent_X.png';
    play_board[9] = player;
    image9.removeEventListener('click', onClick9);
    check();
    botMove();
}

function botMove() {
    do {
        selected = Math.floor(Math.random() * 9 );
        selected += 1
        if (count === 4) {
            return;
        }
    } while (play_board[selected] != '');

    count++;

    if ( selected === 1 ) {
        const image1 = document.querySelector("img[data-index='1']");
        image1.src = 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Black_circle.png';
        play_board[1] = bot;
        image1.removeEventListener('click', onClick1);
        check();
    }
    else if ( selected === 2 ) {
        const image2 = document.querySelector("img[data-index='2']");
        image2.src = 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Black_circle.png';
        play_board[2] = bot;
        image2.removeEventListener('click', onClick2);
        check();
    }
    else if ( selected === 3 ) {
        const image3 = document.querySelector("img[data-index='3']");
        image3.src = 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Black_circle.png';
        play_board[3] = bot;
        image3.removeEventListener('click', onClick3);
        check();
    }
    else if ( selected === 4 ) {
        const image4 = document.querySelector("img[data-index='4']");
        image4.src = 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Black_circle.png';
        play_board[4] = bot;
        image4.removeEventListener('click', onClick4);
        check();
    }
    else if ( selected === 5 ) {
        const image5 = document.querySelector("img[data-index='5']");
        image5.src = 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Black_circle.png';
        play_board[5] = bot;
        image5.removeEventListener('click', onClick5);
        check();
    }
    else if ( selected === 6 ) {
        const image6 = document.querySelector("img[data-index='6']");
        image6.src = 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Black_circle.png';
        play_board[6] = bot;
        image6.removeEventListener('click', onClick6);
        check();
    }
    else if ( selected === 7 ) {
        const image7 = document.querySelector("img[data-index='7']");
        image7.src = 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Black_circle.png';
        play_board[7] = bot;
        image7.removeEventListener('click', onClick7);
        check();
    }
    else if ( selected === 8 ) {
        const image8 = document.querySelector("img[data-index='8']");
        image8.src = 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Black_circle.png';
        play_board[8] = bot;
        image8.removeEventListener('click', onClick8);
        check();
    }
    else if ( selected === 9 ) {
        const image9 = document.querySelector("img[data-index='9']");
        image9.src = 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Black_circle.png';
        play_board[9] = bot;
        image9.removeEventListener('click', onClick9);
        check();
    }
}

function check() {

    // PLAYER
    // 1,2,3 and 1,5,9 and 1,4,7
    if ( play_board[1] === player ) {
        if ( play_board[2] === player ) {
            if ( play_board[3] === player ){
                document.getElementById('result').innerHTML = 'You Win !';
                result = 1;
            }
        }
        else if ( play_board[5] === player ) {
            if ( play_board[9] === player ) {
                document.getElementById('result').innerHTML = 'You Win !';
                result = 1;
            }
        }
        else if ( play_board[4] === player ) {
            if ( play_board[7] === player ) {
                document.getElementById('result').innerHTML = 'You Win !';
                result = 1;
            }
        }
    }

    // 2,5,8
    if( play_board[2] === player ) {
        if ( play_board[5] === player ) {
            if ( play_board[8] == player ){
                document.getElementById('result').innerHTML = 'You Win !';
                result = 1;
            }
        }
    }

    // 3,5,7 and 3,6,9
    if( play_board[3] === player ) {
        if ( play_board[5] === player ) {
            if ( play_board[7] === player ){
                document.getElementById('result').innerHTML = 'You Win !';
                result = 1;
            }
        }
        else if ( play_board[6] === player ) {
            if ( play_board[9] === player ) {
                document.getElementById('result').innerHTML = 'You Win !';
                result = 1;
            }
        }
    }

    // 4,5,6
    if( play_board[4] === player ) {
        if ( play_board[5] === player ) {
            if ( play_board[6] === player ){
                document.getElementById('result').innerHTML = 'You Win !';
                result = 1;
            }
        }
    }

    // 7,8,9
    if( play_board[7] === player ) {
        if ( play_board[8] === player ) {
            if ( play_board[9] === player ){
                document.getElementById('result').innerHTML = 'You Win !';
                result = 1;
            }
        }
    }


    // BOT
    // 1,2,3 and 1,5,9 and 1,4,7
    if ( play_board[1] === bot ) {
        if ( play_board[2] === bot ) {
            if ( play_board[3] === bot ){
                document.getElementById('result').innerHTML = 'Computer Win !';
                result = 1;
            }
        }
        else if ( play_board[5] === bot ) {
            if ( play_board[9] === bot ) {
                document.getElementById('result').innerHTML = 'Computer Win !';
                result = 1;
            }
        }
        else if ( play_board[4] === bot ) {
            if ( play_board[7] === bot ) {
                document.getElementById('result').innerHTML = 'Computer Win !';
                result = 1;
            }
        }
    }

    // 2,5,8
    if( play_board[2] === bot ) {
        if ( play_board[5] === bot ) {
            if ( play_board[8] === bot ){
                document.getElementById('result').innerHTML = 'Computer Win !';
                result = 1;
            }
        }
    }

    // 3,5,7 and 3,6,9
    if( play_board[3] === bot ) {
        if ( play_board[5] === bot ) {
            if ( play_board[7] === bot ){
                document.getElementById('result').innerHTML = 'Computer Win !';
                result = 1;
            }
        }
        else if ( play_board[6] === bot ) {
            if ( play_board[9] === bot ) {
                document.getElementById('result').innerHTML = 'Computer Win !';
                result = 1;
            }
        }
    }

    // 4,5,6
    if( play_board[4] === bot ) {
        if ( play_board[5] === bot ) {
            if ( play_board[6] === bot ){
                document.getElementById('result').innerHTML = 'Computer Win !';
                result = 1;
            }
        }
    }

    // 7,8,9
    if( play_board[7] === bot ) {
        if ( play_board[8] === bot ) {
            if ( play_board[9] === bot ){
                document.getElementById('result').innerHTML = 'Computer Win !';
                result = 1;
            }
        }
    }

}

    const image1 = document.querySelector("img[data-index='1']");
    image1.addEventListener('click', onClick1);

    const image2 = document.querySelector("img[data-index='2']");
    image2.addEventListener('click', onClick2);

    const image3 = document.querySelector("img[data-index='3']");
    image3.addEventListener('click', onClick3);

    const image4 = document.querySelector("img[data-index='4']");
    image4.addEventListener('click', onClick4);

    const image5 = document.querySelector("img[data-index='5']");
    image5.addEventListener('click', onClick5);

    const image6 = document.querySelector("img[data-index='6']");
    image6.addEventListener('click', onClick6);

    const image7 = document.querySelector("img[data-index='7']");
    image7.addEventListener('click', onClick7);

    const image8 = document.querySelector("img[data-index='8']");
    image8.addEventListener('click', onClick8);

    const image9 = document.querySelector("img[data-index='9']");
    image9.addEventListener('click', onClick9);