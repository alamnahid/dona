import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";


const Donation = () => {
    const [donation, setDonation] = useState([]);
    const [NoFound, setNoFound] = useState(false);
    const [isShow, setIsShow] = useState(false);
    const [dataLength, setDataLength] = useState(4);

    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(()=>{
        const donationItems = JSON.parse(localStorage.getItem("donation"));

        if(donationItems){
            setDonation(donationItems);
            const totalPrice = donationItems.reduce((previousValue, currentValue)=>previousValue+currentValue.price,0)
            
            setTotalPrice(totalPrice)
        }
        else{
            setNoFound("No Data Found");
        }
    }, [])

    console.log(totalPrice)
    return (
        <div className="w-[95%] md:w-[80%] mx-auto mt-20">
            <div className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-6">
                {
                    isShow ? donation.map((item)=>(<DonationCard key={item.id} item={item}></DonationCard>))
                    : donation.slice(0, dataLength).map((item)=>(<DonationCard key={item.id} item={item}></DonationCard>))
                }
            </div>
            <div className="text-center mt-10">
                {
                    donation.length > 4 && <button onClick={()=>setIsShow(!isShow)} className={isShow?"hidden":""}><button className="w-[6.875rem] h-12 rounded-lg bg-[#009444] text-white text-base font-medium">See All</button></button> 
                }
            </div>
           
            
        </div>
    );
};

export default Donation;