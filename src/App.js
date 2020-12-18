import "./App.css";
import Product from "./components/product";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Product
          price={2}
          name="apple"
          description={"Fresh apples from Cupertino"}
        />
      </header>
    </div>
  );
}

export default App;

// 1.Ստեղծել Product անունով class component, որի մեջ դնել Price, Name և Description class component-ները։
// Product-ը դնել  App.js-ում և props-ով նրան փոխանցել price, name, description պարամետրերը,
// որոնք պետք է օգտագործվեն համապատասխանաբար Price, Name և Description կոմպոնենտների մեջ։
// Օրինակ՝ <Product name=”banabas” price=”1$” description=”Fresh bananas from Ecuador” />
// Բոլոր կոմպոնենտները պետք է լինեն առանձին մոդուլներում։ state օգտագործելու կարիք չկա։
