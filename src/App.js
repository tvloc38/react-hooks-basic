import Header from 'component/Header';
import ProductFeature from 'features/Product';
import { NavLink, Route, Switch } from 'react-router-dom';
import './App.scss';
import ColorBox from './component/ColorBox';
import NotFound from './component/NotFound';
import CounterFeature from './features/Counter';
import TodoFeature from './features/Todo';

function App() {
  return (
    <div className="app">
      <Header />

      <Switch>
        <Route path='/' component={CounterFeature} exact />
        <Route path='/colorbox' component={ColorBox} exact />
        <Route path='/todo' component={TodoFeature} />
        <Route path='/products' component={ProductFeature} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
