import './App.css';

import Title from './components/Title'
import { ReactFRGMNT } from './components/ReactFRGMNT';
import BoxDate from './components/boxDate';
import NavBar1 from './components/NavBar';
import Footer from './components/footer';
import TextForm from './components/TextForm';
// function Title (){
//   return <h2>This is Title</h2>
// }



function App() {
  

  return (
    <>  
      <NavBar1 title="TextUtillizer" op4="Programs" aboutText="About Us" op3="Account"/>
      {/* <NavBar1 /> */}
      {/* <Footer  heading="Welcome" author="maviCoderz"/> */}
      {/* <Title/>
      <ReactFRGMNT/>
      <BoxDate/> */}
      <TextForm heading="TextUtils"/>

    </>
  );
}

export default App
