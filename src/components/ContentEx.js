
/* eslint-disable */
import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import one from '../assets/images/Logo_for_website1.png'; 
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
    // display:'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
    //  maxWidth:'1200px',
     
     margin:'auto'
  },
  carouselSide:{
    //  width:'1fr'
  },
  carouselMain:{
    // width:'2fr',
  },
  parent:{
    marginTop:'50px',
    display:'flex',
  },
  childMain:{
      // flexGrow:1,
      // display:'flex',
    //  textAlign:'center'
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
     fontFamily:'Montserrat',
     color:'#717373',
     fontWeight:600 ,
     fontSize:'36px',
  },
  rootContent:{
    fontFamily:'Montserrat',
    color:'#717373',
    fontWeight:500 ,
    fontSize:'20px',
  },
  subhead:{
    fontFamily:'Montserrat',
    color:'#717373',
    fontWeight:550 ,
    fontSize:'26px',
  },
  subheadNotice:{
    fontFamily:'Montserrat',
    color:'#717373',
    fontWeight:450 ,
    fontSize:'18px',
    paddingTop:'13px',
    paddingBottom:'13px'
  }
});

const ContentEx = ({ classes }) => (
  <div className={classes.root}>
    <div className={classes.carousel}>
      <div className={classes.carouselSide}></div>
         <div className={classes.carouselMain}>
         <Carousel autoPlay showThumbs={false} showIndicators={false} showStatus={false}>
                <div>
                    <img src={one} />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <img src={one} />
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                    <img src={one} />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
            </Carousel>
            </div>
            <div className={classes.carouselSide}></div>
    </div>
    <div className={classes.parent}>
      <div className={classes.childMain}>
        <div>
    <Typography variant={"overline"}>INTRODUCING</Typography>
    <Typography weight={"bold"} variant={"h4"} gutterBottom className={classes.headingRoot}>
    Welcome to IEEE Student Branch 
 <Link underline={"none"}>{' '} GBPIET</Link>
    </Typography>
    <Typography gutterBottom>
      <b> (updated 1 May 2020)</b>
    </Typography>
    <Typography className={classes.rootContent}>
    The GBPIET IEEE Club represents the student branch for an international organization, the Institute of Electrical and Electronics Engineers (IEEE) .
    {/* </Typography >
    <Typography className={classes.rootContent}> */}
     Our mission is to create and support a tight-knit community among the students and faculty in the Department of Electrical Engineering and Computer Science at GBPIET.
    </Typography >
    <br/>
    <Typography indent={"small"}className={classes.rootContent}>
   IEEE Student Branch of IIT Kharagpur seeks to enhance the learning experience of the student community on the IIT Kharagpur campus. The Student Branch focuses on conducting social and technical activities for students, and also encourages the students to take full advantage of the benefits of IEEE membership, including scholarships, competitions, and conference grants. The Student Branch also intends to provide opportunities for students to network with peers in other institutes, academicians, professionals, engineers, and scientists through the on campus IEEE Student Branch and the Local IEEE Section, thereby encouraging students to be a part of the global IEEE community.
In the year 2010, the IEEE Student Branch of IIT Kharagpur joined IEEE University Partnership Program (UPP), an elite group of 17 top engineering schools/universities worldwide. The partnership allows the Student Branch to avail additional resources and support, including help in networking with local, regional, and international IEEE groups.
   </Typography>
    <br />
    <br />
    <br />
     <Typography weight={"bold"} variant={"h5"} gutterBottom className={classes.subhead}>
      {"Let's start with Why?"}
    </Typography>
    <Typography gutterBottom className={classes.rootContent}>   
    In the year 2010, the IEEE Student Branch of IIT Kharagpur joined IEEE University Partnership Program (UPP), an elite group of 17 top engineering schools/universities worldwide. The partnership allows the Student Branch to avail additional resources and support, including help in networking with local, regional, and international IEEE groups.
      <br />
    </Typography>
    <br/>
    <br/>
    <Typography weight={"bold"} variant={"h5"} gutterBottom className={classes.subhead}>
      {"Join our Mission?"}
    </Typography>
    <Typography gutterBottom className={classes.rootContent}>   
    In the year 2010, the IEEE Student Branch of IIT Kharagpur joined IEEE University Partnership Program (UPP), an elite group of 17 top engineering schools/universities worldwide. The partnership allows the Student Branch to avail additional resources and support, including help in networking with local, regional, and international IEEE groups.
      <br />
    </Typography>
    </div>
    </div>
    <div className={classes.childSidebar}>
    <StickyBox offsetTop={100}>
    <Card className={classes.cardSide}>
    <div className={classes.subhead}>Recent Events</div>
    <div className={classes.subheadNotice}>
    Invited Talk: "Forecasting Spatio-temporal Impact of Traffic Incidents in Transportation Networks" by Dr. Banishree Ghosh, A*STAR, Singapore -- April 20, 2020
    </div>
    <Divider light />
    <div className={classes.subheadNotice}>
    Invited Talk: "Forecasting Spatio-temporal Impact of Traffic Incidents in Transportation Networks" by Dr. Banishree Ghosh, A*STAR, Singapore -- April 20, 2020
    </div>
    <Divider light />
    <div className={classes.subheadNotice}>
    Invited Talk: "Forecasting Spatio-temporal Impact of Traffic Incidents in Transportation Networks" by Dr. Banishree Ghosh, A*STAR, Singapore -- April 20, 2020
    </div>
    <Divider light />
    <Divider light />
    <div className={classes.subheadNotice}>
    Invited Talk: "Forecasting Spatio-temporal Impact of Traffic Incidents in Transportation Networks" by Dr. Banishree Ghosh, A*STAR, Singapore -- April 20, 2020
    </div>
    </Card>
    {/* <Card className={classes.cardSide}>
    <div className={classes.subhead}>JOIN US</div>
    <div className={classes.subheadNotice}>
    Transportation Networks" by Dr. Banishree Ghosh, A*STAR, Singapore -- April 20, 2020
    </div>
    </Card> */}
  </StickyBox>
    </div>
  </div>
  <br />
    <br />
    <br />
  </div>
);

ContentEx.propTypes = {};
ContentEx.defaultProps = {};

export default withStyles(styles)(ContentEx);
