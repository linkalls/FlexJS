# lightWeightJs

このライブラリは、簡単に使えて機能がすごく少ないことが最大のメリットです。以下に基本的な使用方法を示します。
js を書けない人向けです
あと僕の勉強のために data-\*属性を使ってます

## インストール

cdn から読み込んでください

```html
<script src="https://cdn.jsdelivr.net/gh/linkalls/lightWeightJs/src/index.min.js"></script>
```

## 使い方

### 確認メッセージ機能

HTML 内で[`data-confirm`](index.html)属性を持つ要素を使用します。
もちろん`button`タグだけじゃなくて a タグとかでもうまくいきます。
trigger としてはデフォルトは click にしてます
event として登録されてるものなら何でもいけます

```html
<button data-confirm="メッセージ">buttonを押してね</button>
<button data-confirm="2コメのボタン" data-trigger="mouseover">
  mouseoverだよ
</button>
<button data-confirm="hoverって書いた時だよ" data-trigger="hover">
  mouseoverだけhoverって書いても動くよ mouseoverってすぐ忘れちゃうんだよね
</button>
```



## 特徴

- **簡単に使える**: 初心者でもすぐに使い始められます。
- **軽量**: パフォーマンスに優れています。
- **多機能**: 様々なユースケースに対応しています。

## ライセンス

このプロジェクトは MIT ライセンスのもとで公開されています。
