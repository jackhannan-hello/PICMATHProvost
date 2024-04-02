//import logo from './logo.svg';
import { React, useState } from 'react';
import './App.css';
import TextField from "@mui/material/TextField";
import List from "./Components/List";

//const allowedExtensions = ["csv"];

/*function TIL(props) {
    return ({ props.value });
}
function SQL(props) {
    return ({ props.value });
}
function INQ(props) {
    return ({ props.value });
}
function ANL(props) {
    return ({ props.value });
}
function INT(props) {
    return ({ props.value });
}
function CRE(props) {
    return ({ props.value });
}
function COM(props) {
    return ({ props.value });
}
function COL(props) {
    return ({ props.value });
}
function GCU(props) {
    return GCU {props.value};
}

function addClass() {
    }*/

// Create the App component

function App() {
    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
        //convert input text to lower case
        //var lowerCase = e.target.value.toLowerCase();
        setInputText(e);
    };

    return (
        <div className="main">
            <h1>React Search</h1>
            <div className="search">
                <TextField
                    id="outlined-basic"
                    onChange={inputHandler}
                    variant="outlined"
                    fullWidth
                    label="Search"
                />
            </div>
            <List input={inputText} />
        </div>
    );
}



export default App;
