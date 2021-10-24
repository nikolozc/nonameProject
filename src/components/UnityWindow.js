import React from "react";
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
    loaderUrl: "buildUnity/myunityapp.loader.js",
    dataUrl: "buildUnity/myunityapp.data",
    frameworkUrl: "buildUnity/myunityapp.framework.js",
    codeUrl: "buildUnity/myunityapp.wasm",
});
function UnityWindow() {
  return (
    <div className="unityWindow">
        <Unity unityContext={unityContext} />;
    </div>
  );
}

export default UnityWindow;