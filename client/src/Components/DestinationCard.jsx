
 export  default function DestinationCard({ image, rating, place, subPlace }) {
    return (
        <div className="relative">
          <div className="absolute bg-BgOwnBlue rounded-xl top-3 left-3 w-[44px] h-[25px] flex items-center justify-center">
            <p className="absolute text-white text-sm font-medium">{rating}</p>
          </div>
          <p className="absolute text-white font-semibold text-xl leading-5 top-[210px] left-5">{place}</p>
          <p className="absolute text-white text-sm font-normal leading-3 top-[235px] left-5">{subPlace}</p>
          <img src={image} alt="" className="w-[283px] h-[262px] rounded-3xl" />
        </div>
      );
  }