import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import UsersList from "./components/UsersList";
import Header from "./static/Header";
import Footer from "./static/Footer";
import CreateUser from "./components/CreateUser";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="container">
          <Switch>
            <Route exact path="/" component={UsersList}/>
            <Route path="/users" component={UsersList}/>
            <Route path="/add-user/:id" component={CreateUser}/>
          </Switch>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
