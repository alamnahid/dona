/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const DonaCategorie = ({ categorie }) => {
    
    return (
        <div>
           <Link to={`/details/${categorie.id}`}>
           <div style={{
                background: `${categorie.background}`
                 }} className={`w-[19.5rem] h-[19.6875rem] rounded-lg`}>
                <img className="w-[19.5rem] h-[12.125rem] rounded-lg" src={categorie.image} alt="" />

                <div style={{
                    background: `${categorie.categoryBackground}`,
                    color: `${categorie.text}`
                }} className={`h-[1.5625rem] w-fit rounded pr-[0.42rem] pl-[0.42rem] text-[#0052FF] text-sm font-medium pt-[0.1rem] mt-4 ml-4`}>
                    {categorie.category}

                </div>
                <h1 style={{
                    color: `${categorie.text}`
                }} className={`pr-2 text-xl font-semibold mt-2 ml-4`}>{categorie.title}</h1>


            </div>
           </Link>

        </div>
    );
};

export default DonaCategorie;