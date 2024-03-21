# citymobile.co.jp

本サイトはWordpressオリジナルテーマの開発となります。<br>
管理画面からの変更は各自の環境には反映しないので、プルリクを出すときに変更した点を記載してください。

<br>
<br>

# セットアップ作業

1. ローカルにWordpress環境を構築してAll In One WP Migrationプラグインを有効にします。<br>

2. slackに置いてある All In One WP Migrationのファイルをローカル環境にインポートしてください。<br>

3. Wordpressにログインします。ログイン情報は以下となります。<br>
```
ユーザー名：pints
パスワード：b1JoEXp3gdeu$k2A(e9ik(Pu
```
4. エクスプローラーで`Local Sites\サイト名\app\public\wp-content\themes\citymobile`に移動して、`citymobile`フォルダにあるすべてのファイルを削除してフォルダ内を空にしてください。（clone準備）<br>

5. VSCodeで`Local Sites\サイト名\app\public\wp-content\themes\citymobile`ディレクトリに移動して、以下コマンドを打ってgithub上のファイルをダウンロードしてきます<br>

```
git clone https://github.com/NozomiKatagiri/citymobile.co.jp.git
```
<br>

6. `\citymobile\citymobile.co.jp`の中にある全てのファイルを、`\citymobile\`に移動します。（.gitフォルダも全部です）<br>`citymobile.co.jp`フォルダは空になるので削除してください。<br>

7. VSCodeで`Local Sites\サイト名\app\public\wp-content\themes\citymobile`ディレクトリに移動して、mainブランチから作業ブランチを切って、プッシュできるかご確認ください。
<br>

※上記の手順でうまくいかない場合は連絡ください。


<br>
<br>

# 全体ファイル構成
本サイトはWordpressサイトのオリジナルテーマにて構成されています。
```
citymobile
　├ assets
　│　├ css　サイトで使用するCSSファイルを纏めています
　│　│　└ style.css　全体CSS
　│　│　└ ライブラリ.css ダウンロードしたライブラリを使用する際はこのディレクトリに置いてください
　│　├ images commonは直下に。各ページで使用する画像はパスと同じ名前のフォルダを作って管理してください
　│　│　├ company 会社案内とその下層ページで使用する画像はこの中に入れてください
　│　│　└ service サービスとその下層ページで使用する画像はこの中に入れてください
　│　└ js サイトで使用するjsファイルを纏めています。
　│　
　├ sass　コンパイル前のSassファイルを纏めています。
　├ front-page.php トップページ
　├ page-about.php　下層ページファイル
　└ template テンプレートとして読み込ませるファイルを格納します。
　 　├ cta.php
　 　└ related-content.php
```
- 階層は以下ディレクトリマップに準ずる<br>
https://docs.google.com/spreadsheets/d/1udYscekPgRqQ_ysDOT8A1zdwOrlY_905/edit#gid=1625543124
- Sass下層は以下の命名規則に従いFLOCSSでのファイル構成とする


<br>
<br>

# スタイル記述方法

- **命名規則：BEM・FLOCSS**
- **記述方法：Sassコーディング**

## Sassファイル構成
```
scss
　├ foundation
　│　├ _base.scss　全体に対するスタイル
　│　├ _reset.scss リセットスタイル
　│　└ _variables.scss 変数とmixinをまとめるファイル
　├ layout
　│　├ _header.scss レイアウト及びheaderのスタイル
　│　├ _footer.scss　レイアウト及びfooterのスタイル
　│　└ _main.scss　　headerとfooter以外のレイアウト及びスタイル
　└ object
　 　├ component　共通で使用したいパーツ用のスタイル
　 　│  ├ _btn.scss
　 　│  └_title.scss
　 　├ project　各ページごとのスタイル（他のページで使わない）
　 　│  ├ _top.scss
　 　│  └_about.scss
　 　└ utility　上記に当てはまらない最小のスタイル（改行やマージン用など）
　　　　  ├ _color.scss
　　　　  └ _font.scss
```
<br>
<br>

# メディアクエリについて
本サイトはモバイルファーストでの記述をしています。スマホからのコーディングを行ってください。<br>
ブレイクポイント及び、メディアクエリはvariablesファイルで管理しています。
<br>

## ブレイクポイント変数名
```css
$sp: 767px;
$tab: 768px;
$lt: 1024px;
$pc: 1440px;
```
<br>

## メディアクエリの指定方法
【1】各Sassファイルにて_variables.scssの読み込みを行ってください。相対パスは適宜合わせてください。
```css
@use'../../foundation/variables'as v;
```

【2】各Sassファイル内で、ブレイクポイントを指定してください。
```css

.クラス名{
    /* スマホの時 */

     @include v.tab{
        /* 768px以上の時 */
     }
     @include v.lt{
        /* 992px以上の時 */
     }
     @include v.pc{
        /* //1440px以上の時 */
     }
}
```
<br>
<br>

# 各ファイルで使用する変数及びmixinについて

変数とmixinは全てvariablesファイルで管理してください。<br>
※mixinが増えてきたりvariablesが煩雑になってきたときはファイルを切り分けます。

## variablesの読み込みルール
variablesを@useで呼び出す際は、名前空間を `v` と定義してください。<br>


```scss

/* 呼び出し */
@use'../../foundation/variables'as v;

/* 使用時 */
.クラス名{
    color: v.$green;
}

```
<br>
<br>
