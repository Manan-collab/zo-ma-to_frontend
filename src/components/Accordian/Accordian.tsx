import React, { useState } from 'react';
import './Accordian.scss';
import { rest } from '../../assets/json/restaurants';
import ListCard from '../ListCard/ListCard';
import { MdExpandLess, MdExpandMore } from 'react-icons/md'

const Accordion = ({ title, content }: any) => {
  const [isActive, setIsActive] = useState(true);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div>{isActive ? <MdExpandLess style={{color:"#9c88ff", fontSize: "30px"}} /> : <MdExpandMore style={{color:"#9c88ff", fontSize: "30px"}}/>}</div>
      </div>
      {isActive && <div className="accordion-content">
      <div className="acccards">
        { rest.map((rest) =>{
            return <ListCard  rest={rest}/>
          })}
        </div>
        </div>}
    </div>
  );
};

export default Accordion;