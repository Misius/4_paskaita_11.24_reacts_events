// import Button from './components/EVENTS/button/button.jsx'
// import ButtonOne from './components/EVENTS/ButtonOne/ButtonOne.jsx';
// import ButtonTwo from './components/EVENTS/ButtonTwo/ButtonTwo.jsx';
// import ButtonThree from './components/EVENTS/ButtonThree/ButtonThree.jsx';
// import Form from './components/EVENTS/form/form';
// import GreetingForm from './components/EVENTS/GreetingForm/GreetingForm';
// import MathButton from './components/EVENTS/MathButton/MathButton.jsx';

import Header from "./components/LAYOUT/Header/Header";
import Content from "./components/LAYOUT/Content/Content";
import Feature from "./components/LAYOUT/Feature/Feature";
import SignUp from "./components/LAYOUT/SignUp/SignUp";

function App() {
  return (
    // <div className="App">
    //   <h1>Mouse events</h1>
    //   {/* Mouse events: click, contextmenu, mouseenter, mouseleave, mousemove */}
    //   <Button />
    //   <h2>Form events</h2>
    //   <Form />
    //   <h2>Task one and Two</h2>
    //   <h3>One</h3>
    //   <ButtonOne />
    //   <ButtonTwo />
    //   <ButtonThree />
    //   <h3>Two</h3>
    //   <GreetingForm />
    //   <h2>Additional practise with react events</h2>
    //   <MathButton action={'+'} numbers={[34,8]}/>
    //   <MathButton action={'-'} numbers={[34,8]}/>
    // </div>
    <>
    <header>
      <Header/>
    </header>
    <main className="grid">
    <Content />
    <SignUp />
    <Feature backgroundColor={'#F5CF8E'}/>
    <Feature backgroundColor={'#C8C6FA'}/>
    <Feature backgroundColor={'#F09A9D'}/>

    
    </main>
    <footer>

    </footer>
    </>
  );
}

export default App;
