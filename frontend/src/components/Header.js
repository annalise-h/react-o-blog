import React from "react";
import AddBoxIcon from "@mui/icons-material/AddBox";

import "../css/Header.css";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="header">
        <AddBoxIcon
          id="add-box-icon"
          sx={{ fontSize: 35 }}
          onClick={this.props.handleAddClick}
        />

        <h1 id="title">React-O-Blog</h1>
      </div>
    );
  }
}

export default Header;
