import React, { useState } from "react";

import { MenuMenu, MenuItem, Menu, Container } from "semantic-ui-react";
import CartSummary from "./CartSummary";
import SignedOut from "./SignedOut";
import SignedIn from "./SignedIn";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Navi = () => {
  const [isAuthanticated, setIsAuthanticated] = useState(true);
  const navigate = useNavigate();

  const { cartItems } = useSelector((state) => state.rootReducer.cart);

  const handleSignOut = () => {
    setIsAuthanticated((isAuthanticated) => false);
    navigate("/");
  };

  const handleSignIn = () => {
    setIsAuthanticated(true);
  };

  return (
    <div>
      <Menu inverted>
        <Container>
          <MenuItem name="home" />
          <MenuItem name="messages" />

          <MenuMenu position="right">
            {cartItems.length > 0 && <CartSummary />}
            {isAuthanticated ? (
              <SignedIn signOut={handleSignOut} />
            ) : (
              <SignedOut signIn={handleSignIn} />
            )}
          </MenuMenu>
        </Container>
      </Menu>
    </div>
  );
};

export default Navi;
