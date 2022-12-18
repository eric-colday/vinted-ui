import React from 'react';
import { Link } from 'react-router-dom';
import "./items.css";
import { FaChevronLeft, FaChevronRight, FaRegHeart } from 'react-icons/fa';
import Data from "../../Data";

const itemsList = Data;

const Items = () => {
  return (
    <section className="items">
        <div className="itemsWrapper">
            <div className="itemsTitleDisplay">
                <h2 className="itemsTitle">
                    Articles populaires
                </h2>
                <Link to="/">
                    <span className="itemsPopularLink">Voir tout</span>
                </Link>
            </div>
            <div className="itemsCards">
                {itemsList.map((item, index)=> 
                    <div 
                        key={index} 
                        className="itemCard"
                    >
                        <Link to="/">
                            <div className="itemsCardProfile">
                                <img 
                                    src={item.cover}
                                    alt="Visuel article populaire" 
                                    className="itemsCardcover" 
                                />
                                <h4 className="itemsCardName">{item.name}</h4>
                            </div>
                            <img 
                                src={item.picture}
                                alt="Visuel article populaire" 
                                className="itemsCardImage" 
                            />
                        </Link>
                        <div className="itemsCardInfos">
                            <div className="itemsCardPrice">
                                <span>{item.price} {item.currency}</span>
                                <span className="itemsCardInfo">i</span>
                                <div className="itemsCardHeart">
                                    <FaRegHeart className="itemsCardIcon"/>
                                <span className="itemsCardScrore">{item.like} </span>
                                </div>
                            </div>
                            <div className="itemsCardDesc">
                                <span className="itemsSize">
                                    {item.size}
                                </span>
                                <h4 className="itemsCardSubtitle">{item.title}</h4>
                            </div>
                        </div>
                    </div>
                )}
                <Link to="/">
                    <div className="itemCardBackground">
                        <span>Voir tous les articles</span>
                    </div>
                </Link>
            </div>
            <div className="itemsArrows">
                <div className="itemsArrow">
                    <FaChevronLeft className="itemsIconArrowLeft"/>
                </div>
                <div className="itemsArrow itemArrowPositionRight">
                    <FaChevronRight className="itemsIconArrowRight"/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Items