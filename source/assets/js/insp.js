var app = new Vue({
    el: '#insp',
    data:{
        plays:[
            {
                albumBg: 'young',
                album: 'Come On Die Young',
                link: '//itun.es/us/ksrEp',
                artist: 'Mogwai',
                text: 'Come On Die Young (also known as CODY), is the second full-length studio album by the Scottish post-rock band Mogwai, released on 29 March 1999 by Chemikal Underground.',
                source: 'https://en.wikipedia.org/wiki/Come_On_Die_Young'
            },
            {
                albumBg: 'yes',
                album: 'Yes Lawd!',
                link: '//itun.es/us/GrfZeb',
                artist: 'NxWorries',
                text: 'Yes Lawd! is the debut studio album by hip hop duo NxWorries, which consists of vocalist Anderson .Paak and producer Knxwledge. It was released on October 21, 2016, by Stones Throw Records. It is supported by four singles, "Suede", "Link Up", "Lyk Dis", and "Get Bigger / Do U Luv".',
                source: '//en.wikipedia.org/wiki/Yes_Lawd!'
            }
        ],
        albums:[
            { artist: 'Danny Brown', name: 'Attrocity Exhibition' },
            { artist: 'Soft Fans', name: 'The Light' },
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
