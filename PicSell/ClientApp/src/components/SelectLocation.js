import React, { useState, useEffect } from 'react';
import OpenSeadragon from 'openseadragon';



const SelectLocation = () => {

    const [viewer, setViewer] = useState(null);
    // let tileSize = 256;
    // let tileOverlap = 1;

    // const InitOpenseadragon = () => {
    //     var tileSource = new OpenSeadragon.TileSource(6144,3072, tileSize, 1);
    //     tileSource.getTileUrl = function (level, x, y) {
    //         return `/api/Tiles/GetTile?level=${level}&x=${x}&y=${y}&tileSize=${tileSize}&tileOverlap=${tileOverlap}`;
    //     }
    //     viewer && 
    //     setViewer(
    //         OpenSeadragon({
    //             id: "openSeaDragon",
    //             tileSources: tileSource,
    //             prefixUrl: "openseadragon-images/",
    //             animationTime: 0.5,
    //             blendTime: 0.1,
    //             constrainDuringPan: true,
    //             maxZoomPixelRatio: 2,
    //             minZoomLevel: 1,
    //             visibilityRatio: 1,
    //             zoomPerScroll: 2
    //         })
    //     )
    // }

    useEffect(()=>{
        console.log("In Viewer!");
        let tileSize = 256;
        let tileOverlap = 1;
        var tileSource = new OpenSeadragon.TileSource(6144,3072, tileSize, 1);
        tileSource.getTileUrl = function (level, x, y) {
            return `/api/Tiles/GetTile?level=${level}&x=${x}&y=${y}&tileSize=${tileSize}&tileOverlap=${tileOverlap}`;
        }
        setViewer(
            OpenSeadragon({
                id: "openSeaDragon",
                //tileSources: tileSource,
                tileSources : [{
                    type: "zoomifytileservice",
                    width: 5494,
                    height: 5839,
                    tilesUrl: "/test/"
                }],
                prefixUrl: "openseadragon-images/",
                animationTime: 0.5,
                blendTime: 0.1,
                constrainDuringPan: true,
                maxZoomPixelRatio: 2,
                minZoomLevel: 1,
                visibilityRatio: 1,
                zoomPerScroll: 2,
            })
        );
        console.log("Out of Viewer!");
    },[])

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-10 offset-md-1">
                    <div className="main-content-selector">
                        <ul>
                            <li>
                                <a href="#"><span>2</span> choose Location</a>
                            </li>
                        </ul>
                    </div>
                    <div className="main-content">
                        <div className="main-content-iteration-header">
                            <div className="row">
                                <div className="col-md-3 main-content-right align-self-center">
                                    <div className="iteration-pattern-detail">
                                        <h2><span>Live</span> Iteration Uptade</h2>
                                    </div>
                                </div>
                                <div className="col-md-6 main-content-right align-self-center">
                                    <div className="iteration-pattern-detail">
                                        <div className="progress-bar-styling">
                                            <div className="progress">
                                                <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{ width: '60%' }}>
                                                    60%
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 main-content-right align-self-center">
                                    <div className="iteration-pattern-detail">
                                        <table className="table table-borderless table-condensed text-right">
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <span>500.250</span> /1.000.500
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div id="openSeaDragon" style={{ height: 500, width: 900, border: 'solid 1px black' }} />
                            </div>
                        </div>
                    </div>
                    <div className="main-content-footer">
                        <ul>
                            <li className="active">
                                <a href="#">Before A.I ON</a>
                            </li>
                            <li>
                                <a href="#">After A.I ON</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}


export default SelectLocation;