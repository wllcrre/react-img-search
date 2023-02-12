# react-img-search
2023-2-2 learn for react small project

## 2023.2.12 更新：

- 除了axios 不使用任何3rd party package，pagination 自己implement
- code format 用　2 spaces
- javascript var 改用 let
- react state 有多餘的使用(這部份不太確定)
- 移除不必要的code copy / paste

## 功能說明：
- app 打開時，顯示每頁５個圖片，共兩頁，圖片在左邊，圖片顯示是grid. 
- app上面 有個新增圖片的按鈕，每按下一次新增鳥類圖片一張，從第三頁開始。
- 在app的下方有翻頁button 或前頁的button，按下就下一個頁面（翻頁）或是返回前頁
- 在圖片右上角 有"X" 或是"Hide" 的小button 來隱藏圖片

## 使用技術：
- 使用 react state 做元件狀態管理
- 使用 axios api 做 api request
- 支持動態加入子元件
- 使用 unsplash.com 作為圖片 API resource