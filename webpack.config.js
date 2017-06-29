module.exports = {
    entry: './src/app.js',
    output: {
        path: __dirname,
        filename: './dist/bundle.js'
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        }
    }
};
