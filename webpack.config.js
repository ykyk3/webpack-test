const path = require('path'); // windowsの場合区切り文字(¥)が違うので、pathに出力させる。
module.exports = {
    // context: `${__dirname}/src`, // entryの起点
    // entry: `${__dirname}/src/index.js`, // ビルドの起点となるパス
    entry: path.join(__dirname, '/src', 'index.js'),
    // 出力先
    output: {
        // path: `${__dirname}/dist`, // 出力先ディレクトリ。絶対パスを指定する必要がある。
        path: path.join(__dirname, '/dist'),
        filename: 'main.js',
    },
    // デフォルトのwebpackではjsしかビルドできない。
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
};

// module.exports.module.rules[0].test = /\.css\$/;
// module.exports.module.rules[0].use = ['style-loader', 'css-loader'];
