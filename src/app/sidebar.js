import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const DashboardLight = () => <div>Dashboard Light</div>;
const DashboardDark = () => <div>Dashboard Dark</div>;
const FoodOrder = () => <div>Food Order</div>;
const FavoriteMenu = () => <div>Favorite Menu</div>;
const Message = () => <div>Message</div>;
const OrderHistory = () => <div>Order History</div>;
const Notification = () => <div>Notification</div>;
const Bill = () => <div>Bill</div>;
const Setting = () => <div>Setting</div>;

const RestaurantDashboard = () => <div>Restaurant Dashboard</div>;
const Menu = () => <div>Menu</div>;
const Orders = () => <div>Orders</div>;
const CustomerReviews = () => <div>Customer Reviews</div>;
const RestroSetting = () => <div>Restaurant Setting</div>;

const DeliverDashboard = () => <div>Driver Dashboard</div>;
const DeliverOrders = () => <div>Driver Orders</div>;
const Feedback = () => <div>Feedback</div>;

const Sidebar = () => {
  return (
    <Router>
      <div className="dlabnav border-right">
        <div className="dlabnav-scroll">
          <p className="menu-title style-1">Main Menu</p>
          <ul className="metismenu" id="menu">
            <li>
              <Link to="/dashboard">
                <i className="bi bi-grid"></i>
                <span className="nav-text">Dashboard</span>
              </Link>
              <ul>
                <li><Link to="/dashboard/light">Dashboard Light</Link></li>
                <li><Link to="/dashboard/dark">Dashboard Dark</Link></li>
                <li><Link to="/dashboard/food-order">Food Order</Link></li>
                <li><Link to="/dashboard/favorite-menu">Favorite Menu</Link></li>
                <li><Link to="/dashboard/message">Message</Link></li>
                <li><Link to="/dashboard/order-history">Order History</Link></li>
                <li><Link to="/dashboard/notification">Notification</Link></li>
                <li><Link to="/dashboard/bill">Bill</Link></li>
                <li><Link to="/dashboard/setting">Setting</Link></li>
              </ul>
            </li>
            <li>
              <Link to="/restaurant">
                <i className="bi bi-shop-window"></i>
                <span className="nav-text">Restaurant</span>
              </Link>
              <ul>
                <li><Link to="/restaurant/dashboard">Dashboard</Link></li>
                <li><Link to="/restaurant/menu">Menu</Link></li>
                <li><Link to="/restaurant/orders">Orders</Link></li>
                <li><Link to="/restaurant/reviews">Reviews</Link></li>
                <li><Link to="/restaurant/setting">Setting</Link></li>
              </ul>
            </li>
            <li>
              <Link to="/drivers">
                <i className="bi bi-bicycle"></i>
                <span className="nav-text">Drivers</span>
              </Link>
              <ul>
                <li><Link to="/drivers/dashboard">Dashboard</Link></li>
                <li><Link to="/drivers/orders">Orders</Link></li>
                <li><Link to="/drivers/feedback">Feedback</Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <Routes>
        {/* Dashboard Routes */}
        <Route path="/dashboard/light" element={<DashboardLight />} />
        <Route path="/dashboard/dark" element={<DashboardDark />} />
        <Route path="/dashboard/food-order" element={<FoodOrder />} />
        <Route path="/dashboard/favorite-menu" element={<FavoriteMenu />} />
        <Route path="/dashboard/message" element={<Message />} />
        <Route path="/dashboard/order-history" element={<OrderHistory />} />
        <Route path="/dashboard/notification" element={<Notification />} />
        <Route path="/dashboard/bill" element={<Bill />} />
        <Route path="/dashboard/setting" element={<Setting />} />

        {/* Restaurant Routes */}
        <Route path="/restaurant/dashboard" element={<RestaurantDashboard />} />
        <Route path="/restaurant/menu" element={<Menu />} />
        <Route path="/restaurant/orders" element={<Orders />} />
        <Route path="/restaurant/reviews" element={<CustomerReviews />} />
        <Route path="/restaurant/setting" element={<RestroSetting />} />

        {/* Drivers Routes */}
        <Route path="/drivers/dashboard" element={<DeliverDashboard />} />
        <Route path="/drivers/orders" element={<DeliverOrders />} />
        <Route path="/drivers/feedback" element={<Feedback />} />
      </Routes>
    </Router>
  );
};

export default Sidebar;
