import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import CustomerDashboard from "./pages/customerDashboard";
import CustomerLogin from "./pages/customerLogin";
import CustomerRegister from "./pages/customerRegister";
import CustomerProfile from "./pages/customerProfile";
import CustomerReviews from "./pages/customerReviews";
import FindProfessionals from "./pages/findProfessionals";
import MyBookings from "./pages/myBookings";
import MyRequests from "./pages/myRequests";

import ProfessionalAvailability from "./pages/professionalAvailability";
import ProfessionalBookings from "./pages/professionalBookings";
import ProfessionalCompletedJobs from "./pages/professionalCompletedJobs";
import ProfessionalDashboard from "./pages/professionalDashboard";
import ProfessionalEarnings from "./pages/professionalEarnings";
import ProfessionalNotifications from "./pages/professionalNotifications";
import ProfessionalProfile from "./pages/professionalProfile";
import ProfessionalQuotes from "./pages/professionalQuotes";
import ProfessionalRequests from "./pages/professionalRequests";
import ProfessionalReviews from "./pages/professionalReviews";
import ProfessionalServices from "./pages/professionalServices";
import ProfessionalSettings from "./pages/professionalSettings";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<CustomerLogin />} />
                <Route path="/customerRegister" element={<CustomerRegister />} />

                <Route path="/customerDashboard" element={<CustomerDashboard />} />
                <Route path="/customerProfile" element={<CustomerProfile />} />
                <Route path="/customerReviews" element={<CustomerReviews />} />
                <Route path="/findProfessionals" element={<FindProfessionals />} />
                <Route path="/myBookings" element={<MyBookings />} />
                <Route path="/myRequests" element={<MyRequests />} />

                <Route path="/professionalDashboard" element={<ProfessionalDashboard />} />
                <Route path="/professionalAvailability" element={<ProfessionalAvailability />} />
                <Route path="/professionalBookings" element={<ProfessionalBookings />} />
                <Route path="/professionalCompletedJobs" element={<ProfessionalCompletedJobs />} />
                <Route path="/professionalEarnings" element={<ProfessionalEarnings />} />
                <Route path="/professionalNotifications" element={<ProfessionalNotifications />} />
                <Route path="/professionalProfile" element={<ProfessionalProfile />} />
                <Route path="/professionalQuotes" element={<ProfessionalQuotes />} />
                <Route path="/professionalRequests" element={<ProfessionalRequests />} />
                <Route path="/professionalReviews" element={<ProfessionalReviews />} />
                <Route path="/professionalServices" element={<ProfessionalServices />} />
                <Route path="/professionalSettings" element={<ProfessionalSettings />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;