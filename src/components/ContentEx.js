
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
   height:'850px',
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
    lineHeight: '1.3em',
    fontWeight: 500,
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
    
  }
});

const ContentEx = ({ classes }) => (
  <div className={classes.root}>
    <div
    //  className={classes.carousel}
     >
         <div 
         className={classes.carouselMain}
         >
         {/* <Carousel autoPlay showThumbs={false} showIndicators={false} showStatus={false}>
                <div>
                    <img src={dash_1} />
                </div>
                <div>
                    <img src={dash_2} />
                    
                </div>
                <div>
                    <img src={dash_3} />
                </div>
        </Carousel> */}
        <video
          autoPlay
          muted
          loop
          style={{
            // position: 'fixed',
            width: '100%',
            left: 0,
            top: 0,
          }}>
          <source
            src="https://www.dropbox.com/s/4la4yvo5qulc2xl/Website%202%20Draft%202.mp4?raw=1"
            type="video/mp4"
          />
        </video>
        <div className={classes.dashHead}>
          <div className={classes.dashHeading}>GBPIET IEEE</div>
           <div className={classes.dashContent}> 
          The GBPIET IEEE Club represents the student branch for the Institute of Electrical and Electronics Engineers (IEEE).
          <br/>
        Our mission is to create and support a tight-knit community among the students and faculty in the several Departments of Science and Engineering at GBPIET.
</div>
        </div>
        </div>
    </div>
    <div className={classes.parent}>
      <div className={classes.childMain}>
        <div>
    <Typography weight={"bold"} variant={"h4"} gutterBottom className={classes.headingRoot}>
    Welcome to IEEE Student Branch 
 <Link underline={"none"}>{' '} GBPIET</Link>
    </Typography>
    <Typography gutterBottom>
      <b> (updated 1 May 2020)</b>
    </Typography>
    <Typography className={classes.rootContent}>
    IEEE Student Branch of GBPIET seeks to enhance the learning experience of the student community on the GBPIET. The Student Branch focuses on conducting social and technical activities for students, and also encourages the students to take full advantage of the benefits of IEEE membership, including scholarships, competitions, and conference grants.
    The Student Branch also intends to provide opportunities for students to network with peers in other institutes, academicians, professionals, engineers, and scientists through the on campus IEEE Student Branch and the Local IEEE Section, thereby encouraging students to be a part of the global IEEE community.
    <br/>
    The IEEE student branch GBPIET is the complete institute level part of the IEEE Uttar Pradesh Section.
    </Typography >
    <br />
    <br />
    <Typography weight={"bold"} variant={"h5"} gutterBottom className={classes.subhead}>
      {"Our Mission"}
    </Typography>
    <Typography gutterBottom className={classes.rootContent}>   
    It aims to encourage and support students to put their creativity and intelligence into action. It helps students brings up a lot of amazing ideas. It was also created with the vision to give students the opportunity to meet and learn from fellow students, as well as faculty members and professionals in the field.  As we want to make every student here in GBPIET to contribute her/his own bit to science and tehnology.  </Typography>
<br/>
<br/>
<br/>
 <Typography weight={"bold"} variant={"h4"} gutterBottom className={classes.headingRoot}>
 UP SECTION
    </Typography>
    <Typography weight={"bold"} variant={"h5"} gutterBottom className={classes.subhead}>
      {"Background"}
    </Typography>
    <Typography gutterBottom className={classes.rootContent}>   
    The Uttar Pradesh Section is located in Region 10, and is represented at the India Council. The Section was formed on 11 May 1992.
Prior to that, Uttar Pradesh had been a sub-section under the Delhi Section since 28 December 1970, and those section officers listed prior to 1992 were for the sub-section.</Typography>
 <br/>
 <br/>
 <Typography weight={"bold"} variant={"h5"} gutterBottom className={classes.subhead}>
      {"Mission Statement"}
    </Typography>
    <Typography gutterBottom className={classes.rootContent}>   
    In order to fulfill IEEE’s mission of advancing the theory and practice of electrical, electronics, communications and computer engineering, as well as computer science and related areas, Region 10 activities are directed to developing and maintaining regional entities for the best interests and benefits of the IEEE members in the region</Typography>
 <br/>
 <br/>
 <Typography weight={"bold"} variant={"h5"} gutterBottom className={classes.subhead}>
      {"Chairs of IEEE UP Section"}
    </Typography>
    <Typography gutterBottom className={classes.rootContent}>   
    Prof. Sanyam V Juneja1976-79Prof. Gopal K Dubey1992Prof. Suresh C Srivastava1994Prof. Shyama P Das2006-07Prof. Yatindra Nath Singh2009-10Prof. Yatindra Nath Singh2010-11Prof. Ajai Jain2011-12Prof. Ajai Jain2012-13Prof. S. N. Singh2013-14Prof. S. N. Singh2014-15Prof. A. Biswas2015-16Prof. J. Ramkumar2016-17Prof. J. Ramkumar2017-18Prof. Kumar Vaibhav Srivastava2018-19Prof. Asheesh Kumar2019-20Prof. Asheesh Kumar2010-21  </Typography>
 <br/>
 <br/>
    </div>
    </div>
    <div className={classes.childSidebar}>
    <StickyBox offsetTop={100}>
    <Card className={classes.cardSide}>
    <div className={classes.subhead}>Upcoming Events</div>
    <div className={classes.subheadNotice}>
    2020 International Conference on Bioinformatics and Systems Biology (BSB) (*UP Section) </div>
    <Divider light />
    <div className={classes.subheadNotice}>
    2020 International Conference on Frontiers in Information and Computer Security (FICS)
    (*UP Section)
 </div>
    <Divider light />

    <div className={classes.subheadNotice}>
    2020 9th International Conference System Modeling and Advancement in Research Trends (SMART) 
    (*UP Section)</div>
    <Divider light />
    <div className={classes.subheadNotice}>
    2020 2nd International Conference on Advances in Computing, Communication Control and Networking (ICACCCN)
    (*UP Section)
</div>
    <Divider light />
    <Divider light />
    <div className={classes.subheadNotice}>
    2021 International Conference on Advance Computing and Innovative Technologies in Engineering (ICACITE)  
    (*UP Section)</div>
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
