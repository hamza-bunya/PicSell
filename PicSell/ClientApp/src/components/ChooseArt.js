import React from 'react';
import randomizeIcon from '../assets/images/randomize.png';
import tempSlider from '../assets/images/slider-1.png';


const ChooseArt = () => {

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-10 offset-md-1">
                    <div className="main-content-selector">
                        <ul>
                            <li>
                                <a href="#"><span>3</span> choose Features</a>
                            </li>
                        </ul>
                    </div>
                    <div className="main-content">
                        <div className="submain-content-selector">
                            <ul>
                                <li>
                                    <a href="#">XV</a>
                                </li>
                                <li>
                                    <a href="#">XVI</a>
                                </li>
                                <li>
                                    <a href="#">XVII</a>
                                </li>
                                <li>
                                    <a href="#">XVIII</a>
                                </li>
                                <li>
                                    <a href="#">XIX</a>
                                </li>
                                <li>
                                    <a href="#">XX</a>
                                </li>
                                <li>
                                    <a href="#">XXI</a>
                                </li>
                            </ul>
                        </div>
                        <div className="submain-content">
                            <div className="row">
                                <div className="col-md-6 main-content-left">
                                    <div className="dark-shadow">
                                        <div className="custom_shadow">
                                            <h2>Your Picsell</h2>
                                            <img src={randomizeIcon} alt="img" className="img-fluid" />
                                            <span className ="randomize">Randomize</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 main-content-left main-content-right">
                                    <div className="dark-shadow">
                                        <div className="custom_shadow">
                                            <div className="row">
                                                <div className="col-md-7 align-self-center">
                                                    <h2>Source</h2>
                                                </div>
                                                <div className="col-md-5 align-self-center">
                                                    <div className="sync">
                                                        <span>1/5</span>
                                                        <span>sync</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="owl-carousel owl-carousel-clientlogos owl-theme">
                                                        <div>
                                                            <img src={tempSlider} alt="img" width="100%" height="100%" />
                                                            <p>Eugène Delacroix,</p>
                                                            <p><em>Liberty Leading the People,</em></p>
                                                            <p><strong>1830</strong></p>
                                                        </div>
                                                        <div>
                                                            <img src={tempSlider} alt="img" width="100%" height="100%" />
                                                            <p>Eugène Delacroix,</p>
                                                            <p><em>Liberty Leading the People,</em></p>
                                                            <p><strong>1830</strong></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="iteration-pattern-detail">
                                                <div className="progress-bar-styling">
                                                    <div className="progress">
                                                        <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width:'60%'}}>
                                                            60%
                                                        </div>
                                                    </div>
                                                </div>

                                                <table className="table table-borderless table-condensed">
                                                    <tbody>
                                                        <tr>
                                                            <th colspan="3">Data of your Picsel</th>
                                                        </tr>
                                                        <tr>
                                                            <td style={{width:'33%'}}>Country: </td>
                                                            <td>Age: </td>
                                                            <td>Sex: </td>
                                                        </tr>
                                                        <tr>
                                                            <th colspan="3">Name of your Picsell</th>
                                                        </tr>
                                                        <tr>
                                                            <td colspan="3">eg: Elon Tesla </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                                <div className="col-md-12 text-center">
                                    <div className="bottom-btn">
                                        <a href="#"><em>PURCHASE</em></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}


export default ChooseArt;