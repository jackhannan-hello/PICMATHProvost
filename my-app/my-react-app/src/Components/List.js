import { React, useState } from 'react'
import data from "./ListData.json"
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

function List(props) {
    //create a new array by filtering the original array
    const filteredData = data.filter((el) => {
        //if no input the return the original
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
                <Stack direction = "column">
                    <Button variant="contained"
                        key={item.COURSE_CODE}>{item.COURSE_TITLE}</Button>
                </Stack>                
                //<li key={item.id}>{item.text}</li>
            ))}
        </ul>
    )
}

export default List