import XLSX from "xlsx";

/**
 * 
 * @param {*} file - The file to be read.
 * 
 * @returns json object of all sheets in document
 */
function readSpreadSheet(file, cb, token) {
    let jsonObj = {};
    let reader = new FileReader();


    reader.onload = function (e) {
        let data = new Uint8Array(e.target.result);

        let workbook = XLSX.read(data, { type: "array" });

        let ws;

        Object.keys(workbook.Sheets).forEach((key, index) => {

            ws = workbook.Sheets[key];

            jsonObj[key] = XLSX.utils.sheet_to_json(ws);
        });
        cb.AddStudents(jsonObj, token);

    }
    reader.readAsArrayBuffer(file);
}
export default readSpreadSheet;