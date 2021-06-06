import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import UsersList from "./components/UsersList";
import Header from "./static/Header";
import Footer from "./static/Footer";
import CreateUser from "./components/CreateUser";
import UpdateUser from "./components/UpdateUser";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="container">
          <Switch>
            <Route path="/" component={UsersList}/>
            <Route path="/users" component={UsersList}/>
            <Route path="/add-user">
              <CreateUser />
            </Route>
            <Route path="/update-user/:id">
              <UpdateUser />
            </Route>
          </Switch>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
