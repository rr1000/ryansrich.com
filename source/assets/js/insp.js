var app = new Vue({
    el: '#insp',
    data:{
        plays:[
            {
                albumBg: 'shadow',
                album: 'Shadow of a Doubt',
                link: '//itun.es/us/H8SZ-',
                artist: 'Freddie Gibbs',
                text: 'Shadow of a Doubt received critical acclaim from music critics. At Metacritic, which assigns a normalized rating out of 100 to reviews from mainstream critics, the album received an average score of 78, based on 12 reviews, which indicates "generally favorable reviews"',
                source: '//en.wikipedia.org/wiki/Shadow_of_a_Doubt_(album)'
            },
            {
                albumBg: 'gales',
                album: 'Beyond the Fleeting Gales',
                link: 'https://itun.es/us/OcAweb',
                artist: 'Crying',
                text: 'Crying is an American rock band from Purchase, New York.',
                source: '//en.wikipedia.org/wiki/Crying_(band)'
            }
        ],
        albums:[
            { artist: "Joy Division", name: "Closer" },
            { artist: "Swans", name: "The Glowing Man" }
        ]
    }
});
