# Whack-a-Mole Game

두더지 잡기 게임 레파지토리 입니다. 
### 준비화면
1. 두더지 굴을 표시하기 위한 열과 행을 입력받습니다. 1.1. 열과 행은 최소 2, 최대 6까지만 입력 받습니다.
2. 출현할 두더지의 개수를 입력 받습니다.
   2.1. 최소 1마리에서 전체 굴 개수에 절반 미만으로 입력 가능합니다.
3. 시작 버튼을 누르면 게임 화면으로 이동합니다.

### 게임화면
준비화면에서 입력된 두더지 수 만큼 두더지를 출력합니다. 
일시정지 기능과 홈 화면으로 돌아갈 수 있는 기능이 있습니다. 

### 랭킹화면
두더지 게임 점수와 닉네임으로 랭킹을 보여줍니다. 
랭킹은 쿠키에 저장되어있는 값으로 보여주며, 랭킹 초기화 기능을 제공합니다. 

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
