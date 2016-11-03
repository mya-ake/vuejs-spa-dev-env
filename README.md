# vuejs-spa-dev-env
Vue.jsでSPA(Single Page Application)作るための開発環境的なやつ。

[DEMO](https://mya-ake.com/sample/vuejs-spa)

とりあえずbuildして起動するまで書いておきます。詳細は徐々に。

## Build

### step 1

    npm install

or

    yarn

### step 2

    gulp build


### step 3

    gulp

Google Chromeが立ち上がってサイトが表示されます。
この状態でsrc内のファイルに変更があると自動でブラウザが更新されます。


## About

JavaScriptはWebpackで、CSSはGulpで管理してます。

### 使ってるいろんなもの
* Vue.js 2.0
* vue resource 1.0
* vue router 2.0
* Vuex 2.0
* MDL
* Gulp
* Webpack
* Babel
* Sass
* cssnext
* Browser Sync

※VuexはVueのFlux的なやつですがわかりやすさのために全てをFlux的に書いてるわけじゃないです。

## Author
mya-ake

web:https://mya-ake.com/

Twitter:https://twitter.com/mya_ake

## Version

1.1.0 (Novenber 3, 2016)

## License
The MIT License (MIT)

Copyright (c) 2016 mya-ake
