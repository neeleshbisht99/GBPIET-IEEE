import React from 'react';
import ProductCard from './ProductCard';
import classes from './team.module.css';

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
            'http://www.gbpec.ac.in/img/faculty/principal.jpg',
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
            '/asset/images/hsb.jpg',
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
            '/asset/images/ysingh.jpg',
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
            '/asset/images/Sanjaygairola.jpg',
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
            '/asset/images/kamaljeet.jpg',
          ]}
        //   price='$99'
         personName='Dr. Kamaljit Singh Bhatia'
         designation='Coordinator Professional Societies & Branch Counselor'
         position='Associate Professor'
        />
        </div>
         <div className={singleCard}>
        <ProductCard
          photos={[
            '/asset/images/bhola_jha.jpg',
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
            '/asset/images/yatendra_ee.jpg',
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
            '/asset/images/sandeeprana.jpg',
          ]}
         personName='Mr. Sandeep Rana'
         designation='Member IEEE & Branch Advisor'
         position='Assistant Professor'
        />
        </div>

        <div className={singleCard}>
        <ProductCard
          photos={[
            '/asset/images/MeenakshiKathayat.jpg',
          ]}
         personName='Ms. Meenakshi Kathayat'
         designation='Member IEEE & Branch Advisor'
         position='Assistant Professor'
        />
        </div>

        <div className={singleCard}>
        <ProductCard
          photos={[
            '/asset/images/PRANSHUDANGWAL.jpg',
          ]}
         personName='Mr. Pranshu Dangwal'
         designation='Member IEEE & Branch Advisor'
         position='Assistant Professor'
        />
        </div>
        
        <div className={singleCard}>
        <ProductCard
          photos={[
            '/asset/images/ayush.jpg',
          ]}
         personName='Mr. Ayush Mishra'
         designation='Member IEEE &  Branch Chair'
         position='Student'
        />
        </div> 
        
        <div className={singleCard}>
        <ProductCard
          photos={[
            '/asset/images/hsb.jpg',
          ]}
         personName='Mr. Chandra Shekhar'
         designation='Member IEEE & Branch Secretary'
         position='Student'
        />
        </div>
    
        <div className={singleCard}>
        <ProductCard
          photos={[
            '/asset/images/hsb.jpg',
          ]}
         personName='Ms. Shreya Sati'
         designation='Member IEEE & Branch Vice-chair'
         position='Student'
        />
        </div>
    
        <div className={singleCard}>
        <ProductCard
          photos={[
            '/asset/images/hsb.jpg',
          ]}
         personName='Mr. Raman Kukreti'
         designation='Member IEEE & Treasurer'
         position='Student'
        />
        </div>

        <div className={singleCard}>
        <ProductCard
          photos={[
            '/asset/images/hsb.jpg',
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
