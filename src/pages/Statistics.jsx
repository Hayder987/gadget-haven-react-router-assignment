import {Helmet} from "react-helmet";
import { useLoaderData } from "react-router-dom";
import { getCartItem } from "../utilities/utilites";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Brush,
  AreaChart,
  Area,
  ResponsiveContainer,
} from 'recharts';





const Statistics = () => {
    const cart = getCartItem();
    const allData = useLoaderData();
    const cartItems = allData.filter(item=> cart.includes(item.product_id))
    
    console.log(cartItems)


    return (
        <div>
           <Helmet>
                <title>Statics | Gadget Haven</title>
           </Helmet>
           <div className="mb-16">
           <div className="bg-primaryColor py-6  ">
               <h1 className="text-center text-white text-3xl mb-4 font-semibold">Dashboard</h1>
               <p className="text-white/70 text-center ">Explore the latest gadgets that will take your experience to the next level. 
                  From smart devices to the coolest accessories, we have it all!</p>
            </div>
           </div>
           <div className="px-2 md:px-10 lg:px-24">
            <div className="mb-12">
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart
                    width={500}
                    height={200}
                    data={cartItems}
                    syncId="anyId"
                    margin={{
                      top: 10,
                      right: 30,
                      left: 0,
                      bottom: 0,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="product_title" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="price" stroke="#82ca9d" fill="#82ca9d" />
                    <Brush />
                  </LineChart>
                </ResponsiveContainer>
        
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart
                    width={500}
                    height={200}
                    data={cartItems}
                    syncId="anyId"
                    margin={{
                      top: 10,
                      right: 30,
                      left: 0,
                      bottom: 0,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="product_title" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="price" stroke="#82ca9d" fill="#82ca9d" />
                  </AreaChart>
                </ResponsiveContainer>
            </div>

           </div>
        </div>
    );
};

export default Statistics;