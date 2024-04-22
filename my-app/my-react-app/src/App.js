//import logo from './logo.svg';
import { React, useState, Component } from 'react';
import './App.css';
import TextField from "@mui/material/TextField";
import data from "./Components/ListData";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

class Table extends Component {
    constructor(props) {
        super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
        this.state = { //state is by default an object
            courses: []
        }
    }

    renderTableData() {
        return this.state.courses.map((course, index) => {
            const { COURSE_TITLE, TIL, SQL, INQ, ANL, INT, CRE, COM, COL, GCU } = course //destructuring
            return (
                <tr key={COURSE_TITLE}>
                    <td>{COURSE_TITLE}</td>
                    <td>{TIL}</td>
                    <td>{SQL}</td>
                    <td>{INQ}</td>
                    <td>{ANL}</td>
                    <td>{INT}</td>
                    <td>{CRE}</td>
                    <td>{COM}</td>
                    <td>{COL}</td>
                    <td>{GCU}</td>
                </tr>
            )
        })
    }

    renderTableHeader() {
        let header = Object.keys(this.state.courses[0])
        return header.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    render() {
        return (
            <div>
                <h1 id='title'>React Dynamic Table</h1>
                <table id='courses'>
                    <tbody>
                        <tr>{this.renderTableHeader()}</tr>
                        {this.renderTableData()}
                    </tbody>
                </table>
            </div>
        )
    }
}

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
    return (
        <ul>
            {filteredData.map((item) => (
                <Stack direction="column">
                    <Button variant="contained"
                        onClick={() => this.setState.Table({
                            arr: this.state.arr.concat('new value')
                        }) }
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

export default Table;
export default App;
