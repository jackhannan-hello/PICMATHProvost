//import logo from './logo.svg';
import { React, useState } from 'react';
import './App.css';
import TextField from "@mui/material/TextField";
import data from "./Components/ListData";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


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
function List(props) {
    //create a new array by filtering the original array
    const filteredData = data.filter((el) => {
        //if no input or one input return nothing
        if (props.input === '' || props.input.length < 2) {
            return;
        }
        //return the item which contains the user input
        else {
            //return el.text.toLowerCase().includes(props.input)
            return el.COURSE_TITLE.toLowerCase().includes(props.input)
        }
    })
    var selectCourse;
    return (
        <ul>
            {filteredData.map((item) => (
                <Stack direction="column">
                    <Button variant="contained"
                        onClick={() => Selected([item.COURSE_TITLE, item.TIL, item.SQL, item.INQ, item.ANL, item.INT, item.CRE, item.COM, item.GCU]) }
                        //onClick={() => console.log([item.COURSE_TITLE, item.TIL, item.SQL, item.INQ, item.ANL, item.INT, item.CRE, item.COM, item.GCU])}
                        //onClick={() => { courseSelected.push(item); }, console.log(courseSelected)}
                        key={item.COURSE_CODE}>{item.COURSE_TITLE}
                    </Button>
                </Stack>
                //<li key={item.id}>{item.text}</li>
            ))}
        </ul>
    )
}

function Selected(props) {
    
    


}

function App() {
    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
        //convert input text to lower case
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };

    return (
        <div className="main">     
            <h1>Course Selection</h1>
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

//<SelectSearch options={options} value="sv" name="language" placeholder="Choose your language" />

export default App;
