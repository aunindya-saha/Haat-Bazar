import './bootsrap/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signin from './components/Login/Signin';
import SignUp from './components/Login/SignUP';
import AdminDashboard from './components/AdminDashboard/AdminDashboard';
import Overview from './components/AdminDashboard/Overview';
import MoneyTransaction from './components/AdminDashboard/MoneyTransaction';
import Products from './components/AdminDashboard/Products';
import Sellers from './components/AdminDashboard/Sellers';
import Complaints from './components/AdminDashboard/Complaints';
import PricingSection from './components/Trial/Trial1';
import Header from './components/Shared/Header';
import Footer from './components/Shared/Footer';
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();

  // Check if the current route is an admin route
  const isAdminRoute = location.pathname.startsWith('/adminDashboard');

  return (
    <>
      {/* Render Header only for admin pages */}
      {isAdminRoute && <Header />}

      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="/adminDashboard" element={<AdminDashboard />}>
           <Route index element={<Overview />} />
          <Route path="overview" element={<Overview />} />
          <Route path="moneyTransaction" element={<MoneyTransaction />} />
          <Route path="products" element={<Products />} />
          <Route path="sellers" element={<Sellers />} />
          <Route path="complaints" element={<Complaints />} />
        </Route>

        <Route path="/trial" element={<PricingSection />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
