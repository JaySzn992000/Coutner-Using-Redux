import React from "react";
import Counter from "./components/Counter";
import { addToCart } from "./action/action";
import { Provider } from "react-redux";
import Cart from "./components/Cart";
import store from "./store";


const App = () => {

return (
    <div className="App">

        <Provider store={ store}>
            <div>
                <Cart></Cart>
                <Counter></Counter>
            </div>
        </Provider>

    </div>
)

}

export default App;