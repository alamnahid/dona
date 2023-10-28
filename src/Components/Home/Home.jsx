import { useEffect, useState } from "react";
import DonationCategories from "../Donation Categories/DonationCategories";
import Cover from "./Cover";
import { useLoaderData } from "react-router-dom";


const Home = () => {
    const datas = useLoaderData();
    
    const [displayCard, setDoisplayCard] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        fetch("data.json")
        .then(res=>res.json())
        .then(data=>setCategories(data))
    }, [])

    const handleSearch = (e)=>{
        e.preventDefault();
        const value = e.target.search.value;
        if(value==='health' || value==='Health'){
            const healthcard = categories.filter((item)=>item.category==='Health');
            setDoisplayCard(healthcard);
        }
        else if(value==='Education' || value==='education'){
            const educationCard = categories.filter((item)=>item.category==='Education');
            setDoisplayCard(educationCard);
        }
        else if(value==='Clothing' || value==='clothing'){
            const clothingCard = categories.filter((item)=>item.category==='Clothing');
            setDoisplayCard(clothingCard);
        }
        else if(value==='Food' || value==='food'){
            const foodCard = categories.filter((item)=>item.category==='Food');
            setDoisplayCard(foodCard);
        }

    }

    useEffect(()=>{
        setDoisplayCard(datas)
        
    }, [datas])

    console.log(displayCard)
    return (
        <div>
            <Cover handleSearch={handleSearch}></Cover>
            <DonationCategories displayCard={displayCard}></DonationCategories>
            
        </div>
    );
};

export default Home;