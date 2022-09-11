import React from "react";
import Editor from "@monaco-editor/react";
import Navbar from "./Navbar";

const Python = () =>{

    return (
        <div >
            <Navbar  />
            <div>
                <Editor
                    height="90vh"
                    defaultLanguage='python'
                    theme="vs-dark"
                />
                

            </div>
        </div>
    )
}

export default Python;