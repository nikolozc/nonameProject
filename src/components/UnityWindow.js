import React from "react";
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
    loaderUrl: "build/myunityapp.loader.js",
    dataUrl: "build/myunityapp.data",
    frameworkUrl: "build/myunityapp.framework.js",
    codeUrl: "build/myunityapp.wasm",
});
function UnityWindow() {
  return (
    <div className="unityWindow">
        <Unity unityContext={unityContext} />;
    </div>
  );
}

export default UnityWindow;