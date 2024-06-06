import React from 'react';
import "./Gallary.css";
import cardData from "../data/cardData.json";
import { Card } from './Card';

export const Gallary = () => {

  return (
    <div className="gallary">
        {cardData.map((card, id) => { return(
                        <Card
                        key={id}
                        imgSrc={card.imgSrc}
                        imgAlt={card.imgAlt}
                        title={card.title}
                        description={card.description}
                        buttonText={card.buttonText}
                        link={card.link}
                        />
        )
        })}
    </div>
  );
};

export default Gallary;
