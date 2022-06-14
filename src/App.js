import './App.css';
import { useEffect } from 'react';

import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Header from './components/Header';
import Login from './components/Login';
import Registration from './components/Registration';
import Home from './components/Home';
import Shop from './components/Shop';
import ProductCreate from './components/ProductCreate';
import Product from './components/Product';
import ProductEdit from './components/ProductEdit';

export default function App() {
  return (
    <Router>
      <Header />
      <div>
        <Switch>
          <Route path="/shop">
            <Shop/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/register">
            <Registration/>
          </Route>
          <Route path="/product-create">
            <ProductCreate/>
          </Route>
          <Route path="/products/:productID">
            <Product/>
          </Route>
          <Route path="/products-edit/:productID">
            <ProductEdit/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
