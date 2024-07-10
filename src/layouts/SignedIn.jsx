import React from "react";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  MenuItem,
  Image,
} from "semantic-ui-react";

const SignedIn = (props) => {
  return (
    <div>
      <MenuItem>
        <Image
          avatar
          spaced="right"
          src="https://www.technopat.net/sosyal/eklenti/ao2lpbx_460s-jpg.1126827/"
        />
        <Dropdown pointing="top left" text="Ars">
          <DropdownMenu>
            <DropdownItem text="info" icon="info" />
            <DropdownItem
              text="sign out"
              icon="sign-out"
              onClick={props.signOut}
            />
          </DropdownMenu>
        </Dropdown>
      </MenuItem>
    </div>
  );
};

export default SignedIn;
