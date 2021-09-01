import React, {createRef, useState} from 'react';
import {Button, TextField} from "@material-ui/core";
import decorative_train from './images/decorative_train.jpg';
import decorative_number from './images/decorative_number.jpg'
import workStyle from './WorkStyle.module.css'

function WorkArea() {

    const [mainImage, setMainImage] = useState(decorative_train);
    const [cuttingImage, setCuttngImage] = useState(decorative_number);
    const [trainNumber, settrainNumber] = useState('12312312');
    let inputRef = createRef<HTMLInputElement>();

    function imageLoad(url: React.ChangeEvent<HTMLInputElement>) {
        if (url.target.files && url.target.files[0])
            setMainImage(URL.createObjectURL(url.target.files[0]));
    }

    return (
        <div className={workStyle.workArea}>
            <h1>Work here</h1>
            <input className={workStyle.fileInput} type='file' ref={inputRef} onChange={e => imageLoad(e)}/>
            <img className={workStyle.mainImage} src={mainImage}/>
            <br/>
            <Button className={workStyle.fileButton} variant="contained" onClick={() => inputRef.current?.click()}>Choose file</Button>
            <br/>
            <br/>
            <img className={workStyle.cuttingImage} src={cuttingImage}/>
            <TextField inputProps={{style: {fontSize: 34, color: "aliceblue"}}}
                       className={workStyle.numberInput}
                       FormHelperTextProps={{style: {fontSize: 15, color: "aliceblue"}}}
                       variant='outlined'
                       value={trainNumber}
                       helperText='Result'/>
            <br/>
            <br/>
            <br/>
            <Button className={workStyle.uploadButton} variant="contained">Upload(not working now)</Button>
        </div>
    );
}

export default WorkArea;