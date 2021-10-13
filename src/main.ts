import {importAppGroup} from "./Functions/importAppGroup"
import {removeAppGroup} from "./Functions/RemoveAppGroup"
import {clearMemory} from "./Functions/clearMemory"
import {importLayouts} from "./Functions/importLayouts"
import {removeLayouts} from "./Functions/RemoveLayouts"
import {getCustomAlert} from "./AlertModification/alertModification"
import {checkVersion} from "./Functions/checkVersion"

getCustomAlert();

const layoutsJSONLocation = './definitions/layouts/layouts.json';
const appGroup1JSONLocation = './definitions/apps/firstAppGroup.json';
const appGroup2JSONLocation = './definitions/apps/secondAppGroup.json';

document.addEventListener('DOMContentLoaded', (event) => {
    handleDOMReady();
});

function handleDOMReady() {
    checkVersion();

    const importApp1 = document.getElementById("importApp1");
    importApp1.addEventListener("click", importApp1Func);

    const importApp2 = document.getElementById("importApp2");
    importApp2.addEventListener("click", importApp2Func);

    const removeAPP1 = document.getElementById("removeAPP1");
    removeAPP1.addEventListener("click", removeAPP1Func);

    const removeApp2 = document.getElementById("removeApp2");
    removeApp2.addEventListener("click", removeApp2Func);

    const clearMemmory = document.getElementById("clearMemmory");
    clearMemmory.addEventListener("click", clearMemmoryFunc);

    const importWorkspace = document.getElementById("importWorkspace");
    importWorkspace.addEventListener("click", importWorkspaceFunc);

    const importSwimlane = document.getElementById("importSwimlane");
    importSwimlane.addEventListener("click", importSwimlaneFunc);

    const ImportGlobalLayouts = document.getElementById("ImportGlobalLayouts");
    ImportGlobalLayouts.addEventListener("click", importGlobaLayout);

    const removeLayouts = document.getElementById("removeLayouts");
    removeLayouts.addEventListener("click", removeLayoutsFunc);
};

function importApp1Func() {
    importAppGroup(appGroup1JSONLocation);
};

function importApp2Func() {
    importAppGroup(appGroup2JSONLocation);
};

function removeAPP1Func() {
    removeAppGroup(appGroup1JSONLocation);
};

function removeApp2Func() {
    removeAppGroup(appGroup2JSONLocation);
};

function clearMemmoryFunc() {
    clearMemory();
};

function importWorkspaceFunc() {
    const type = 'Workspace';
    importLayouts(type, layoutsJSONLocation)
};

function importSwimlaneFunc() {
    const type = 'Swimlane';
    importLayouts(type, layoutsJSONLocation)
};

function importGlobaLayout() {
    const type = 'Global';
    importLayouts(type, layoutsJSONLocation)
};

function removeLayoutsFunc() {
    removeLayouts(layoutsJSONLocation);
};

