import React, { useState } from "react";
import "../pages.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SearchBarName5 = ({ setListData }) => {
    const [value, setValue] = useState('')
    const [value1, setValue1] = useState('')
    const navigate = useNavigate()
    return (
        <div className="searchbar_out" onKeyUp={(e) => {
            if (e.key === "Enter") {
                console.log("-------------------")
                axios.post('http://localhost:4000/students/temp5', { "name": value, "Fec_Nac": value1 })
                        .then((response) => {
                            setListData(response.data)
                            if (response.data.length) navigate("/SearchResult");
                            else alert("No puedo encontrar los datos")
                        })
                        .catch((e) => { console.log(e) })
                        .finally(() => setValue(''))
            }
        }}>
            <div className="row">
                <div className="col-6 position-relative" style={{ paddingRight: "5px" }}>
                    <input type="text" alt="search" placeholder="Nombre" className="input_name" value={value} onChange={(e) => { setValue(e.target.value) }} />
                </div>
                <div className="col-6 position-relative" style={{ paddingLeft: "5px" }}>
                    <input type="text" alt="search" placeholder="Fec_Nac" className="input_name" value={value1} onChange={(e) => { setValue1(e.target.value) }} />
                </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}>
                <button className="searchButton1" onClick={() => {
                    axios.post('http://localhost:4000/students/temp5', { "name": value, "Fec_Nac": value1 })
                        .then((response) => {
                            setListData(response.data)
                            if (response.data.length) navigate("/SearchResult");
                            else alert("No puedo encontrar los datos")
                        })
                        .catch((e) => { console.log(e) })
                        .finally(() => setValue(''))
                }}> BUSCAR </button>
            </div>

        </div>
    );
};
export default SearchBarName5;
