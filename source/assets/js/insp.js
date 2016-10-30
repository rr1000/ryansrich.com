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
        ],
        books:[
            {
                class: 'icon i-multiple-signatures',
                name: "Multiple Signatures: On Designers, Authors, Readers and Users",
                author: "Michael Rock"
            },
            {
                class: 'icon i-branded-interactions',
                name: 'Branded Interactions: Creating the Digital Experience',
                author: 'Marco Spies'
            },
            {
                class: 'icon i-visual-display',
                name: 'The Visual Display of Quantitative Information',
                author: 'Edward Tufte'
            },
            {
                class: 'icon i-universal-principles',
                name: 'Universal Principles of Design',
                author: 'William Lidwell &amp; Kritina Holden'
            },
            {
                class: 'icon i-the-interface',
                name: 'The Interface: IBM and the Transformation of Corporate Design',
                author: 'John Harwood'
            },
            {
                class: 'icon i-change-design',
                name: 'Change by Design',
                author: 'Tim Brown'
            },
            {
                class: 'icon i-thoughts-design',
                name: 'Thoughts on Design',
                author: 'Paul Rand'
            }
        ]
    },
});
