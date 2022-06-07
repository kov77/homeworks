import React from "react";

export const SuperRadio = (props: any) => {
    return <div>
        <input onChange={(e) => props.onChangeCallback(e)} name={"themeColor"} id = {"RED-INPUT"} type="radio"/>
        <label htmlFor="redInput">red</label>
        <input onChange={(e) => props.onChangeCallback(e)} name={"themeColor"} id = {"DARK-INPUT"} type="radio"/>
        <label htmlFor="darkInput">dark</label>
        <input onChange={(e) => props.onChangeCallback(e)} name={"themeColor"} id = {"SOME-INPUT"} type="radio"/>
        <label htmlFor="someInput">some</label>
    </div>
}
