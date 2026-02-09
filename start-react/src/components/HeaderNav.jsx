 import React from "react";
import PropTypes from "prop-types";
import avatar from "../img/logo/AVATAR.png";

HeaderNav.propTypes = {
  isLogin: PropTypes.bool,
};

HeaderNav.defaultProps = {
  isLogin: false,
};

function HeaderNav(props) {
  const btnlogin = {
    borderRadius: "50%",
    width: "50px",
    height: "50px",
    color: "antiquewhite",
    backgroundColor: "transparent",
    border: "1px solid antiquewhite",
    cursor: "pointer",
  };

  if (props.isLogin) {
    return (
      <div className="avatar">
        <a href="#">
          <img src={avatar} alt="avatar" width="74" height="74" />
        </a>
      </div>
    );
  } else {
    return <button style={btnlogin}>login</button>;
  }
}

export default HeaderNav;
