import React, { useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { StylesProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import { withStyles } from "@material-ui/core/styles";
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
  },
  nav:{
      backgroundColor: '#F2F4FB',
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
              {/* <ContentForm
                preset={preset}
                onChangePreset={val => {
                  setLoading(true);
                  setPreset(val);
                  setTimeout(() => setLoading(false), 500);
                }}
                data={data}
                onChangeData={setData}
              /> */}
              {/* {data.content && <ContentEx />} */}
              <Main/>
            </Content>
            <Footer>{data.footer && <FooterEx />}</Footer>
          </>
        )}
      </Root>
    </StylesProvider>
  );
}

export default withStyles(styles)(App);
