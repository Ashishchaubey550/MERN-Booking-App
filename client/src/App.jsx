import { Route,Routes } from "react-router-dom"
import Layout from "./Pages/HomePage.jsx"
import AboutUs from "./Pages/AboutUsPage.jsx"
import NewlistingsPage from "./Pages/NewlistingsPage.jsx"
import FAQPage from "./Pages/FAQPage.jsx"
import DealsSpecials from "./Pages/DealsSpecialsPage.jsx"
import BrowsePage from "./Pages/BrowsePage.jsx"
import OwnerRegisterPage from "./Pages/OwnerRegisterPage.jsx"
import OwnerLoginPage from "./Pages/OwnerLoginPage.jsx"
import AccountPage from "./Pages/AccountPage.jsx"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}/>
      <Route path="/AboutUs" element={<AboutUs/>}/>
      <Route path="/OwnerRegisterPage" element={<OwnerRegisterPage/>}/>
      <Route path="Newlistings" element={<NewlistingsPage/>}/>
      <Route path="/FAQ" element={<FAQPage/>}/>
      <Route path="/Deals&Specials" element={<DealsSpecials/>}/>
      <Route path="/Browse" element={<BrowsePage/>}/>
      <Route path="/OwnerLoginPage" element={<OwnerLoginPage/>}/>
      <Route path="/accountPage/:subpage?" element={<AccountPage/>}/>
    </Routes>
  )
}

export default App;
