import React, { useState } from 'react';
import "./header.css";
import { FaSortDown, FaSearch } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import NavBar from '../navbar/NavBar';

const Header = () => {
    const [openItems, setOpenItems] = useState(false);
    const [searchItem, setSearchItem] = useState(false);
    const [openLanguage, setOpenLanguage] = useState(false);
    const [openBurger, setOpenBurger] = useState(false);

  return (
    <header className="header">
        <div className="headerWrapper">
            <div className="headerPicture">
                <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Vinted_logo.png/1024px-Vinted_logo.png" 
                    alt="logo du site" 
                    className="headerLogo"
                />
                <div className="headerSeparatorIcon"></div>
                <div onClick={() => setOpenBurger(!openBurger)}>
                    {
                        openBurger ? 
                        <>
                            <div className="headerButtonBurger">
                                <div className="headerIconClose"> X </div>
                            </div> 
                            <div className="headerMenuScrolling">
                            <div className="headerButtons">
                                <div className="headerButtonSell">Vends tes articles</div>
                                <div className="headerAuthButton">S'inscrire | Se connecter</div>
                                <div className="headerGuideButton">Ton guide Vinted</div>
                            </div>
                            </div>
                        </>
                    :  
                        <div className="headerButtonBurger">
                            <FontAwesomeIcon icon={icon({name: 'bars'})} className="headerIconBurger" />
                        </div>
                    }
                </div>
            </div>
            <div className="headerContainer">
                <div 
                    className="headerItems"
                    onClick={() => setOpenItems(!openItems)}
                >
                    <span className="headerItem">Articles <FaSortDown className="headerIconSelect"/> </span>
                </div>

                { openItems && 
                    <div className="headerListItems">
                        <span 
                            className="headerSelectedItem"
                        >
                            Articles
                        </span>
                        <span 
                            onClick={() => setSearchItem(!searchItem)}
                            className="headerSelectedItem"
                        >
                            Membres
                        </span>
                        <span 
                            className="headerSelectedItem">Forum</span>
                        <span className="headerSelectedItem">Centre d'aide</span>
                    </div>
                }
                {searchItem ? <Members /> : <Articles /> }
            </div>
            <div className="headerBurger">
                <div className="headerButtons">
                    <div className="headerAuthButton">S'inscrire | Se connecter</div>
                    <div className="headerButtonSell">Vends tes articles</div>
                </div>
                <div className="headerLanguages">
                    <span className="headerLanguagesHelp">?</span>
                    <div 
                        className="headerListLanguages"
                        onClick={() => setOpenLanguage(!openLanguage)}
                    >
                        <span className="headerFrench">FR<FaSortDown/> </span>
                    </div>
                    { openLanguage && 
                        <div className="headerSelectedLanguages">
                            <span className="headerSelectedLanguage">
                                Français (French)
                            </span>
                            <span className="headerSelectedLanguage headerSeparator">
                                English (English)
                            </span>
                            <span className="headerSelectedLanguage headerSeparator">
                                Espanol (Spanish)
                            </span>
                            <span className="headerSelectedLanguage headerSeparator">
                                Nederlands (Dutch)
                            </span>
                        </div>
                    }
                </div>
            </div>
        </div>
        <NavBar />
    </header>
  )
}

export default Header


const Articles = () => {
  return (
    <div className="headerSearchItems">
        <FaSearch className="headerIconSearch"/>
        <input type="text" id="search" placeholder="Rechercher des articles" className="headerTextSearch"/>
    </div>
  )
}

const Members = () => {
    return (
      <div className="headerSearchItems">
          <FaSearch className="headerIconSearch"/>
          <input type="text" id="search" placeholder="Rechercher des membres" className="headerTextSearch"/>
      </div>
    )
}



