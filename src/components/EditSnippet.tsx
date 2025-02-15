"use client";

import React, { useState } from "react";
import type { Snippets } from "@prisma/client";
import { Editor } from "@monaco-editor/react";
import { Button } from "./ui/button";
import { saveCode } from "@/actions";

const EditSnippet = ({ myCode }: { myCode: Snippets }) => {
  const [code, setCode] = useState(myCode.code);

  const changeEventHandler = (value : string = " ") => {
    setCode(value);
  }

  const saveCodeAction = saveCode.bind(null, myCode.id, code);
  return (
    <div className="flex flex-col gap-4">
      <form
        action={saveCodeAction}
        className="flex items-center justify-between"
      >
        <h1 className="font-bold text-xl">Your Code Editor</h1>
        <Button type="submit">Save Code</Button>
      </form>
      <Editor
        height="40vh"
        defaultLanguage="C++"
        defaultValue={code}
        theme="vs-dark"
        onChange={changeEventHandler}
      />
    </div>
  );
};

export default EditSnippet;
