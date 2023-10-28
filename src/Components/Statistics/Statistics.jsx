import { useEffect, useState } from "react";
import { Cell, Legend, Pie, PieChart, Tooltip,} from "recharts";


const Statistics = () => {
    const [categories, setCategories] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [donatetotalPrice, setDonateTotalPrice] = useState(0)

    useEffect(()=>{
        fetch("data.json")
        .then(res=>res.json())
        .then(data=>setCategories(data))
    }, [])

    useEffect(() => {
        const calculatedTotal = categories.reduce((accumulator, product) => {
          return accumulator + product.price;
        }, 0);
    
        setTotalPrice(calculatedTotal);
      }, [categories]);

      useEffect(()=>{
        const donationItems = JSON.parse(localStorage.getItem("donation"));

        if(donationItems){
            const donatetotalPrice = donationItems.reduce((previousValue, currentValue)=>previousValue+currentValue.price,0)
            
            setDonateTotalPrice(donatetotalPrice)
        }
    }, [])

    const data = [
        { name: 'Total Donation', value: totalPrice },
        { name: 'Your Donation', value: donatetotalPrice },
      ];
      
      const COLORS = ['#FF444A', '#00C49F'];
      
      const RADIAN = Math.PI / 180;
      const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
      
        return (
          <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
          </text>
        );
      };
    return (
        <div className="flex justify-center items-center">
            <div className="mt-20">
                <PieChart width={500} height={586}>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={160}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Legend iconSize={80} iconType="plainline"/>
                    <Tooltip />
                </PieChart>
            </div>

        </div>
    );
};

export default Statistics;