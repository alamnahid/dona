/* eslint-disable react/prop-types */
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DetailCard = ({ card }) => {
    const handleAddtoDonation = ()=>{
        const addToDonationArray = [];
        const donationItems = JSON.parse(localStorage.getItem("donation"));

        if(!donationItems){
            addToDonationArray.push(card);
            localStorage.setItem("donation", JSON.stringify(addToDonationArray));
            toast("Donation Added Successfully. Thanks for you donate");
        }
        else{
            const isExists = donationItems.find((item) => item.id === card.id);

            if(!isExists){
                addToDonationArray.push(...donationItems, card);
                localStorage.setItem("donation", JSON.stringify(addToDonationArray));
                toast("Donation Added Successfully. Thanks for you donate");
            }
            else{
                toast.error('You already donate')
            }
        }
    }
    
    return (
        <div className="mt-20">
            <div className="relative">
                <img className="w-[80%] rounded-lg mx-auto lg:h-[43.75rem]" src={card.image} alt="" />
                <div style={{
                    backgroundColor: "rgba(11, 11, 11, 0.50)",

                }} className="w-[80%] mx-auto lg:h-[8.125rem] rounded-br-lg rounded-bl-lg absolute bottom-0 left-[10%] right-[10%] pb-2 lg:pb-0">
                    <div onClick={handleAddtoDonation} style={{ backgroundColor: `${card.text}` }} className="w-[11.5rem] lg:h-[3.5rem] rounded flex justify-center items-center mt-5 lg:mt-[2.31rem] ml-[2.31rem] cursor-pointer">
                        <h2 className="text-white text-xl font-medium">Donate $290</h2>

                    </div>
                </div>
            </div>

            <div className="w-[80%] mx-auto mt-14">
                <h1 className="text-[#0B0B0B] text-[2.5rem] font-semibold">{card.title}</h1>
                <p className="text-[#0B0B0BB3] text-base mt-6 text-justify mb-28">
                {card.description}
                </p>
            </div>
            <ToastContainer />

        </div>
    );
};

export default DetailCard;