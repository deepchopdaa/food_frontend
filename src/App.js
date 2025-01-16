
import './App.css';
import Profile from './app/app.profile';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router"
import Sidebar from './app/sidebar';
import Menu from './app/component/restaurant/menu';
import Order from './app/component/restaurant/order';
import Review from './app/component/restaurant/review';
import Dashboard from './app/component/restaurant/Deliver/dashboard';
import Driver_order from './app/component/restaurant/Deliver/order_dr';
import Food_order from './app/component/user/food_order';
import Order_History from './app/component/user/Order_History';
import Login from './app/component/login';
import Register from './app/component/register';
import Restrurent from './app/component/admin/restrurent';
import Category from './app/component/admin/category';
import $ from "jquery";
function App() {
  return (
    <div className="App">
      {/* <Profile/> */}
      {/* <Sidebar/>
      <Menu/>
      <Order/>
      <Review/>
      <Dashboard/>
      <Driver_order/>
      <Food_order/>
      <Order_History/> */}
      {/* <Login/>
      <Register/> */}
      <Restrurent />
      <Category />

    </div>
  );
}

export default App;
