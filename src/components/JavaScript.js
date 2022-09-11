import React from "react";
import Editor from "@monaco-editor/react";
import Navbar from "./Navbar";


const JavaScript = () =>{
    return (
        <div >
            <Navbar  />
            <div>
                <Editor
                    height="90vh"
                    defaultLanguage='javascript'
                    theme="vs-dark"
                />
            </div>
        </div>
    )
}

export default JavaScript;