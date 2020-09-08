
/* eslint-disable */
import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import dash_1 from '../assets/images/dash_1.jpg'; 
import dash_2 from '../assets/images/dash_2.jpg'; 
import dash_3 from '../assets/images/dash_3.jpg'; 
import StickyBox from "react-sticky-box";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Divider from "@material-ui/core/Divider";
const styles = ({ breakpoints }) => ({
  root: {
    // position:'absolute',
    // top:0,
    // left:256,
    fontFamily:'Montserrat',
    padding: 16,
    [breakpoints.up("sm")]: {
      padding: 24,
      maxWidth: 500,
      margin: "auto"
    },
    [breakpoints.up("md")]: {
      maxWidth: 1980
    }
  },
  carousel:{
     margin:'auto',
     width:'calc(100vw-48px)',
     height:'calc(100vh-100px)'
  },
  carouselSide:{
    //  width:'1fr'
  },
  carouselMain:{
    // height:'100%',
    // background:'https://www.dropbox.com/s/1s39lsv9sa4r6y4/TBS_1375.JPG?raw=1}',
    // backgroundSize:'fit',
   height:'550px',
    width:'100%',
    overflow:'hidden',
    position:'relative',
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '&::after': {
      content: '""',
      position:'absolute',
      top:0,
      left:0,
      backgroundImage:'linear-gradient(180deg,rgba(27,33,41,.87),rgba(27,33,41,.87))',
      zIndex:'2',
      width:'100%',
      height:'850px',
      opacity:0.8,
    }
  },
  parent:{
    marginTop:'50px',
    display:'flex',
  },
  childMain:{
   marginRight:'50px',
   paddingLeft:'50px',
   paddingRight:'30px',

  },
  childSidebar:{
    marginTop:'40px',
    minWidth:'470px',
  },
  cardSide:{
     padding:'30px',
     paddginTop:'50px',
     boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
     "&:hover": {
       boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
     },
     borderRadius:'20px',
    //  paddingRight:'30px',
  },
  headingRoot:{
      fontFamily: 'CeraproMedium',
      fontSize: '50px',
      color: '#485160',
  },
  rootContent:{
    fontFamily: 'CeraproLight',
    color: '#5b6569',
    fontSize: '24px',
    lineHeight: '1.8em',
    fontWeight: 400,
    marginBottom:'40px',
    textAlign: 'justify',
  textJustify: 'inter-word',
  },
  subhead:{
    color: '#485160',
    fontFamily: 'CeraproMedium',
    fontSize: '32px',
    lineHeight: '1.5em',
    fontWeight: 500,
    borderBottom:'5px solid #485160',
    width:'fit-content'
  },
  subheadNotice:{
    fontFamily: 'CeraproLight',
    color: '#565c5f',
    fontSize: '21px',
    lineHeight: '1.8em',
    fontWeight: 400,
    paddingTop:'13px',
    paddingBottom:'13px'
  },
  dashHead:{
    position:'absolute',
    // top:'0px',
    // left:'',
    color:'#fff',
    fontSize:'60px',
    zIndex:'10',
    display:'flex',
    flexDirection:'column',
    textAlign:'center',
  },
  dashContent:{
    marginTop: '45px',
    color: 'rgba(208,212,219,.842)',
    fontFamily: 'CeraproMedium',
    fontSize: '23px',
    lineHeight: '1.9em',
    maxWidth:'1270px',
  },
  dashHeading:{
    fontFamily: 'CeraproMedium',
    fontSize: '80px',
    color: '#e3e7ee',
    lineHeight: '.6em',
  },
  startText:{
       display:'flex',
   flexDirection:'column',
   textAlign:'center'
  },
  aboutImg:{
    objectFit:'cover',
    maxWidth:'100%',
  }
});

