This is a [Next.js](https://nextjs.org/) blog using [Notions Public API](https://developers.notion.com).

__Demo:__ [https://notion-blog-nextjs-coral.vercel.app](https://notion-blog-nextjs-coral.vercel.app)

__How-it-works/Documentation:__ [https://samuelkraft.com/blog/building-a-notion-blog-with-public-api](https://samuelkraft.com/blog/building-a-notion-blog-with-public-api)

## Getting Started

First, follow Notions [getting started guide](https://developers.notion.com/docs/getting-started) to get a `NOTION_TOKEN` and a `NOTION_DATABASE_ID`, then add them to a file called `.env.local`.

As a reference here's the Notion table I am using: https://www.notion.so/5b53abc87b284beab0c169c9fb695b4d?v=e4ed5b1a8f2e4e12b6d1ef68fa66e518

```
NOTION_TOKEN=
NOTION_DATABASE_ID=
```

Install dependencies

```bash
npm install
# or
yarn
```

Start the server with

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### tweet埋め込み
https://blog.35d.jp/2020-04-10-notion-blog-twitter-card
これを参考に


### deploy

```bash
yarn deploy
```

### analitics
以下の記事を参考に実装でできた
https://zenn.dev/rh820/articles/8af90011c573fe

https://analytics.google.com/
Search Consoleも登録
https://search.google.com/search-console

### sitemap

```bash
yarn build 
```
でsitemap作成される。これを実施後にdeployすればOK


### ads
https://www.google.com/adsense/


