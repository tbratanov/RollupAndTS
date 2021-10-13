import { initializeGlue } from "./initalizeGlue";
import { getLayouts } from "./getLayouts";
import { getMode } from "./getMode";
export async function importLayouts(type, location) {
    const mode = getMode();
    const glue = await initializeGlue();
    const layouts = await getLayouts(type, location);
    console.log(glue.config);
    if (layouts === undefined) {
        window.alert("No such layout type found!");
    }
    else if (mode === undefined) {
        window.alert("Mode is not selected, the method will default to mode: Replace!");
    }
    ;
    let toImport;
    if (Array.isArray(layouts)) {
        toImport = layouts;
    }
    else {
        toImport = [layouts];
    }
    ;
    glue.layouts.import(layouts, mode)
        .then(() => {
        window.alert("Import Successful");
    })
        .catch((err) => {
        console.warn(err);
    });
}
;
