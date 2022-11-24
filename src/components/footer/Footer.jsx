import React from 'react';
import { Link } from 'react-router-dom';
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footerContent">
            <Link to="/">
                <span className="footerContentElement">Politique de confidentialité</span>
            </Link>
            <Link to="/">
                <span className="footerContentElement">Politique de cookies</span>
            </Link>
            <Link to="/">
                <span className="footerContentElement">Paramètres des cookies</span>
            </Link>
            <Link to="/">
                <span className="footerContentElement">Termes et Conditions</span>
            </Link>
            <Link to="/">
                <span className="footerContentElement">Notre plateforme</span>
            </Link>
            <Link to="/">
                <span className="footerContentElement">Conditions de vente Pro</span>
            </Link>
            <Link to="/">
                <span className="footerContentElement">Conditions d'utilisation Pro</span>
            </Link>
        </div>
    </footer>
  )
}

export default Footer