/* eslint-disable react/prop-types */
const Product = (props) => {
  // eslint-disable-next-line react/prop-types
  const data = props.data;
  // console.log(data);
  return (
    <div className="container">
      {
        data.map((product) => {
          return (
            <div className="card" key={product.id}>
              <div className="card-img">
                <img height={400} src={product.image} alt="" />
              </div>
              <div className="card-info">
                <h3>{product.title}</h3>
                <h4>Price: {product.price}</h4>
                <h4>Rating: {product.rating.rate}</h4>
                <p>{product.description}</p>
              </div>
              <div>
                <button className="card-button">Add to Cart</button>
              </div>
            </div>
          )
        })
      }
    </div>
  );
};

export default Product;