/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import DonaCategorie from "./DonaCategorie";


const DonationCategories = ({displayCard}) => {
    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        fetch("data.json")
        .then(res=>res.json())
        .then(data=>setCategories(data))
    }, [])
    return (
        <div className="mt-[6.25rem] w-[80%] mx-auto mb-44">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {
                    displayCard.map(categorie=><DonaCategorie key={categorie.id} categorie={categorie}></DonaCategorie>)
                }

            </div>
            
        </div>
    );
};

export default DonationCategories;


