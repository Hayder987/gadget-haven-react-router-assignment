import PropTypes from "prop-types";
import Card from "./Card";

const Cards = ({catData}) => {
    return (
        <div className="">
            {
                catData.length>0 ? <div className="w-10/12 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    catData.map(category=> <Card key={category.product_id} 
                        category={category}></Card>)
                }
            </div> : 
            <div className="grid grid-cols-1 justify-items-center">
                <h1 className="text-4xl font-bold text-center">No Data found</h1>
            </div>
            }
        </div>
    );
};

Cards.propTypes ={
    catData: PropTypes.array
}
export default Cards;