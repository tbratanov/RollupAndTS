import { initializeGlue } from "./initalizeGlue";
import { fetchFromJSON } from "./fetchFromJSON";
import { getMode } from "./getMode";
export async function importAppGroup(location) {
    const mode = getMode();
    const glue = await initializeGlue();
    const appGrp = await fetchFromJSON(location);
    let toImport;
    if (Array.isArray(appGrp)) {
        toImport = appGrp;
    }
    else {
        toImport = [appGrp];
    }
    ;
    if (mode === undefined) {
        window.alert("Mode is not selected, the method will default to mode: Replace!");
    }
    ;
    glue.appManager.inMemory.import(toImport, mode)
        .then(() => {
        window.alert("Application group is imported!");
    }).catch((err) => {
        console.warn(err);
    });
}
;
