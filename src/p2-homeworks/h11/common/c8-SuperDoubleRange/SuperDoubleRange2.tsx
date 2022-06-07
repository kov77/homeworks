import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';



type RangeSliderPropsType = {
    value: number[]
    handleChange: (event: Event, newValue: number | number[]) => void

}

function valuetext(value: number) {
    return `${value}`;
}



export default function RangeSlider(props: RangeSliderPropsType) {

    return (
        <Box sx={{ width: 120}}>
            <Slider
                classes={{}}
                getAriaLabel={() => 'Temperature range'}
                value={props.value}
                onChange={props.handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
            />
        </Box>
    );
}
