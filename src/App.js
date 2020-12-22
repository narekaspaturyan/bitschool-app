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

// 1. Ունենք նախկին տնայինի կոմպոնենտները։ Price կոմպոնենտի մեջ ստանալ props.price-ը,
// ավելացնել state-ում և ցույց տալ։ Price կոմպոնոնետը պետք է ցույց տա իր state-ում գրանցված price-ի
// արժեքը, որը սկզբից դոլարով է արտահայտված և նրա կողքին պետք է լինի button՝ “Change the currency”
//  գրությամբ։ button-ի վրա սեղմելուց պետք է վերցնել state-ից price-ը, եթե այն արտահայտված է դոլարով,
//  ապա փոխել այն դրամի (ընդունել 1$ = 500֏) և ցույց տալ այն դրամով
// արտահայտված։ Հաջորդ սեղմելուց, եթե վերջինս դրամով էր, ձևափոխել դոլարի և այդպես շարունակ։
