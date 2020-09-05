import React,{useState} from "react";
import {Link} from 'react-router-dom';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Icon from "@material-ui/core/Icon";
import Divider from "@material-ui/core/Divider";
import ContentEx from './ContentEx';
import TeamEx from './TeamEx';
import Typography from "@material-ui/core/Typography";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
const list = [
  {
    primaryText: "Home",
    icon: "home",
    link:'/'
  },
  {
    primaryText: "About",
    icon: "hdr_weak",
    link:'/'
  },
  {
    primaryText: "Our Team",
    icon: "people",
    link:'/team'
  },
  {
    primaryText: "News & Events",
    icon: "announcement",
    link:'/'
  },
  {
    primaryText: "Recognition",
    icon: "offline_pin",
    link:'/'
  },
  {
    primaryText: "Pin Board",
    icon: "new_releases",
    link:'/'
  },
  {
    primaryText: "Gallery",
    icon: "theaters",
    link:'/'
  },
];
function NavContentEx () {

 const [val,setVal]=useState(0);
 return (
 <>
 <List>
    {list.map(({ primaryText, icon ,link}, i) => (
      <Link to={link}>
        <ListItem key={primaryText} selected={i === val} button onClick={()=>{setVal(i)}} >
        <ListItemIcon>
          <Icon>{icon}</Icon>
        </ListItemIcon>
        <ListItemText
         disableTypography
         primary={<Typography style={{ color: '#FFFFFF', 
         fontFamily: 'CeraproMedium',
         color: '#565c5f',
         fontSize: '21px',
         lineHeight: '1.8em',
         fontWeight: 200}}>{primaryText}</Typography>} 
          // primary={primaryText}
          primaryTypographyProps={{ noWrap: true }}
        />
      </ListItem> 
      </Link>
    ))}
    <Divider style={{ margin: "12px 0" }} />
    <ListItem button>
      <ListItemIcon>
        <Icon>settings</Icon>
      </ListItemIcon>
      <ListItemText
        primary={"Contact Us"}
        primaryTypographyProps={{ noWrap: true }}
      />
    </ListItem>
  </List>
  </>
 );
};

NavContentEx.propTypes = {};
NavContentEx.defaultProps = {};

export default NavContentEx;
