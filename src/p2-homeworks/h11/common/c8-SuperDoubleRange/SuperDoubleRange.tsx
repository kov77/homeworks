import React, { useState } from "react";
import { Range, getTrackBackground } from "react-range";

export const SuperDoubleRange = (props: any) => {
    // const STEP = 1;
    const MIN = 0;
    const MAX = 100;
    let values= props.values


    return (
        <Range
            values={values}
            // step={STEP}
            min={MIN}
            max={MAX}
            onChange={values => {
                console.log(values);
                props.onChangeRange(values)
                props.onChangeValue1(values[0])
            }}
            renderTrack={({ props, children }) => (
                // eslint-disable-next-line jsx-a11y/no-static-element-interactions
                <div
                    onMouseDown={props.onMouseDown}
                    onTouchStart={props.onTouchStart}
                    style={{
                        ...props.style,
                        height: "16px",
                        display: "flex",
                        width: "130px"
                    }}
                >
                    <div
                        ref={props.ref}
                        style={{
                            height: "7px",
                            width: "100%",
                            borderRadius: "4px",
                            background: getTrackBackground({
                                values,
                                colors: ["#ccc", "#548BF4", "#ccc"],
                                min: MIN,
                                max: MAX,
                            }),
                            alignSelf: "center",
                        }}
                    >
                        {children}
                    </div>
                </div>
            )}
            renderThumb={({ props, isDragged }) => (
                <div
                    {...props}
                    style={{
                        ...props.style,
                        height: "10px",
                        width: "14px",
                        backgroundColor: "#FFF",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        boxShadow: "0px 2px 6px #AAA"
                    }}
                >
                    <div
                        style={{
                            height: "10px",
                            width: "5px",
                            backgroundColor: isDragged ? "#548BF4" : "#CCC"
                        }}
                    />
                </div>
            )}
        />
    );
};

