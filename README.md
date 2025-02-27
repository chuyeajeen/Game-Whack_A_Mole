# Whack-a-Mole Game


---
##  Tech Stack

- **Framework & Language**: React, TypeScript
- **State Management**: Recoil
- **Styling**: Styled-components
- **Architecture**: Atomic Design Pattern, Hooks Pattern
- **Development Tools**: Storybook, ESLint, Prettier, Webpack, Babel
- **Package Manager**: pnpm

---
**Project Setup**

```
pnpm install
```

**Compiles and hot-reloads for development**

```
pnpm start
```

## Project 구조
```
project-root

┣  puiblic

┣  src

┃ ┣  components  # 재사용 가능한 UI 컴포넌트 모음

┃ ┃ ┣ atomic # 가장 작은 단위의 컴포넌트 (버튼, 입력 필드 등)

┃ ┃ ┃ ┣  button

┃ ┃ ┃ ┣ modal

┃ ┃ ┃ ┣ numberInput

┃ ┃ ┃ ┣ textInput

┃ ┃ ┃ ┣ timer

┃ ┃ ┃ ┗ toast

┃ ┃ ┣ molecule  # 2개 이상의 atomic 컴포넌트 및 div 를 조합한 UI 블록

┃ ┃ ┃ ┣ labelNumberInput

┃ ┃ ┃ ┣ rankingRow

┃ ┃ ┃ ┗ whackAMolePopup

┃ ┃ ┣ template  # 페이지 레이아웃을 구성하는 틀

┃ ┃ ┃ ┗ rankingTemplate

┃ ┣ constants # 상수 모음 폴더

┃ ┣ pages # 페이지 개별화면 view

┃ ┃ ┣ game 

┃ ┃ ┣ landing

┃ ┃ ┗ ranking

┃ ┣ router #페이지 라우트

┃ ┣ store #Recoil 상태관리

┃ ┣ type #type 정의 모음 폴더

┃ ┣ utils #공통 유틸 함수

┣  .eslintrc.js 

┣  .package.json

┣  .tsconfig.json

┣  .webpack.config.js

┣  .prettierrc

┣  .babelrc

┗  README.md
```
