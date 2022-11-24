import React from 'react';
import { Link } from 'react-router-dom';
import "./items.css";
import { FaRegHeart } from 'react-icons/fa';

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
                <div className="itemCard">
                    <Link to="/">
                        <img 
                            src="https://tinyurl.com/2n5x29eh" 
                            alt="Visuel article populaire" 
                            className="itemsCardImage" 
                        />
                    </Link>
                    <div className="itemsCardInfos">
                        <div className="itemsCardPrice">
                            <span>8,00 €</span>
                            <span className="itemsCardInfo">i</span>
                            <div className="itemsCardHeart">
                                <FaRegHeart className="itemsCardIcon"/>
                             <span className="itemsCardScrore">11</span>
                            </div>
                        </div>
                        <div className="itemsCardDesc">
                            <span className="itemsSize">
                                L/40/12
                            </span>
                            <h4 className="itemsCardSubtitle">Springfield</h4>
                        </div>
                    </div>
                </div>
                <div className="itemCard">
                    <Link to="/">
                        <img 
                            src="https://tinyurl.com/2n5x29eh" 
                            alt="Visuel article populaire" 
                            className="itemsCardImage" 
                        />
                    </Link>
                    <div className="itemsCardInfos">
                        <div className="itemsCardPrice">
                            <span>8,00 €</span>
                            <span className="itemsCardInfo">i</span>
                            <div className="itemsCardHeart">
                                <FaRegHeart className="itemsCardIcon"/>
                             <span className="itemsCardScrore">11</span>
                            </div>
                        </div>
                        <div className="itemsCardDesc">
                            <span className="itemsSize">
                                L/40/12
                            </span>
                            <h4 className="itemsCardSubtitle">Springfield</h4>
                        </div>
                    </div>
                </div>
                <div className="itemCard">
                    <Link to="/">
                        <img 
                            src="https://tinyurl.com/2n5x29eh" 
                            alt="Visuel article populaire" 
                            className="itemsCardImage" 
                        />
                    </Link>
                    <div className="itemsCardInfos">
                        <div className="itemsCardPrice">
                            <span>8,00 €</span>
                            <span className="itemsCardInfo">i</span>
                            <div className="itemsCardHeart">
                                <FaRegHeart className="itemsCardIcon"/>
                             <span className="itemsCardScrore">11</span>
                            </div>
                        </div>
                        <div className="itemsCardDesc">
                            <span className="itemsSize">
                                L/40/12
                            </span>
                            <h4 className="itemsCardSubtitle">Springfield</h4>
                        </div>
                    </div>
                </div>
                <div className="itemCard">
                    <Link to="/">
                        <img 
                            src="https://tinyurl.com/2n5x29eh" 
                            alt="Visuel article populaire" 
                            className="itemsCardImage" 
                        />
                    </Link>
                    <div className="itemsCardInfos">
                        <div className="itemsCardPrice">
                            <span>8,00 €</span>
                            <span className="itemsCardInfo">i</span>
                            <div className="itemsCardHeart">
                                <FaRegHeart className="itemsCardIcon"/>
                             <span className="itemsCardScrore">11</span>
                            </div>
                        </div>
                        <div className="itemsCardDesc">
                            <span className="itemsSize">
                                L/40/12
                            </span>
                            <h4 className="itemsCardSubtitle">Springfield</h4>
                        </div>
                    </div>
                </div>
                <div className="itemCard">
                    <Link to="/">
                        <img 
                            src="https://tinyurl.com/2n5x29eh" 
                            alt="Visuel article populaire" 
                            className="itemsCardImage" 
                        />
                    </Link>
                    <div className="itemsCardInfos">
                        <div className="itemsCardPrice">
                            <span>8,00 €</span>
                            <span className="itemsCardInfo">i</span>
                            <div className="itemsCardHeart">
                                <FaRegHeart className="itemsCardIcon"/>
                             <span className="itemsCardScrore">11</span>
                            </div>
                        </div>
                        <div className="itemsCardDesc">
                            <span className="itemsSize">
                                L/40/12
                            </span>
                            <h4 className="itemsCardSubtitle">Springfield</h4>
                        </div>
                    </div>
                </div>
                <Link to="/">
                    <div className="itemCardBackground">
                        <span>Voir tous les articles</span>
                    </div>
                </Link>
            </div>
        </div>
    </section>
  )
}

export default Items