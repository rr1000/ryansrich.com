var app = new Vue({
    el: '#outside',
    data:{
        hikes:[
            {
                hikeName: 'Waterline Trail',
                hikeDate: '2016-11-25',
                hikeTrail: 'trail-waterline',
                hikeLocation: 'Portland, OR',
                hikeDistance: '2.7mi',
                hikeElevation: '731ft',
                hikeCover: '/assets/img/covers/cover-waterline.png'
            },
            {
                hikeName: 'Lower Macleay Park',
                hikeDate: '2016-11-19',
                hikeTrail: 'trail-lower-macleay-park',
                hikeLocation: 'Portland, OR',
                hikeDistance: '5.3mi',
                hikeElevation: '977ft',
                hikeCover: '/assets/img/covers/cover-lower-macleay-park.png'
            },
            {
                hikeName: 'Latourell Falls Loop Trail',
                hikeDate: '2016-10-29',
                hikeTrail: 'trail-latourell-falls-loop-trail',
                hikeLocation: 'Corbett, OR',
                hikeDistance: '2.1mi',
                hikeElevation: '795ft',
                hikeCover: '/assets/img/covers/cover-latourell-falls-loop-trail.png'
            }
        ]
    },
});
