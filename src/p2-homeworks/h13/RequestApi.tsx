import {useState} from "react";
import axios from "axios";

export const RequestApi = () => {
    const[inputStatus, setInputStatus] = useState(false)
    const[responseData, setResponseData] = useState()

    const onChangeInputHandler = (e: any) => {
        setInputStatus(e.currentTarget.checked)
    }

    const onClickButtonHandler = () => {
        axios.post('https://neko-cafe-back.herokuapp.com/auth/test', {success: inputStatus})
            .then(response => setResponseData(response.data))
            .catch (error => {
            console.log({...error});
            setResponseData(error.response ? error.response.data.errorText : error.message);
            console.log(error.response ? error.response.data.errorText : error.message)});



        }

    return <div>
        <input onChange={e => onChangeInputHandler(e)} checked={inputStatus} type="checkbox"/>
        <button onClick={onClickButtonHandler}>Post data</button>
        <div>{JSON.stringify(responseData)}</div>
    </div>

}
