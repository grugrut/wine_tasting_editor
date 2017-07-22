var Vue = require('vue');

new Vue({
    el: '#app',
    data: {
        text: 'Wine tasting editor',
        type: 'red',
        clarities: [
            { text: '澄んだ', red: true, white: true},
            { text: '深みのある', red: true, white: false },
            { text: 'やや濁った', red:true, white:true },
            { text: '濁った' , red:false, white:true}
        ]
    }
});
