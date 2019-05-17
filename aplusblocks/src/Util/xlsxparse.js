import XLSX from "xlsx";

/**
 * 
 * @param {*} file - The file to be read.
 * 
 * @returns json object of all sheets in document
 */
function readSpreadSheet(file) {

    let reader = new FileReader();

    reader.onload = function (e) {
        let data = new Uint8Array(e.target.result);

        let workbook = XLSX.read(data, { type: "array" });

        let ws = workbook.Sheets["Sheet1"];
        let json3 = {};
        Object.keys(workbook.Sheets).forEach((key, index) => {

            ws = workbook.Sheets[key];

            json3[key] = XLSX.utils.sheet_to_json(ws);
        });

        console.log(json3);

        return json3;

    }
    reader.readAsArrayBuffer(file);
}
export default readSpreadSheet;