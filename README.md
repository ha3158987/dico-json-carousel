# dico-json-carousel 🎠
## Introduction 🔖
Easy-breezy React-slider module for everyone!

---
## Sample 🍭
![녹화](https://user-images.githubusercontent.com/65105537/116818613-49bddd80-aba7-11eb-9e33-5ce21b441f1e.gif)

---
## Installation ✨
Copy & paste the following to your CLI:
```javascript
npm i dico-json-carousel
```

---
## How to use 💡
###  Default setting

| key | value | description |
|----:|:-----:|:-----------:|
|`perPanel`| 4 |Number of items to put on each page.|
|`speed`| 500 | Animation transition speed in millisecond.|
|`count`| false| Page information: shown as 'current page / last page'.|
|`loop`| true | Infinite-loop sliding option.|



---
### Props
- `children` : An "**Array**" that holds the items you want to put on each slide.
- `options` : An "**Object**" that holds the information about your customizing options of the carousel. You can customize `perPanel`, `speed`, `count`, `loop` options as you want!
```javascript
import React from "react";
import styled from "styled-components";
import Carousel from "dico-json-carousel";
const Card = styled.div`
  height: 10vh;
  padding: 3rem;
  font-size: 1.2rem;
  text-align: center;
  border: 1px solid red;
  border-radius: 0.25rem;
`;
function App() {
  const options = {
    perPanel : 4,
    speed: 500,
    count: true,
    loop: false
  }
  return (
    <div className="App">
      <Carousel options={options}>
        <Card>1</Card>
        <Card>2</Card>
        <Card>3</Card>
        <Card>4</Card>
        <Card>5</Card>
        <Card>6</Card>
        <Card>6</Card>
      </Carousel>
    </div>
  );
}
export default App;
```
---