import React from 'react';
import logoIcon from '../assets/images/logo-icon.png';
import logo from '../assets/images/logo.png';
import profileIcon from '../assets/images/profile-icon.png';


const Header = () => {

    return (
        <header>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2 align-self-center">
                        <img src={logoIcon} alt="Brand Icon" className="img-fluid" />
                    </div>
                    <div className="col-md-8 text-center align-self-center">
                        <img src={logo} alt="Brand Icon" className="img-fluid" />
                    </div>
                    <div className="col-md-2 text-right align-self-center">
                        <div className="profile-img">
                            <img src={profileIcon} alt="Brand Icon" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;