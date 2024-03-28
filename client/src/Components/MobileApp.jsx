import Mobile from "../assets/Mobile_App.jpg"; 
import SSAPP from "../assets/SSAPP.png";
import { FaApple, FaAndroid } from 'react-icons/fa'; 

export default function MobileApp() {
    return (
        <div className="mobile-app-container">
            <img src={Mobile} alt="Mobile App" className="mobile-app-background" />
            <div className="mobile-app-overlay">
                <div className="mobile-app-content">
                    <img src={SSAPP} alt="Mobile App Logo" className="mobile-app-logo" />
                    <div className="mobile-app-details">
                        <h1 className="mobile-app-title">LifeVista Vacation Mobile App</h1>
                        <p className="mobile-app-description">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                        <div className="mobile-app-buttons">
                            <button className="download-button ios">
                                <FaApple className="platform-icon" /> Download For IOS
                            </button>
                            <button className="download-button android">
                                <FaAndroid className="platform-icon" /> Download For Android
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
