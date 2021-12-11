import React  from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from "react-router-dom";
import { sendToView } from "../../actions/view";
import { ProductSlider } from "./ProductSlider";

//Images imports
import { addCart, updateItem } from "../../actions/cart";
import { Loading } from "../common/Loading";

const OUT_OF_STOCK = 'out of stock' 

const ProductCard = ({ item }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { images_thumb, title, price, type } = item;
  const items = useSelector((state) => state.cart.items);

  const sendTo = (e) => {
    dispatch(sendToView(item));

    return history.push(
      `/tienda/${type.toLowerCase()}/${title
        .replace(/\s/g, "")
        .toLowerCase()}`
    );
  };

  const addToCart = (item, action) => {
    const itemsExists = items.find((cartItem) => cartItem.id === item.id);

    if (itemsExists) {
      dispatch(updateItem(item, action));
    } else {
      dispatch(addCart(item));
    }
  };

  return (
    <>
      {title ? (
        <div className="card__main" >
          <div className="card__carousel" >
            <ProductSlider slideImgs={images_thumb} action={sendTo} />
          </div>

          {/* Acá este link que reemplaza la url con el tipo de producto y el producto en sí, quitando espacios y llevando todo a minúscula */}
          <div className="card__description" id="link">
            <h1 className="card__title">{title}</h1>
            <p className="card__price">$ {price}</p>
            <strong
              className={
                item.availability !== OUT_OF_STOCK
                  ? `card__inStock`
                  : `card__outOfStock`
              }
            >
              {item.availability}
            </strong>
            <button
              id="btn"
              className="btn btn__success"
              onClick={() => addToCart(item, "add")}
              disabled={item.availability === OUT_OF_STOCK}
            >
              Comprar
              </button>
          </div>
        </div>
      ) : <Loading />}
    </>
  );
};

export default ProductCard;
