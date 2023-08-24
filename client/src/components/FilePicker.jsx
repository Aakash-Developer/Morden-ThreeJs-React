import React from "react";
import CustomButton from "./CustomButton";
// file={file} setFile={setFile} readFile={readFile}
function FilePicker({ file, setFile, readFile }) {
  return (
    <div className="filepicker-container">
      <div className="flex-1 flex flex-col">
        <input id="file-upload" type="file" accept="images/*" onChange={(e) => setFile(e.target.files[0])} />
        <label htmlFor="file-upload" className="filepicker-label">
          Upload File
        </label>
        <p className="mt-2 text-gray-400 text-sm truncate">{file === "" ? "No File Selected " : file.name}</p>
      </div>
      <div className="mt-4 flex flex-wrap gap-3">
        <CustomButton type="outline" title="logo" handelClick={() => readFile("logo")} customStyle="text-sm" />
        <CustomButton type="filled" title="Full" handelClick={() => readFile("full")} customStyle="text-sm" />
      </div>
    </div>
  );
}

export default FilePicker;
