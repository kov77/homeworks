import React from "react";
import classes from "./HW12.module.css";
import {useDispatch, useSelector} from "react-redux";
import {SuperRadio} from "./SuperRadio";
import { AppStoreType } from "../h10/bll/store";



function HW12() {

    const theme = useSelector((state: AppStoreType) => state.theme.theme)
    const dispatch = useDispatch()

    const onChangeCallback = (e: any) => {
        dispatch({type: e.currentTarget.id})
    }
    // useDispatch, onChangeCallback

    return (
        <div className={classes[theme]}>
            <hr/>
            <span className={classes[theme + '-text']}>
                homeworks 12
            </span>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}
            <SuperRadio onChangeCallback={onChangeCallback} />
            <hr/>
        </div>
    );
}

export default HW12;
