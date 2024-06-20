import React, {useState}from "react";
import CodeEditor from "../components/CodeEditor";

function EditorPage() {
  

  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <CodeEditor/>
      </div>
    </div>
  );
}

export default EditorPage;
