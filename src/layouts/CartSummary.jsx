import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import {
  DropdownMenu,
  DropdownItem,
  Dropdown,
  DropdownDivider,
  Label,
  Icon,
  Button,
  ButtonGroup,
} from "semantic-ui-react";
import { removeFromCart } from "../store/actions/CartActions";

const CartSummary = () => {
  const { cartItems } = useSelector((state) => state.rootReducer.cart);

  const dispatch = useDispatch();

  const removeProduct = (product) => {
    dispatch(removeFromCart(product));
    toast.success(`${product.productName} Sepeten çıkarıldı`);
    console.log(product);
  };

  return (
    <div>
      <Dropdown item text="Your Cart">
        <DropdownMenu>
          {cartItems.map((cartItem) => (
            <DropdownItem>
              {cartItem.product.productName}
              <Label>{cartItem.quantity}</Label>
              <ButtonGroup basic size="small">
                <Button onClick={() => removeProduct(cartItem.product)}>
                  <Icon name="trash" />
                </Button>
              </ButtonGroup>
            </DropdownItem>
          ))}

          <DropdownDivider />
          <DropdownItem as={NavLink} to="/cart">
            go to cart
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default CartSummary;
