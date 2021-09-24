import React from 'react';
import videoThumb from '../assets/images/video_thumb.png';
import chooseAmount from '../assets/images/choose_amount.png';
import chooseLocation from '../assets/images/choose_amount_2.png';
import iterationPattern from '../assets/images/iteration_pattern.png';
import cartIcon from '../assets/images/cart_icon.png';
import nextIcon from '../assets/images/next_icon.png';



const Home = () => {
    return (
        <div className="container">
    <div className="row">
        <div className="col-md-10 offset-md-1">
            <div className="main-content-selector">
                <ul>
                    <li>
                        <a href="#"><span>1</span> choose amount</a>
                    </li>
                </ul>
            </div>
            <div className="main-content">
                <div className="row">
                    <div className="col-md-8 main-content-left">
                        <div className="tab-content">
                            <div id="home" className="tab-pane fade in active show">
                                <img src={videoThumb} alt="img" className="img-fluid" />
                            </div>
                            <div id="menu1" className="tab-pane fade">
                                <table className="table table-condensed choose_table">
                                    <tbody>
                                    <tr>
                                        <td>
                                            <span>1</span>
                                            <span className="title">Choose Amount</span>
                                        </td>
                                        <td>
                                            <img src={chooseAmount} alt="img" className="img-fluid" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span>2</span>
                                            Choose Location
                                        </td>
                                        <td>
                                            <img src={chooseLocation} alt="img" className="img-fluid" />
                                        </td>
                                    </tr>
                                    </tbody>

                                </table>
                            </div>
                            <div id="menu2" className="tab-pane fade text-center">
                                <h3>Why to buy?</h3>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
                                <p> Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                                <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
                                <p> Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo </p>
                            </div>
                        </div>
                        <ul className="nav nav-pills nav-justified">
                            <li><a className="active" data-toggle="pill" href="#home">Why to buy?</a></li>
                            <li><a data-toggle="pill" href="#menu1">Discover more</a></li>
                            <li><a data-toggle="pill" href="#menu2">How to buy?</a></li>
                        </ul>

                    </div>
                    <div className="col-md-4 main-content-right">
                        <div className="iteration-pattern">
                            <img src={iterationPattern} alt="img" className="img-fluid" />
                        </div>
                        <div className="iteration-pattern-detail">
                            <h2><span>Live</span> Iteration Uptade</h2>

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
                                    <td>
                                        <span>500.000</span> pcsl
                                    </td>
                                    <td>total of 1.000.000</td>
                                </tr>
                                <tr>
                                    <td>
                                        <span>80.000</span> artists
                                    </td>
                                    <td>part of this manifesto</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="counter-input">
                            <img src={cartIcon} alt="img" className="img-fluid" />
                            <div className="number">
                                <span className="minus">-</span>
                                <input type="text" value="1"/>
                                <span className="plus">+</span>
                            </div>

                            <a href="#"><span>NEXT</span> <img src={nextIcon} alt="img" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>

    );
}


export default Home;