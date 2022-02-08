import jukifyLogo from '../assets/img/jukify-logo.png'
import taskmanLogo from '../assets/img/taskman-logo.png'
import flavurLogo from '../assets/img/flavur-logo.png'

import jukifyVid from '../assets/video/jukify-gif.gif'
import taskmanVid from '../assets/video/taskman-gif.gif'

export const portService = {
    sendEmail,
    getLinks,
}

const gLinks = [
    {
        _id: _makeId(),
        name: 'Jukify',
        url: 'https://jukify-music-app.herokuapp.com',
        img: jukifyLogo,
        desc: 'Live music streaming application, create art music together and throw a party in different places at the same time!',
        basedOn: 'Jukebox & Spotify',
        gif: jukifyVid,
        tech: 'Vue, VueX, Sass, MongoDB, Node.JS',
    },
    {
        _id: _makeId(),
        name: 'Taskman',
        url: 'http://taskman-app.herokuapp.com',
        img: taskmanLogo,
        desc: 'An advanced Project management tool, collaborate, manage projects and reach new productivity peaks.',
        basedOn: 'Trello',
        gif: taskmanVid,
        tech: 'React, Redux, Sass, MySQL, Node.JS',
    },
    {
        _id: _makeId(),
        name: 'Flavur',
        url: 'https://github.com/avivzo9/flavur',
        img: flavurLogo,
        desc: 'Flavur helps people find local restaurants around their location and provides detailed information about them.',
        basedOn: 'Easy & Google maps',
        // gif: taskmanVid,
        tech: 'React Native, firebase',
    },
    // {
    //     _id: _makeId(),
    //     name: 'Meme-gen',
    //     url: 'https://avivzo9.github.io/Meme-gen/',
    //     img: 'https://avivzo9.github.io/Meme-gen/img/LOGO.png',
    //     desc: 'Create your own MEME!',
    //     basedOn: null,
    //     gif: '',
    //     tech: '',
    // },
    // {
    //     _id: _makeId(),
    //     name: 'Minesweeper',
    //     url: 'https://avivzo9.github.io/MineSweeper/',
    //     img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Minesweeper_flag.svg/1024px-Minesweeper_flag.svg.png',
    //     desc: 'My version of Minsweeper (JS vanilla).',
    //     basedOn: 'Minesweeper',
    //     gif: '',
    //     tech: 'JS Vanilla',
    // },
]

function _makeId(length = 5) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
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
