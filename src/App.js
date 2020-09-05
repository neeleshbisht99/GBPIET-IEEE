import React, { useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { StylesProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import { withStyles } from "@material-ui/core/styles";
import TeamEx from './components/TeamEx';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {
  Root,
  getHeader,
  getDrawerSidebar,
  getSidebarTrigger,
  getSidebarContent,
  getCollapseBtn,
  getContent,
  getFooter
} from "@mui-treasury/layout";
import {
  getDefaultScheme,
  getStandardScheme,
  getFixedScheme,
  getContentBasedScheme,
  getCozyScheme,
  getMuiTreasuryScheme
} from "@mui-treasury/layout/presets";

import NavContentEx from "./components/NavContentEx";
import NavHeaderEx from "./components/NavHeaderEx";
import HeaderEx from "./components/HeaderEx";
import ContentForm from "./components/ContentForm";
import ContentEx from "./components/ContentEx";
import FooterEx from "./components/FooterEx";
import Main from './components/Main';

import "./styles.css";

const Header = getHeader(styled);
const DrawerSidebar = getDrawerSidebar(styled);
const SidebarTrigger = getSidebarTrigger(styled);
const SidebarContent = getSidebarContent(styled);
const CollapseBtn = getCollapseBtn(styled);
const Content = getContent(styled);
const Footer = getFooter(styled);

const presets = {
  createDefaultLayout: getDefaultScheme(),
  createStandardLayout: getStandardScheme(),
  createFixedLayout: getFixedScheme(),
  createContentBasedLayout: getContentBasedScheme(),
  createCozyLayout: getCozyScheme(),
  createMuiTreasuryLayout: getMuiTreasuryScheme()
};


const styles = () => ({
  headerRoot: {
    marginLeft: '306px',
    // width: 'calc(100% - 306px - 50px)',
    marginRight: '50px',
    marginTop: '30px',
    borderRadius: '50px',
    backgroundColor:'#f0f4f6',
  },
  nav:{
      backgroundImage:'linear-gradient(to right, #f0f4f6, #fff)' ,
      fontFamily: 'CeraproMedium',
      color: '#565c5f',
      fontSize: '21px',
      lineHeight: '1.8em',
      fontWeight: 400,
  }
});

function App({classes }) {
  const [loading, setLoading] = useState(false);
  const [preset, setPreset] = useState("createDefaultLayout");
  const [data, setData] = useState({
    header: true,
    nav: true,
    content: true,
    footer: true
  });
  return loading ? (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Typography variant={"h2"}>Changing Preset...</Typography>
    </div>
  ) : (
    <BrowserRouter>
    <StylesProvider injectFirst>
      <CssBaseline />
      <Root scheme={presets[preset]}>
        {({ state: { sidebar } }) => (
          <>
            <Header
            classes={{root:classes.headerRoot}}>
              <Toolbar>
                <SidebarTrigger sidebarId="primarySidebar" />
                {data.header && <HeaderEx />}
              </Toolbar>
            </Header>
            <DrawerSidebar sidebarId="primarySidebar">
              <SidebarContent className={classes.nav}>
                <NavHeaderEx collapsed={sidebar.primarySidebar.collapsed} />
                {data.nav && <NavContentEx />}
              </SidebarContent>
              <CollapseBtn />
            </DrawerSidebar>
            <Content>
            <Main/>
            </Content>
            <Footer>{data.footer && <FooterEx />}</Footer>
          </>
        )}
      </Root>
    </StylesProvider>
      </BrowserRouter>
  );
}

export default withStyles(styles)(App);
