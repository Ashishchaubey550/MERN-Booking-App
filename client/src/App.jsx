import { Route,Routes } from "react-router-dom"
import Layout from "./Layout.jsx"
import AboutUs from "./Pages/AboutUsPage.jsx"
import OwnerLoginPage from "./Pages/OwnerLoginPage.jsx"
import NewlistingsPage from "./Pages/NewlistingsPage.jsx"
import FAQPage from "./Pages/FAQPage.jsx"
import DealsSpecials from "./Pages/DealsSpecialsPage.jsx"
import BrowsePage from "./Pages/BrowsePage.jsx"


// import Footer from "./Components/Footer";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}/>
      <Route path="/AboutUs" element={<AboutUs/>}/>
      <Route path="/QwnerLogin" element={<OwnerLoginPage/>}/>
      <Route path="Newlistings" element={<NewlistingsPage/>}/>
      <Route path="/FAQ" element={<FAQPage/>}/>
      <Route path="/Deals&Specials" element={<DealsSpecials/>}/>
      <Route path="/Browse" element={<BrowsePage/>}/>

    </Routes>
    // <>
    //   <Footer/>
    // </>

  )
}

export default App;
