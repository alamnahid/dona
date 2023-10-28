/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const DonationCard = ({ item }) => {
   
    return (
        <div>
            <div style={{
                background: `${item.background}`
            }} className="flex-1 h-[12.5rem] rounded-lg flex">

                <div>
                    <img className="w-[9rem] md:w-[13.75rem] h-[12.5rem] rounded-tl-lg rounded-bl-lg" src={item.image} alt="" />
                </div>

                <div>
                    <div style={{
                        background: `${item.categoryBackground}`,
                        color: `${item.text}`
                    }} className={`h-[1.5625rem] w-fit rounded pr-[0.42rem] pl-[0.42rem] text-[#0052FF] text-sm font-medium pt-[0.1rem] mt-[1.56rem] ml-4`}>
                        {item.category}

                    </div>
                    <h1 style={{
                        color: `${item.text}`
                    }} className={`pr-2 text-xl font-semibold mt-2 ml-4`}>{item.title}</h1>

                    <h1 style={{
                        color: `${item.text}`
                    }} className={`pr-2 text-xl font-semibold mt-2 ml-4`}>${item.price}</h1>

                    <Link to={`/details/${item.id}`}>
                    <div style={{ backgroundColor: `${item.text}` }} className="w-[8.81rem] h-[2.5rem] rounded flex justify-center items-center md:mt-5 ml-[1.2rem] cursor-pointer">
                        <h2 className="text-white text-xl font-medium">View Details</h2>

                    </div>
                    </Link>




                </div>

            </div>

        </div>
    );
};

export default DonationCard;