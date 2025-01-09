//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './Header.jsx'     //from Header.jsx
import Footer from './Footer.jsx'
import Content from './Content.jsx'
import { Comp1, Comp2, Comp3, Comp4, Comp5 } from './Component.jsx';

createRoot(document.getElementById('root')).render(
    <>
<Header></Header>     
<Content></Content>
<Footer></Footer>
<Comp1></Comp1>
<Comp2></Comp2>
<Comp3></Comp3>
<Comp4></Comp4>
<Comp5></Comp5>
</>
)

//<Header></Header>  - on giving this content in header.jsx will be displayed as output