import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSnapshot } from "valtio";

import config from "../config/config";
import state from "../store";
import { download } from "../assets";
import { downloadCanvasToImage, reader } from "../config/helpers";
import { EditorTabs, FilterTabs, DecalTypes } from "../config/constants";
import { fadeAnimation, slideAnimation } from "../config/motion";

import { AIPicker, ColorPicker, FilePicker, Tab, CustomButton } from "../components";
function Costomizer() {
  const snap = useSnapshot(state);
  const [file, setFile] = useState("");
  const [prompt, setPrompt] = useState("");
  const [generatingImg, setGeneratingImg] = useState(false);
  const [activeEditorTab, setActiveEditorTab] = useState("");
  const [activeFilterTab, setActiveFilterTab] = useState({
    shirtLogo: true,
    styleshShirt: false,
  });

  const generateTabContent = () => {
    switch (activeEditorTab) {
      case "colorpicker":
        return <ColorPicker />;
      case "filepicker":
        return <FilePicker file={file} setFile={setFile} readFile={readFile} />;
      case "aipicker":
        return <AIPicker />;
      default:
        return null;
    }
  };

  const handleDecals = (type, result) => {
    const decalType = DecalTypes[type];
    state[decalType.stateProperty] = result;
    console.log(result);
    if (!activeFilterTab[decalType.FilterTab]) {
      handleActiveFilterTab(decalType.FilterTab);
    }
  };

  const handleActiveFilterTab = (tabName) => {
    switch (tabName) {
      case "logoShirt":
        state.isLogoTexture = !activeEditorTab[tabName];
        return;
      case "styleshShirt":
        state.isFullTexture = !activeEditorTab[tabName];
        return;
      default:
        state.isLogoTexture = true;
        state.isFullTexture = false;
    }
  };

  const readFile = (type) => {
    reader(file).then((result) => {
      handleDecals(type, result);
      setActiveEditorTab("");
    });
  };

  return (
    <AnimatePresence>
      {!snap.intro && (
        <>
          <motion.div key="custom" className="absolute top-0 left-0 z-10" {...slideAnimation("left")}>
            <div className="flex justify-center items-center min-h-screen">
              <div className="editortabs-container tabs">
                {EditorTabs.map((tab) => (
                  <Tab
                    key={tab.name}
                    tab={tab}
                    handleClick={() => {
                      setActiveEditorTab(tab.name);
                    }}
                  />
                ))}
                {generateTabContent()}
              </div>
            </div>
          </motion.div>
          <motion.div className="absolute z-10 top-5 right-5" {...fadeAnimation}>
            <CustomButton type="filled" title="Go Back" handelClick={() => (state.intro = true)} customStyle="w-fit px-4 py-2.5 font-bold text-sm" />
          </motion.div>

          <motion.div className="filtertabs-container" {...slideAnimation("up")}>
            {FilterTabs.map((tab) => (
              <Tab key={tab.name} tab={tab} isFilterTab isActiveTab="" handleClick={() => {}} />
            ))}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// 1:40
export default Costomizer;
