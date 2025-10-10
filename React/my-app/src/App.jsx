// import Greet from "./components/01-Components-Types/Greet";
// import Header from "./components/02-Components-Example/Header";
// import MainContent from "./components/02-Components-Example/MainContent";
// import Footer from "./components/02-Components-Example/Footer";
// import JSXRules from "./components/03-JSX-Rules/JSXRules";
// import Greeting from "./components/04-JSX-Expressions/Greeting";
// import ProductInfo from "./components/04-JSX-Expressions/ProductInfo";
// import Lists from "./components/05-Lists/Lists";
// import UserList from "./components/05-Lists/UserList";
// import ProductList from "./components/05-Lists/ProductList";
// import Card from "./components/06-Props/Card";
// import Person from "./components/06-Props/Person";
// import Product from "./components/06-Props/Product";
// import Greeting from "./components/07-Conditional-Rendering/Greeting";
// import UserStatus from "./components/07-Conditional-Rendering/UserStatus";
// import Weather from "./components/07-Conditional-Rendering/Weather";
// import Style from "./components/08-Styling/01-Inline-Style/style";
// import StyleOne from "./components/08-Styling/02-Dynamic-Style/StyleOne";
// import Button from "./components/09-Adding-Events/Button";
// import Copy from "./components/09-Adding-Events/Copy";
// import Move from "./components/09-Adding-Events/Move";
// import Counter from "./components/10-Hooks/01-useState/Counter";
// import Profile from "./components/10-Hooks/01-useState/Profile";
// import ShoppingList from "./components/10-Hooks/01-useState/ShoppingList";
// import TodoList from "./components/10-Hooks/01-useState/TodoList";
// import Basics from "./components/10-Hooks/02-useEffect/Basics";
// import BasicEffect from "./components/10-Hooks/02-useEffect/BasicEffect";
// import CounterEffect from "./components/10-Hooks/02-useEffect/CounterEffect";
// import FetchDataEffect from "./components/10-Hooks/02-useEffect/FetchDataEffect";
// import ComponentA from "./components/11-Prop-Drilling/01-Problem/ComponentA";
// import ComponentB from "./components/11-Prop-Drilling/01-Problem/ComponentB";
// import ComponentC from "./components/11-Prop-Drilling/01-Problem/ComponentC";
// import ComponentD from "./components/11-Prop-Drilling/01-Problem/ComponentD";
// import ComponentA from "./components/11-Prop-Drilling/02-Solution/ContextAPI/ComponentA";
// import ComponentA from "./components/10-Hooks/03-useContext/ComponentA";
// import CounterExample from "./components/10-Hooks/04-useReducer/CounterExample";

import FocusInput from "./components/10-Hooks/05-useRef/FocusInput";
import Timer from "./components/10-Hooks/05-useRef/Timer";

const App = () => {
  return (
    <div>
      {/* 01 - Functional Component example Arrow function syntax and Function declaration syntax
      <Greet />  */}

      {/* 02 - Implement the examples of Component
      <Header />
      <MainContent />
      <Footer /> */}

      {/* 03 - JSX Rules added
      <JSXRules /> */}

      {/* 04 - Hands-on JSX Expressions
      <Greeting />
      <ProductInfo /> */}

      {/* 05 - Implement the examples for the Lists in ReactJS 
      <Lists />
      <UserList />
      <ProductList /> */}

      {/* 06 - Implement the Props Examples 
      <Person name="Vinayak" age={22} />
      <Product name="Laptop" price={1000} />
      <Card>
        <h1>My Card 1</h1>
        <p>Card Content 1</p>
      </Card>
      <Card>
        <h1>My Card 2</h1>
        <p>Card Content 2</p>
      </Card> */}

      {/* 07 - Implement the examples for the Conditional Rendering 
      <Weather temperature={18} />
      <UserStatus loggedIn={true} isAdmin={false} />
      <Greeting timeOfDay="afternoon" /> */}

      {/* 08 - Implement the two methods for styling in ReactJS -> 1) Inline Style & 2) Dynamic Styling 
      <Style />
      <StyleOne /> */}

      {/* 09 - Adding Events to elements 
      <Button />
      <Copy />
      <Move /> */}

      {/* 10 - useState examples
      <Counter />
      <TodoList />
      <Profile />
      <ShoppingList /> */}

      {/* 11 - useEffect Examples 
      <Basics />
      <BasicEffect />
      <CounterEffect />
      <FetchDataEffect /> */}

      {/* 12 - Prop Drilling 
      ---Problem---
      <ComponentA />
      <ComponentB />
      <ComponentC />
      <ComponentD />
      
      ---Solution using ContextAPI---
      <ComponentA /> 
      
      ---Solution using useContext() hook 
      <ComponentA /> */}

      {/* 13 - useReducer hook 
      <CounterExample /> */}

      {/* 14 - useRef hook */}
      <FocusInput />
      <Timer />
    </div>
  );
};

export default App;
