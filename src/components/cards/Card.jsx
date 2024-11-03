import PropTypes from "prop-types";


const Card = ({category}) => {
    return (
        <div className="border-2 p-4 rounded-xl">
            <img src={category.product_image} alt="" 
            className="h-[350px] w-full rounded-xl" />
        </div>
    );
};

Card.propTypes = {
    category: PropTypes.object
}

export default Card;