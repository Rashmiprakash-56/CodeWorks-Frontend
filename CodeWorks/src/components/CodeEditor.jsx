import React, { useState, useEffect, useRef } from "react";
import { Editor } from "@monaco-editor/react";
import reactSelect from "react-select";
import axios from "axios";
import languagesData, { initialSelected } from "../data/languagesData";

function CodeEditor(props) {
  const [code, setCode] = useState(initialSelected.demoCode);
  const [lang, setLang] = useState(initialSelected.displayName);
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("Your output will be displayed here");
  const [selected, setSelected] = useState(initialSelected);
  const [fontSize, setFontSize] = useState(20);
  const [data, setData] = useState(languagesData);

  const editorOptions = {
    fontSize: fontSize,
    scrollBeyondLastLine: false,
  };

  const handleRun = async () => {
    try {
      const response = await axios.post(
        "https://emkc.org/api/v2/piston/execute",
        {
          language: selected.language,
          version: selected.version,
          files: [{ content: code }],
          aliases: selected.aliases,
          stdin: input,
          runtime: selected.runtime,
          ...(selected.aliases &&
            selected.aliases.length > 0 && { aliases: selected.aliases }),
          ...(selected.runtime && { runtime: selected.runtime }),
        }
      );
      // console.log(input);
      // console.log(response.data);
      setOutput(response.data.run.stdout);
      if (response.data.compile.stderr !== "")
        setOutput(`Error : ${response.data.compile.stderr}`);
    } catch (error) {
      console.error("Error running code:", error);
    }
  };

  const handleSubmitChange = (e) => {
    const newLang = e.target.value;
    const newSelected = languagesData.find((l) => l.language === newLang);
    setLang(newLang);
    setSelected(newSelected);
    setCode(newSelected.demoCode);
  };
  const handleEditorChange = (e) => {
    setCode(e.target.value);
  };

  return (
    <div className="flex items-centre justify-between gap-5 py-4 px-4 h-[92vh] ">
      <div className="px-4">
        <div className="flex justify-between">
          <select
            name="language"
            id="language"
            onChange={handleSubmitChange}
            className=" border rounded m-0 py-2 px-3 bg-gray-700 text-white leading-tight focus:outline-none focus:shadow-outline"
          >
            {languagesData.map((language) => (
              <option key={language.language} value={language.language}>
                {language.select}
              </option>
            ))}
          </select>
          <div className="w-50 flex">
            <input
              type="range"
              id="fontSizeSlider"
              min="12"
              max="30"
              step="1"
              value={fontSize}
              onChange={(e) => {
                setFontSize(e.target.value);
              }}
              className="w-full"
            />
          </div>
        </div>

        <Editor
          options={editorOptions}
          className="m-0"
          height="80vh"
          width="100vh"
          theme="vs-dark"
          language={selected.displayName}
          defaultLanguage="cpp"
          value={code}
          onChange={handleEditorChange}
        />
      </div>
      <div className="flex flex-col  justify-between w-[100vh] h-[85vh]">
        <p className="text-gray-700 font-semibold mb-2">Output:</p>
        <div className="w-full h-[50vh] bg-[#1e293b] rounded-md text-white font-normal overflow-y-auto p-1"  style={{ fontSize: `${fontSize}px` }}>
         {output}
         </div>
        <div className="">
          <p className="text-gray-700 font-semibold mb-2">Input:</p>
          <textarea
            className="bg-gray-200 border border-gray-300 rounded-lg p-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your input here"
            name="inputs"
            id="inputs"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            rows="5"
            cols="50"
          />
          <div className="flex space-x-4 mt-4">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded transition duration-300 ease-in-out"
              onClick={handleRun}
            >
              RUN
            </button>
            <button
              onClick={() => alert("Will be available Soon")}
              className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded transition duration-300 ease-in-out"
            >
              SAVE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CodeEditor;
