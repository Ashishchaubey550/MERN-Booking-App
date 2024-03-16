import { Link , useParams } from "react-router-dom";

export default function AccountPage(){
    const {subpage} =  useParams();
    console.log(subpage);
    return(
        <div>
            <nav className=" w-full flex mt-8 justify-center gap-4">
            <Link to={'/accountPage'} className=" py-2 px-6 bg-BgOwnBlue rounded-full text-white">
                My Profile
                </Link>
                <Link to={'/account/bookings'} className=" rounded-full py-2 px-6">
                My Booking
                </Link>
                <Link to={'/account/places'} className="  rounded-full py-2 px-6">
                My Accoumodiation
                </Link>
            </nav>
        </div>
    );
}