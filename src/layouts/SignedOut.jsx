import React from "react";
import { Button, MenuItem } from "semantic-ui-react";

const SignedOut = (props) => {
  return (
    <div>
      <MenuItem>
        <Button primary>Sign</Button>
        <Button primary style={{ marginLeft: "8px" }} onClick={props.signIn}>
          Login
        </Button>
      </MenuItem>
    </div>
  );
};

export default SignedOut;
