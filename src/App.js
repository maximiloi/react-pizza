import React from 'react'
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import axios from 'axios';

import { Header } from './components';
import { Home, Cart } from './pages';

// import store from './redux/store';
import { setPizzas as setPizzasAction } from './redux/actions/pizzas';

function App() {

  React.useEffect(() => {

    axios.get('http://localhost:3000/db.json').then(({ data }) => {  // Разбор с помощью библиотеки Axios
      window.store.dispatch(setPizzasAction(data.pizzas));
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
          <Route exact path="/" render={() => <Home items={[]} />} />
          <Route exact path="/cart" component={Cart} />
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    items: state.pizzas.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setPizzas: (items) => dispatch(setPizzasAction(items)),
    dispatch,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
