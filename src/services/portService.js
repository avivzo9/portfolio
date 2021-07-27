export const portService = {
    sendEmail,
    getLinks,
}

const gLinks = [
    {
        _id: _makeid(),
        name: 'Jukify',
        url: 'https://jukify-music-app.herokuapp.com',
        img: 'https://jukify-music-app.herokuapp.com/img/jukify-logo.34abe248.png',
        desc: 'Live music stations streaming application (Based on Spotify & Jukebox)'
    },
    {
        _id: _makeid(),
        name: 'Taskman',
        url: 'http://taskman-app.herokuapp.com',
        img: 'https://taskman-app.herokuapp.com/logo192.png',
        desc: 'Task-making application (based on Trello)'
    },
    {
        _id: _makeid(),
        name: 'Meme-gen',
        url: 'https://avivzo9.github.io/Meme-gen/',
        img: 'https://avivzo9.github.io/Meme-gen/img/LOGO.png',
        desc: 'Create your own MEME!'
    },
    {
        _id: _makeid(),
        name: 'Minesweeper',
        url: 'https://avivzo9.github.io/MineSweeper/',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Minesweeper_flag.svg/1024px-Minesweeper_flag.svg.png',
        desc: 'My version of Minsweeper (JS vanilla).'
    },
]

function _makeid(length = 5) {
    var txt = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}

function getLinks() {
    return gLinks;
}

function sendEmail(email) {
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email.from}&su=${email.subject}&body=${email.msg}`)
}
