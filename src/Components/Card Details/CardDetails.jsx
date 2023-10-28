import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DetailCard from "./DetailCard";


const CardDetails = () => {
    const [card, setCard] = useState({});
    const detailsData = useLoaderData();

    const {id} = useParams();
    const idInt = parseInt(id);
    useEffect(()=>{
        const findCard = detailsData.find((card)=>card.id===idInt);
        setCard(findCard);
    }, [id, detailsData])
    return (
        <div>
            <DetailCard card={card}></DetailCard>
            
        </div>
    );
};

export default CardDetails;