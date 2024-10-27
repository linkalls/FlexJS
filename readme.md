# lightWeightJs

このライブラリは、簡単に使えて機能がすごく少ないことが最大のメリットです。以下に基本的な使用方法を示します。
jsを書けない人向けです
あと僕の勉強のためにdata-*属性を使ってます

## インストール

cdnから読み込んでください
```html
  <script src="https://cdn.jsdelivr.net/gh/linkalls/lightWeightJs/dist/bundle.js"></script>
```

## 使い方

### 確認メッセージ機能

HTML 内で[`data-confirm`](index.html)属性を持つ要素を使用します。

```html
<button data-confirm="メッセージ">buttonを押してね</button>
```

JavaScript で[`src/index.js`](src/index.js)をインポートします。

```javascript
import "./src/index.js"
```

## ビルド

プロジェクトをビルドするには、以下のコマンドを実行します。

```bash
npm run build
```

このコマンドは、[`esbuild`](https://esbuild.github.io/)を使用して[`src/index.js`](src/index.js)をバンドルし、`dist/bundle.js`に出力します。

## 特徴

- **簡単に使える**: 初心者でもすぐに使い始められます。
- **軽量**: パフォーマンスに優れています。
- **多機能**: 様々なユースケースに対応しています。

## ライセンス

このプロジェクトは MIT ライセンスのもとで公開されています。
