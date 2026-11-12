# NyanPunch Blog

흰 배경과 초록색 포인트로 만든 Astro 정적 블로그입니다. Markdown 글, 카테고리 필터, 검색, 다크 모드, 프로젝트 소개, RSS와 사이트맵을 지원합니다.

## 로컬 실행

Node.js 22.12 이상을 권장합니다.

```bash
npm ci
npm run dev
```

검증과 빌드:

```bash
npm run check
npm run build
npm run preview
```

## 글 작성

`src/content/posts/`에 고유한 영문 파일명으로 Markdown 파일을 추가하세요. 파일명은 글 주소가 됩니다. 예를 들어 `my-first-post.md`는 `/posts/my-first-post/`로 배포됩니다.

```markdown
---
title: "첫 번째 개발 기록"
description: "글 목록과 검색 결과에 표시할 짧은 소개"
date: 2026-11-12
category: "개발 기록"
tags: ["블로그", "Astro"]
draft: false
sample: false
---

## 시작하며

여기에 글을 작성합니다.
```

카테고리: `Python`, `컴퓨터 비전`, `데이터 분석`, `개발 기록`.

- `draft: true`인 글과 미래 날짜의 글은 빌드에서 제외합니다. 예약일이 되어도 자동 재빌드되지는 않으므로 그날 push 또는 Actions 수동 실행이 필요합니다.
- `sample: true`인 글은 '예시 글'로 표시하고 검색 색인을 차단하며 RSS에서 제외합니다.
- 기본 제공하는 세 글은 예시입니다. 본인의 글로 교체할 때 `sample: false`로 바꾸고, `astro.config.mjs`의 사이트맵 제외 목록에서도 해당 파일명을 제거하세요. 새 글은 기본적으로 사이트맵에 포함됩니다.
- 이미지 파일은 `public/images/`에 넣고 `![설명](/images/파일명.png)`으로 삽입합니다.
- 글을 공개한 뒤에는 파일명을 유지하면 기존 URL이 보존됩니다.

## GitHub Pages 배포

1. GitHub 저장소 **Settings → Pages → Build and deployment → Source**를 **GitHub Actions**로 설정합니다. 기존 `gh-pages` 브랜치 배포에서 전환하는 작업입니다.
2. `main` 브랜치에 push하면 `.github/workflows/deploy.yml`이 타입 검사와 빌드를 거쳐 공식 Pages 배포 작업으로 게시합니다.
3. Pull Request에서는 검사와 빌드만 수행합니다. 수동 배포는 **Actions → Deploy blog to GitHub Pages → Run workflow**에서 실행합니다.

주소: https://nyanpunch.github.io/

기존 `gh-pages` 브랜치는 백업으로 남겨 두어도 됩니다. 프레임워크 이전 전 소스는 Git 이력에 보존됩니다.

## 검색 노출

- 글별 제목·설명, canonical, Open Graph, BlogPosting 구조화 데이터가 생성됩니다.
- `public/robots.txt`, `/sitemap-index.xml`, `/rss.xml`이 포함됩니다.
- Google Search Console에 사이트를 추가하고 사이트맵을 제출하세요. 인증 메타 태그는 `src/layouts/Base.astro`의 `<head>`에 넣거나, 인증 HTML 파일을 `public/`에 추가합니다.
- 검색 노출과 광고 승인은 보장되지 않습니다.

## 프로필과 프로젝트 수정

- 사이트 이름·이메일·GitHub 주소: `src/config.ts`
- 자기소개: `src/pages/about.astro`
- 프로젝트 내용·자료: `src/data/projects.ts`
- 기존 포트폴리오에 있던 완성된 프로젝트 3개를 표시합니다. 예시 링크가 있던 4번 항목은 데이터에 보존했지만 화면에 표시하지 않습니다.

## 애드센스 준비

광고는 기본적으로 비활성화되어 있고 Google 광고 스크립트를 로드하지 않습니다. 광고를 켜기 전에 애드센스 승인, GitHub 이용 정책 확인, 개인정보처리방침 수정 및 방문 지역에 따른 동의 절차를 완료하세요.

1. 인증에 필요한 메타 태그나 코드는 애드센스 안내에 따라 `src/layouts/Base.astro`에 추가합니다.
2. `src/config.ts`의 `adsense.client`에 본인의 `ca-pub-…`, `sidebarSlot`에 실제 광고 단위 ID를 넣고 `enabled: true`로 설정합니다.
3. 기존 루트의 `Ads.txt`는 과거 자료로 남아 있으며 배포되지 않습니다. 계정 정보를 확인한 후 애드센스가 제공한 **본인의** 판매자 정보를 `public/ads.txt`에 소문자 파일명으로 저장합니다.
4. 개인정보처리방침을 실제 운영 방식에 맞게 갱신합니다. 필요한 경우 Google 인증 CMP를 구성합니다. 현재 코드에는 동의 관리 기능이 포함되지 않았습니다.
5. 배포 후 `/ads.txt` 응답과 광고 단위 설정을 확인합니다.

폰트는 `@fontsource-variable/noto-sans-kr`에서 제공되는 Noto Sans KR를 자체 호스팅하므로 방문 시 Google Fonts 서버에 요청하지 않습니다. 일러스트는 프로젝트의 SVG 소스입니다.
