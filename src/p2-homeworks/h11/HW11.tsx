import React from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import RangeSlider from './common/c8-SuperDoubleRange/SuperDoubleRange2'


function HW11() {
    const [values, setValues] = React.useState<number[]>([20, 75]);

    const handleChange = (event: Event, newValue: number | number[]) => {
        setValues(newValue as number[]);
    };

    const setSuperRangeValue = (value: number) => {
        setValues([value, values[1]])
    }
    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div>
                <span>{values[0]}</span>
                <SuperRange
                    value={values[0]}
                    onChangeRange={setSuperRangeValue}
                    // сделать так чтоб value1 изменялось
                />
            </div>

            <div style={{display: "flex", marginTop: "30px"}}>
                <span>{values[0]}</span>

                <RangeSlider
                    value={values}
                    handleChange={handleChange}
                />
                <span>{values[1]}</span>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
