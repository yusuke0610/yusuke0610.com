# CLAUDE.md

このファイルは、リポジトリ内で作業する Claude Code (claude.ai/code) へのガイダンスを提供します。

## コマンド

```bash
# 開発サーバー起動
npm run dev

# 本番ビルド
npm run build

# ビルド結果のプレビュー
npm run preview

# Astro型定義の生成（コンテンツファイルを追加した後に実行）
npm run astro sync
```

## アーキテクチャ

**Astro 6.x の静的サイト**で、GitHub Pages でホスティング。`main` ブランチへの push で `.github/workflows/deploy.yml` によって自動デプロイされる。

**Astro 6.x の Content Collections（旧ドキュメントと異なる重要な差異）:**
- 設定ファイルは `src/content.config.ts`（`src/content/config.ts` ではない）
- コレクションには `loader` が必要（`astro/loaders` の `glob()` など）
- Markdown のレンダリングは `astro:content` からインポートした `render(entry)` を使う（`entry.render()` ではない）

**3つのコレクション:**

| コレクション | ディレクトリ | 運用方法 |
|---|---|---|
| `blog` | `src/content/blog/*.md` | 記事ごとに1ファイル追加 |
| `work` | `src/content/work/*.md` | プロジェクトごとに1ファイル追加、`order` フィールドで表示順制御 |
| `about` | `src/content/about/about.md` | 単一ファイル運用（このファイルのみ編集） |

いずれのコレクションも `draft: true` でビルド時に除外される（`about` コレクションを除く）。

**ブログ記事の必須フロントマター:**
```yaml
title: string
description: string
publishedAt: YYYY-MM-DD
tags: [string]   # 省略可、デフォルト []
draft: boolean   # 省略可、デフォルト false
```

**Work MDの必須フロントマター:**
```yaml
title: string
description: string
url: string      # 省略可
github: string   # 省略可
tags: [string]   # 省略可、デフォルト []
order: number    # 省略可、デフォルト 0（昇順ソート）
draft: boolean   # 省略可、デフォルト false
```

**About MDの必須フロントマター:**
```yaml
name: string
role: string
avatarUrl: string  # 省略可
updatedAt: YYYY-MM-DD
```

**スタイリング:** Tailwind CSS v4 を `@tailwindcss/vite` Vite プラグイン経由で使用（`@astrojs/tailwind` ではない）。グローバル CSS は `BaseLayout.astro` で `import '../styles/global.css'` としてインポートしている。

**コンポーネント方針:** レイアウト系は `.astro`、再利用可能な UI は `.tsx`（React）。サイト全体が静的なため、React コンポーネントに `client:*` ディレクティブは不要。
