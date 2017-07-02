var Vue = require('vue');

new Vue({
    el: '#app',
    data: {
        text: 'Wine tasting editor',
        clarities: [
            { text: '澄んだ' },
            { text: '深みのある' },
            { text: 'やや濁った' }
        ]
    }
});
