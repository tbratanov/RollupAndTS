import { initializeGlue } from "./initalizeGlue";
import { fetchFromJSON } from "./fetchFromJSON";
export async function removeAppGroup(location) {
    let appGroup = await fetchFromJSON(location);
    if (Array.isArray(appGroup)) {
        appGroup.forEach((appToRemove) => {
            removeApp(appToRemove.name);
        });
    }
    else {
        removeApp(appGroup.name);
    }
    ;
}
;
async function removeApp(appName) {
    const glue = await initializeGlue();
    if (glue.appManager.application(appName) === undefined) {
        window.alert("Application with name: " + appName + " doesn't exist!");
    }
    else {
        glue.appManager.inMemory.remove(appName)
            .then(() => {
            window.alert("Removed!");
        })
            .catch((err) => {
            console.warn(err);
        });
    }
    ;
}
;
