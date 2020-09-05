import React from "react";
import PropTypes from "prop-types";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Logo from '../assets/images/IEEE_logo.svg.png';
const NavHeaderEx = ({ collapsed }) => (
  <>
    <div style={{ padding: collapsed ? 8 : 16, transition: "0.3s",display:'flex','text-align':'center' }}>
      <img src={Logo} style={{height:'70px',
      width: '200px',display:'inline-block'}}/>
    </div>
    <Divider />
  </>
);

NavHeaderEx.propTypes = {
  collapsed: PropTypes.bool
};
NavHeaderEx.defaultProps = {
  collapsed: false
};

export default NavHeaderEx;
