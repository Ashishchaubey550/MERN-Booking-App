import lifevista from "../assets/lifevista.png"
import { Link } from "react-router-dom";
export default function Header(){
    return(
        <div className="">
            <div className=" flex ">
                <Link to ={'/'}>
                <img  src={lifevista} className=" h-[62px] w-[249px] mt-9 ml-[96px]"  />
                </Link>
                <div className=" text-white h-4 w-808px mt-[56px] ml-[536px]">
                    <div  className=" space-x-4 gap-4">
                    <Link to={'/'} className="">
                        Home
                    </Link>
                    <Link to={'/AboutUs'}>
                    AboutUs
                    </Link>
                    <Link to={'/Browse'}>
                    Browse
                    </Link>
                    <Link to={'/Deals&Specials'}>
                    Deals&Specials 
                    </Link>
                    <Link to={'/Newlistings'}>
                    Newlistings
                    </Link>
                    <Link to={'/FAQ'}>
                    FAQ
                    </Link>
                    <Link to={'/OwnerRegisterPage'}>
                    OwnerLogin
                    </Link>
                    </div>
            </div>
            </div>
        </div>
    );
}