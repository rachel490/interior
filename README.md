# 집꾸미기 과제

###  👉 **[배포링크](https://festive-wozniak-623594.netlify.app)**

- 기술스택 : JavaScript, React, Recoil, Styled-Components
- 기간 : 1/30 6pm - 2/4 10am

<br />

## &nbsp;&nbsp;⚒️ &nbsp;&nbsp;구현사항
### 인테리어이미지
- [x]  돋보기 표시
- [x]  돋보기 클릭시 tool tip 출력
- [x]  tool tip 출력시 돋보기 모양 버튼 닫기로 변경
- [x]  tool tip 하나만 노출
- [x]  open한 tooltip 다시 클릭시 닫힘
- [x]  tool tip의 위치 bottom, right 여부에 따라 변경 (tip의 방향도 같이)
- [x]  이미지 배경선택시 선택해제
### 상품목록
- [x]  상품 목록의 가구 클릭시 해당 가구의 tool tip 출력
- [x]  이미지에서 가구 선택시 상품 목록에서 표시
- [x]  선택한 가구 다시 클릭시 선택해제

<br />

## &nbsp;&nbsp;🎥 &nbsp;&nbsp;시연영상
![ezgif com-gif-maker (1)](https://user-images.githubusercontent.com/72786354/152434769-f31ad462-e7d4-48e1-bd1a-6050425aa0dc.gif)

<br />  

##  &nbsp;&nbsp;📌 &nbsp;&nbsp;디렉토리 구조
```bash
├── App.jsx
├── components
│   ├── ProductList
│   │   ├── ProductItem.jsx
│   │   └── ProductList.jsx
│   ├── Tag
│   │   └── Tag.jsx
│   └── Tooltip
│       └── Tooltip.jsx
├── index.js
├── page
│   └── ProductDisplay.jsx
├── recoil
│   └── atoms.js
└── styles
    └── GlobalStyle.jsx
```

