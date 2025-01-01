import React from "react";
import * as XLSX from "xlsx";

const ExportJsonToExcel = ({ jsonData, fileName, buttonName }) => {
    const handleExport = () => {
        // Create a new worksheet from the JSON data
        const ws = XLSX.utils.json_to_sheet(jsonData);

        // Create a new workbook and append the worksheet to it
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

        // Write the workbook to a file and trigger download
        XLSX.writeFile(wb, `${fileName}.xlsx`);
    };

    return (
        <div>
            <button className="px-4 py-2 border-2 border-green-600 bg-green-600 text-white rounded hover:bg-green-700" onClick={handleExport}>{buttonName}</button>
        </div>
    );
};

export default ExportJsonToExcel;
