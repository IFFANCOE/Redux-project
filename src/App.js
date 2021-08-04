import { BrowserRouter as BSRouter, Switch, Route } from 'react-router-dom'
import Header from './containers/Header'

import ProductListing from './containers/ProductListing'
import ProductDetail from './containers/ProductDetail'
function App() {
  return (
    <div className="App">
      <BSRouter>
        <Header />
        <Switch>
      <Route path="/" exact component={ProductListing} />
      <Route path="/product/:productId" exact component={ProductDetail} />
      <Route>404 Not Found!</Route>
      </Switch>
      </BSRouter>
      
    </div>
  );
}

export default App;
