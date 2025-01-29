import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from 'react-router-dom';
import Restrurent from './component/admin/restrurent';
import Category from './component/admin/category';
import Login from './component/login';
import Register from './component/register';
import Logout from './component/Logout';


const Admin = () => <> <div>Admin</div> <Outlet /> </>;

const Sidebar = () => {
  return (
    <Router>
      <div className="dlabnav border-right">
        <div className="dlabnav-scroll">
          <p className="menu-title style-1">Main Menu</p>
          <ul className="metismenu" id="menu">

            {/* admin route */}
            <li>
              <Link to="/admin/">
                <i className="bi bi-grid"></i>
                <span className="nav-text">Admin</span>
              </Link>
              <ul>
                <li><Link to="admin/category">Category</Link></li>
                <li><Link to="admin/restrurent">Restraurent</Link></li>
                <li><Link to="logout">Logout</Link></li>
              </ul>
            </li>

            {/* admin route */}

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

        {/* user */}

        <Route path='/register' element={<Register/>}/>
        
        {/* Admin  */}
        <Route path='/' element={<Login/>}></Route>

        <Route path="/admin/" element={<Admin />}>
          <Route path="restrurent" element={<Restrurent />}></Route>
          <Route path="category" element={<Category />}></Route>
        </Route>
        <Route path='/logout' element={<Logout/>}></Route>
        {/* Dashboard Routes */}
        {/* <Route path="/dashboard/light" element={<DashboardLight />} />
        <Route path="/dashboard/dark" element={<DashboardDark />} />
        <Route path="/dashboard/food-order" element={<FoodOrder />} />
        <Route path="/dashboard/favorite-menu" element={<FavoriteMenu />} />
        <Route path="/dashboard/message" element={<Message />} />
        <Route path="/dashboard/order-history" element={<OrderHistory />} />
        <Route path="/dashboard/notification" element={<Notification />} />
        <Route path="/dashboard/bill" element={<Bill />} />
        <Route path="/dashboard/setting" element={<Setting />} /> */}

        {/* Restaurant Routes */}
        {/* <Route path="/restaurant/dashboard" element={<Restrurent/>} />
        <Route path="/restaurant/menu" element={<Menu />} />
        <Route path="/restaurant/orders" element={<Orders />} />
        <Route path="/restaurant/reviews" element={<CustomerReviews />} />
        <Route path="/restaurant/setting" element={<RestroSetting />} /> */}



        {/* Drivers Routes */}
        {/* <Route path="/drivers/dashboard" element={<DeliverDashboard />} />
        <Route path="/drivers/orders" element={<DeliverOrders />} />
        <Route path="/drivers/feedback" element={<Feedback />} /> */}
      </Routes>
    </Router>
  );
};

export default Sidebar;
