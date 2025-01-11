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
import AdminMessage from './components/AdminDashboard/AdminMessenger';
import BuyerMenu from './components/BuyerPanel/Buyer_Menu';
import BuyerHomePageBody from './components/BuyerPanel/Buyer_Homepage';
import BuyerFraudList from './components/BuyerPanel/Buyer_FraudList';
import BuyerCart from './components/BuyerPanel/Buyer_Cart';
import BuyerComplain from './components/BuyerPanel/Buyer_Complain';
import BuyerOrderHistory from './components/BuyerPanel/Buyer_OrderHistory';
import Buyer_ProductDetails from './components/BuyerPanel/Buyer_ProductDetails';
import SellerStock from './components/SellerPanel/Seller_Stock';
import SellerComplain from './components/SellerPanel/SellerComplain';
import SellerHome from './components/SellerPanel/Seller_home';
import SellerSell from './components/SellerPanel/Seller_sell';
import SellerSoldList from './components/SellerPanel/Seller_sold_list';
import SellerMenu from './components/SellerPanel/SellerMenu';
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
          <Route path="adminMessage" element={<AdminMessage />} />
        </Route>

     <Route path="/buyerMenu" element={<BuyerMenu />}>
     <Route index element={<BuyerHomePageBody />} />
     <Route path="buyerHomePageBody" element={<BuyerHomePageBody />} />
     <Route path='buyerFraudList' element={<BuyerFraudList/>}/>
     <Route path='buyerCart' element={<BuyerCart/>}/>
     <Route path='buyerComplain' element={<BuyerComplain/>}/>
     <Route path='buyerOrderHistory' element={<BuyerOrderHistory/>}/>
     <Route path='buyerProductDetails' element={<Buyer_ProductDetails/>}/>
    
     
     </Route>

    <Route path='/sellerMenu' element={<SellerMenu/>}>
    <Route index element={<SellerHome />} />
    <Route path="sellerHome" element={<SellerHome />} />
    <Route path="sellerStock" element={<SellerStock />} />
    <Route path="sellerComplain" element={<SellerComplain />} />
    <Route path="sellerSoldList" element={<SellerSoldList />} />
    <Route path="sellerSell" element={<SellerSell />} />





    </Route>


        <Route path="/trial" element={<PricingSection />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
