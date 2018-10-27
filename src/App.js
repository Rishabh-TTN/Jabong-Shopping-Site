import React, { Component, Fragment } from "react";
import {Layout} from "./Layout";
import {Navigation} from "./Navigation";
import {Lists} from './Lists';
import {ItemsLists} from './ItemsList';

class App extends Component {
    render() {
        return (
            <Fragment>
                <h1 className="mainHeading">Jabong</h1>
                <Navigation/>
                <p className="paragraph">APP EXCLUSIVE OFFER - DOWNLOAD THE JABONG APP TO GET UPTO ₹1000 OFF </p>
              <Layout/>
                <Lists/>
                <ItemsLists/>
            </Fragment>
        )
    }
}
export default App;