import React from 'react';
import { Link } from 'react-router-dom';
import "./banner.css";

const Banner = () => {
  return (
    <section className="banner">
        <div className="bannerBackgroung">
            <div className="bannerCard">
                <h1 className="bannerTitle">Prêts à faire <br />
                du tri dans vos <br />
                placards ?</h1>
                <h1 className="bannerTitleTwo">Prêts à faire 
                du tri dans vos <br />
                placards ?</h1>
                <Link to="/a-propos">
                    <button className="bannerButton">
                        Vends maintenant
                    </button>
                </Link>
                <Link to="/">
                    <span className="headerLinkHelp">Découvrir comment ça marche</span>
                </Link>
            </div>
            <div className="bannerSvg"></div>
        </div>
    </section>
  )
}

export default Banner