const AboutEx = ({ classes }) => (
  <div className={classes.root}>
    <div
    //  className={classes.carousel}
     >
         <div 
         className={classes.carouselMain}
         >
        <img src="https://www.dropbox.com/s/1s39lsv9sa4r6y4/TBS_1375.JPG?raw=1" className={classes.aboutImg}/>
        <div className={classes.dashHead}>
          <div className={classes.dashHeading}>THE IEEE COMMUNITY</div>
           <div className={classes.dashContent}> 
          {/* The GBPIET IEEE Club represents the student branch for the Institute of Electrical and Electronics Engineers (IEEE).
          <br/>
        Our mission is to create and support a tight-knit community among the students and faculty in the Department of Electrical Engineering and Computer Science (EECS) at GBPIET.
          */}
       </div> 
        </div>
        </div>
    </div>
    <div className={classes.parent}>
      <div className={classes.childMain}>
      <div className={classes.startText}>
    <Typography weight={"bold"} variant={"h4"} gutterBottom className={classes.headingRoot}>
    We Are GBPIET 
 <Link underline={"none"}>{' '} IEEE Family</Link>
    </Typography>
    <Typography indent={"small"}className={classes.rootContent}>
    IEEE is an opportunity. It is you, who has to decide if you want to be a part of this amazing community.
    It will help you to interact with other IEEE members of your Student branch (SB) and also with the local section members. The membership will help you boost the technical knowledge in you and also keep oneself updated. 
    Involving in SB activities not only helps you to acquire technical skills but helps you to get managerial skills as well as help to network with other enthusiastic students, volunteers as well as professional members.
Its all about your passion towards a scientific and technical arena.
</Typography >
</div>
<br/>
    <br/>
     <Typography weight={"bold"} variant={"h5"} gutterBottom className={classes.subhead}>
      {"Let's start with, What  is IEEE ?"}
    </Typography>
    <Typography gutterBottom className={classes.rootContent}>   
    The Institute of Electrical and Electronics Engineers, Incorporated (IEEE) is a non-profit corporation, incorporated in the state of New York on 16 March 1896.
The purpose of the IEEE is to engage exclusively in scientific and educational activities within the meaning of Section 501(c)(3) of the Internal Revenue Code of 1986, as amended, directed toward the advancement of the theory and practice of electrical, electronics, communications and computer engineering, as well as computer science, the allied branches of engineering and the related arts and sciences, which benefit the engineering profession and the public.  <br />
    </Typography>
    <br/>
    <br/>

    <Typography weight={"bold"} variant={"h5"} gutterBottom className={classes.subhead}>
      {"What are the perks of being a student member of IEEE?"}
    </Typography>
    <Typography gutterBottom className={classes.rootContent}>   
   <li>You stay updated with the latest technology and gadgets.</li>
   <li>As a student you will be exposed to various technical conferences.</li>
   <li>You might be fortunate enough to meet some great names of scientific and technical field. Their world will for sure inspire you .</li>
   <li>Some of the unique skills such as Leadership,team management could be cultivated in yourself.</li>
   <li>IEEE student section will have Hub meetings. “Networking” or in short you wil have some new friends from different colleges to help you.</li>
    <br />
    </Typography>
    <br/>
    <br/>
    <Typography weight={"bold"} variant={"h5"} gutterBottom className={classes.subhead}>
      {"Networking Opportunities and Exposure"}
    </Typography>
    <Typography gutterBottom className={classes.rootContent}>   
    You will get a chance to interact and network with other IEEE Members at your college. When you go to attend IEEE Events outside, your professional network grows manifold. you get to meet and interact with IEEE members from various places, resource persons from industry and academia as well.
    </Typography>
    <br/>
    <br/>
    <Typography weight={"bold"} variant={"h5"} gutterBottom className={classes.subhead}>
      {"Stay Technically Current"}
    </Typography>
    <Typography gutterBottom className={classes.rootContent}>   
    With Technical Magazines like IEEE Spectrum, IEEE Potentials and IEEE The Institute Newsletter, You will be able to stay updated with the latest advancements in your field of interest and all fields in general. You will get regular updates about the various international and national IEEE Conferences happening at various places. The IEEE Xplore Digital Library, comes at a discounted price for IEEE Student Members. </Typography>
    <br/>
    <br/>
    <Typography weight={"bold"} variant={"h5"} gutterBottom className={classes.subhead}>
      {"Volunteering at Student Branch/Section/Council/Region"}
    </Typography>
    <Typography gutterBottom className={classes.rootContent}>   
    By Volunteering at the SB Level to organise events, helps you learn teamwork, and enhances your management, leadership skills. The dedication to volunteering at SB Level will open up opportunities at the Section/Region/Council Level as well, thereby enhancing your skill-set and your professional network.
<br/>
“Volunteers are not paid, not because they are worthless, but because they are priceless!!!”
 </Typography>
 <br/>
    <br/>
    <Typography weight={"bold"} variant={"h5"} gutterBottom className={classes.subhead}>
      {"Online Benefits"}
    </Typography>
    <Typography gutterBottom className={classes.rootContent}>   
    IEEE Collabratec is a social network for IEEE Members only. This can be used to collaborate with your contacts/network, share important information etc. IEEE ResumeLab lets you create and customise your resume from various styles/templates. myIEEE is a personalised portal to access your member benefits. There are so many IEEE Member Benefits available online. http://IEEE.tv provides lot of technical content such as online courses, videos on technology, streaming of conferences etc. IEEE Student Members can access http://IEEE.tv for free.
 </Typography>
 <br/>
    <br/>
    <Typography weight={"bold"} variant={"h5"} gutterBottom className={classes.subhead}>
      {"Technical Societies"}
    </Typography>
    <Typography gutterBottom className={classes.rootContent}>   
    Technical Societies further concentrate on particular fields of engineering/technology. These societies conduct their own International Conferences, have their own magazines/newsletters, offer online courses etc. IEEE Computer Society (CS) has its own digital library.
 </Typography>
 <br/>
 <br/>
    </div>
  </div>
  <br />
    <br />
    <br />
  </div>
);

AboutEx.propTypes = {};
AboutEx.defaultProps = {};

export default withStyles(styles)(AboutEx);
