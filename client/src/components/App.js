import React, { Component, Fragment } from 'react';
import { Route, Switch } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";
import { AllProducts } from "./AllProducts"
import { Product } from "./Product"
import { DepartmentShow } from "./DepartmentShow"
import { AddProductPage } from "./AddProductPage"
import { Default } from "./Default"



class App extends Component {
  render() {
    return (
      <Fragment >
        <Navbar />
        <div className="navbar__clearfix"></div>
        <div className="page-container">
          <Sidebar />
          <div className="sidebar__clearfix"></div>
          <Switch>
            <Route exact path="/" component={AllProducts} />
            <Route exact path="/products/:id" component={Product}  />
            <Route exact path="/departments/:id" component={DepartmentShow}  />
            <Route exact path="/departments/:id/products/new" component={AddProductPage}  />
            <Route component={Default} />
          </Switch>
        </div>
      </Fragment>
    );
  }
}



export default App;
