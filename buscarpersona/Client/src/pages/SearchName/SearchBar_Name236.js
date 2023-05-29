import React from "react";
import "../pages.css";

const SearchBarName236 = () => {
    return (
        <div className="searchbar_out">
            <div className="row">
                <div className="col-6 position-relative" style={{paddingRight: "5px"}}>
                    <input type="text" alt="search" placeholder="Nombre" className="input_name" />
                </div>
                <div className="col-6 position-relative" style={{paddingLeft: "5px"}}>
                    <input type="text" alt="search" placeholder="Comuna" className="input_name" />
                </div>                
            </div>
            <div className="row" style={{marginTop: "20px"}}>
                <div className="col-6 position-relative" style={{paddingRight: "5px"}}>
                    <input type="text" alt="search" placeholder="Región" className="input_name" />
                </div>
                <div className="col-6 position-relative" style={{paddingLeft: "5px"}}>
                    <input type="text" alt="search" placeholder="DV" className="input_name" />
                </div>                
            </div>
            <div style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}>
                <button className="searchButton1"> BUSCAR </button>
            </div>

        </div>
    );
};
export default SearchBarName236;
