import React from 'react';
import ProductCard from './ProductCard';
import classes from './team.module.css';
import Img from '../assets/images/hsb.png';
function TeamEx()
{
    const { container,cards,parent,singleCard, heading }=classes;
    return (
        <div className={container}>
      <div className={heading}>
        OUR TEAM
      </div>
      <div className={parent}> 
      <div 
      className={cards}
      >

<div className={singleCard}>
        <ProductCard
          photos={[
            'https://www.dropbox.com/s/a5t9lx20yuhhf53/principal.jpg?raw=1',
          ]}
        //   price='$99'
         personName='Dr. M.P.S.Chauhan'
         designation='Chief Patron'
         position='Director'
        />
        </div>
         <div className={singleCard}>
        <ProductCard
          photos={[
            'https://www.dropbox.com/s/pl2ynwxjybd2bxk/hsb.jpg?raw=1',
          ]}
        //   price='$99'
         personName='Dr. H.S. Bhadauria'
         designation='Patron'
         position='Professor & Head CSE'
        />
        </div>
         <div className={singleCard}>
        <ProductCard
          photos={[
            'https://www.dropbox.com/s/22j1gl7sb1ai9b1/ysingh.jpg?raw=1',
          ]}
        //   price='$99'
         personName='Dr. Y. Singh'
         designation='Patron'
         position='Professor & Head ECE'
        />
        </div>

         <div className={singleCard}>
        <ProductCard
          photos={[
            'https://www.dropbox.com/s/nwuczxo0tzcruuv/Sanjaygairola.jpg?raw=1',
          ]}
        //   price='$99'
         personName='Dr. S. Gairola'
         designation='Patron'
         position='Professor & Head EE'
        />
        </div>

         <div className={singleCard}>
        <ProductCard
          photos={[
            'https://www.dropbox.com/s/gi2cg3ta9abpr6o/kamaljeet.jpg?raw=1',
          ]}
        //   price='$99'
         personName='Dr. Kamaljit Bhatia'
         designation='Coordinator Professional Societies & Branch Counselor'
         position='Associate Professor'
        />
        </div>
         <div className={singleCard}>
        <ProductCard
          photos={[
            'https://www.dropbox.com/s/u9u239gsy25rpzm/bhola_jha.jpg?raw=1',
          ]}
        //   price='$99'
         personName='Dr. Bhola Jha'
         designation='Member IEEE & TEQIP Coordinator'
         position='Associate Professor'
        />
        </div>
         <div className={singleCard}>
        <ProductCard
          photos={[
            'https://www.dropbox.com/s/bl2bzrvhw7ulsoc/yatendra_ee.jpg?raw=1',
          ]}
        //   price='$99'
         personName='Dr. Yatindra Kumar'
         designation='Member IEEE & Branch Advisor'
         position='Associate Professor'
        />
        </div>
         <div className={singleCard}>
        <ProductCard
          photos={[
            'https://www.dropbox.com/s/yr2ncmom3yi0bcq/sandeeprana.jpg?raw=1',
          ]}
         personName='Mr. Sandeep Rana'
         designation='Member IEEE & Branch Advisor'
         position='Assistant Professor'
        />
        </div>

        <div className={singleCard}>
        <ProductCard
          photos={[
            'https://www.dropbox.com/s/r89052jd93ye4s2/MeenakshiKathayat.jpg?raw=1',
          ]}
         personName='Ms. Meenakshi Kathayat'
         designation='Member IEEE & Branch Advisor'
         position='Assistant Professor'
        />
        </div>

        <div className={singleCard}>
        <ProductCard
          photos={[
            'https://www.dropbox.com/s/uc9uj5zxd3ol1pi/PRANSHUDANGWAL.jpg?raw=1',
          ]}
         personName='Mr. Pranshu Dangwal'
         designation='Member IEEE & Branch Advisor'
         position='Assistant Professor'
        />
        </div>
        
        <div className={singleCard}>
        <ProductCard
          photos={[
            'https://www.dropbox.com/s/stujqsqvuw7fdeb/Ayush.jpg?raw=1',
          ]}
         personName='Mr. Ayush Mishra'
         designation='Member IEEE &  Branch Chair'
         position='Student'
        />
        </div> 
        
        <div className={singleCard}>
        <ProductCard
          photos={[
            'https://www.dropbox.com/s/5t5qemjknb0hmez/chandraShekhar.jpg?raw=1',
          ]}
         personName='Mr. Chandra Shekhar'
         designation='Member IEEE & Branch Secretary'
         position='Student'
        />
        </div>
    
        <div className={singleCard}>
        <ProductCard
          photos={[
            'https://www.dropbox.com/s/87kv3arcu4gr6ud/shreya.jpg?raw=1',
          ]}
         personName='Ms. Shreya Sati'
         designation='Member IEEE & Branch Vice-chair'
         position='Student'
        />
        </div>
    
        <div className={singleCard}>
        <ProductCard
          photos={[
            'https://www.dropbox.com/s/wa1hehpxinp8a89/Raman.jpg?raw=1',
          ]}
         personName='Mr. Raman Kukreti'
         designation='Member IEEE & Treasurer'
         position='Student'
        />
        </div>

        <div className={singleCard}>
        <ProductCard
          photos={[
            'https://www.dropbox.com/s/n23n0g1p7styame/priyanshi.jpg?raw=1',
          ]}
         personName='Ms. Priyanshi Negi'
         designation='Member IEEE & Webmaster'
         position='Student'
        />
        </div>
    
    
        </div>
        </div>
        </div>
    );
}

export default TeamEx;