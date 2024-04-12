const Card = (props) => {
    // const title = 'Mathematics Olympiad';
    // const description = 'Enhance you math skills by doing, practicing and compete with others.'
    // eslint-disable-next-line react/prop-types
    const { title, price } = props;
   
    return (
        <div className="card">
            <h3 className="card-title">{title}</h3>
            <p className="card-description">{price}</p>
            <button>Click Me</button>
        </div>
    );
};

export default Card;