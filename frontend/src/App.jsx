import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CustomerDashboard from "./pages/customerDashboard";
import CustomerLogin from "./pages/customerLogin";
import CustomerProfile from "./pages/customerProfile";
import CustomerReviews from "./pages/customerReviews";
import FindProfessionals from "./pages/findProfessionals";
import MyBookings from "./pages/myBookings";
import MyRequests from "./pages/myRequests";

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CustomerLogin />} />
        <Route path="/customerDashboard" element={<CustomerDashboard />} />
        <Route path="/customerProfile" element={<CustomerProfile />} />
        <Route path="/customerReviews" element={<CustomerReviews />} />
        <Route path="/findProfessionals" element={<FindProfessionals />} />
        <Route path="/myBookings" element={<MyBookings />} />
        <Route path="/myRequests" element={<MyRequests />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;