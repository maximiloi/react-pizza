import React, { useEffect, useState } from 'react'
import { Route } from 'react-router-dom';

import axios from 'axios';

import { Header } from './components';
import { Home, Cart } from './pages';

function App() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {

    axios.get('http://localhost:3000/db.json').then(({ data }) => {  // Разбор с помощью библиотеки Axios
      setPizzas(data.pizzas);
    });

    // fetch('http://localhost:3000/db.json')  // Разбор с помощью Fetch
    //   .then((response) => response.json())
    //   .then((json) => { setPizzas(json.pizzas) });

  }, []);

  return (
    <>
      <div className="wrapper">
        <Header />
        <div className="content">
          <Route exact path="/" render={() => <Home items={pizzas} />} />
          <Route exact path="/cart" component={Cart} />
        </div>
      </div>
    </>
  );
}

export default App;
