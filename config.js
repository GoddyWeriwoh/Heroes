const expressDomain = 'http://localhost'; // 'http://172.18.0.8'; // Change me
const expressPort = '3000'; // Change me
const expressDomainAndPort = `${expressDomain}:${expressPort}`;

module.exports = {
    browserSync: {
        proxy: expressDomainAndPort
    },
    express: {
        domain: expressDomain,
        port: expressPort
    },
    html: {
        outDir: './dist',
        htmlMinifyOptions : {
            includeAutoGeneratedTags: true,
            removeAttributeQuotes: true,
            removeComments: true,
            removeRedundantAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true,
            sortClassName: true,
            useShortDoctype: true,
            collapseWhitespace: true
        }
    },
    css: {
        outDir: './dist/css'
    },
    js : {
       outDir: './dist/js/pages'
    }
}