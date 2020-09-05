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
            'http://www.gbpec.ac.in/img/faculty/hsb.jpgg',
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
            'http://www.gbpec.ac.in/img/faculty/hsb.jpgg',
          ]}
        //   price='$99'
         personName='Dr. M.P.S.Chauhan'
         designation='Chief Patron'
         position='Director'
        />
        </div>

    
        </div>
        </div>
        </div>
    );
}

export default TeamEx;