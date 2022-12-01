import HomePage from './pages/HomePage/HomePage'
import CartPage from './pages/CartPage/CartPage'
import {createGlobalStyle} from 'styled-components'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

const GlobalStyles = createGlobalStyle`
  
  :root {
    --main-color: #6327FE;
    --txt-color: #333333;
    --border-color: #C4C4C4;
    --sub-border-color: #E0E0E0;
    --bg-color: #F2F2F2;
    --emphasis-txt-color: #EB5757;
    --sub-txt-color: #828282;
    --button-border: #BDBDBD;
  }

  div, span, article, section, header, main, footer, p, ul, li, label, a, nav, h1, h2, h3, form, input, button, img, textarea, table, thead, tbody, tr, th, td {
    box-sizing: border-box;
  }

  body, html {
    width: 100%;
    height: 100%;
  }

  body, button {
    font-family: "Spoqa Han Sans Neo", "sans-serif";
  }

  body {
    font-weight: 400;
    color: var(--txt-color);
  }

  img {
    width: 100%;
    height: auto;
    vertical-align: top;
  }

  a {
    display: block;
    text-decoration: none;
    color: #000;
  }

  table, thead, tbody, tr {
    display: block;
  }

  /* Image Replacement 약자 스크린리더가 읽을 수 있도록 대체텍스트 */
  .ir {
    position: absolute;
    left: -10000px;
    top: auto;
    width: 1px;
    height: 1px;
    overflow: hidden;
  }

  /* 한줄 말줄임 */
  .sl-ellipsis {
    display:block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  /* 두줄 말줄임 */
  .multi-ellipsis {
  overflow: hidden;
  display: -webkit-box; 
  -webkit-line-clamp: 2; 
  -webkit-box-orient: vertical;
  }

  /* button 스타일 */
  button {
    border: none;
    cursor: pointer;
    padding: 0;
  }

  /* link-button 스타일 */
  .link-btn {
    position: -webkit-sticky;
    position: sticky;
    top: 60px;
    width: 80px;
    height: 80px;
    background-color: var(--main-color);
    border-radius: 50%;
  }

`

function App() {
  console.log(document.location.href)
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/cartPage' element={<CartPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;