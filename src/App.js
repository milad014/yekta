import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Wrapper from './components/Wrapper'
import ChangesList from './container/ChangesList'
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Wrapper>
            <ChangesList />
          </Wrapper>
        </Route>
      </Switch>
    </Router>
  );
}


export default App;
