import React from "react";
import { Sandpack } from "@codesandbox/sandpack-react";
import { monokaiPro } from "@codesandbox/sandpack-themes";

export default function App(props) {
  return (
    <div className="p-10">
      <Sandpack
        template="react"
        theme={monokaiPro}
        options={{
          showNavigator: true,
          showTabs: true,
          closableTabs: true,
          showLineNumbers: true,
          showInlineErrors: true,
          wrapContent: true,
          editorHeight: 590,
          editorWidthPercentage: 60,
        }}
        customSetup={{
        dependencies: {
            "react-spring": "9.5.5",
            "react-scripts": "4.0.0",
        }}}
      />
    </div>
  );
}
