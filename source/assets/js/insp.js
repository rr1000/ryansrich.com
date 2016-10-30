var app = new Vue({
    el: '#insp',
    data:{
        plays:[
            {
                albumBg: 'fangs',
                album: 'The Light',
                link: '//itun.es/us/SJh0ab',
                artist: 'Soft Fangs',
                text: 'Raised in the outskirts of Massachusetts, now living in Brooklyn, Soft Fangs is the latest musical outlet of John Lutkevich. His songwriting, which has been compared to the likes of Elliott Smith, Sparklehorse, Radiohead and Nick Drake, combines introspective and poetic lyricism with fragile',
                source: '//www.explodinginsoundrecords.com/soft-fangs'
            },
            {
                albumBg: 'atrocity',
                album: 'Atrocity Exhibition',
                link: '//itun.es/us/Mlbheb',
                artist: 'Danny Brown',
                text: 'Atrocity Exhibition is the fourth studio album by American hip hop recording artist Danny Brown. It was released on September 27, 2016, by Warp Records. It is primarily produced by British producer Paul White. The album features guest appearances from Kendrick Lamar, Ab-Soul, Earl Sweatshirt',
                source: '//en.wikipedia.org/wiki/Atrocity_Exhibition_(album)'
            }
        ],
        albums:[
            { artist: 'Joy Division', name: 'Closer' },
            { artist: 'Swans', name: 'The Glowing Man' },
            { artist: 'Freddie Gibbs', name: 'Shadow of a Doubt' },
            { artist: 'Crying', name: 'Beyond the Fleeting Gales' }
        ],
        books:[
            {
                class: 'icon i-multiple-signatures',
                name: 'Multiple Signatures: On Designers, Authors, Readers and Users',
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
