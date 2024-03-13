import Holiday from "../assets/Holiday.mp4"
export default function HeroBack(){
    return(
        <div className='main'>
            <div className="overlay"></div>
            <video src={Holiday} autoPlay loop muted/>
        </div>
    );
}

