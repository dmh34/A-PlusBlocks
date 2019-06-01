import React from "react";
import xlsx from "../../Util/xlsxparse";
import API from "../../API/API";

function handlefile(e){
    xlsx(e.target.files[0], API.createStudent);
}

function ImportFileButton(props){
    return(
        <div >
            <input type="file" onChange={handlefile}></input>
        </div>
    )
}

export default ImportFileButton;