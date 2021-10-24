import React from "react";
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
    loaderUrl: "Build/myunityapp.loader.js",
    dataUrl: "Build/myunityapp.data",
    frameworkUrl: "Build/myunityapp.framework.js",
    codeUrl: "Build/myunityapp.wasm",
});
function UnityWindow() {
  return (
    <div className="unityWindow">
        <Unity unityContext={unityContext} />;
    </div>
  );
}

export default UnityWindow;