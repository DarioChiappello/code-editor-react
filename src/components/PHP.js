import React from "react";
import Editor from "@monaco-editor/react";
import Navbar from "./Navbar";


const PHP = () =>{

    return (
        <div >
            <Navbar  />
            <div>
                <Editor
                    height="90vh"
                    defaultLanguage='php'
                    theme="vs-dark"
                />
            </div>
        </div>
    )
}

export default PHP;