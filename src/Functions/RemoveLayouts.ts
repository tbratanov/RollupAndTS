import {fetchFromJSON} from "./fetchFromJSON"
import {initializeGlue} from "./initalizeGlue"

export async function removeLayouts(location:string) {

    const glue = await initializeGlue();
    let layoutsToRemove = await fetchFromJSON(location);

    if (Array.isArray(layoutsToRemove)) {
        layoutsToRemove.forEach((layout) => {
            glue.layouts.get(layout.name, layout.type)
            .then(() => {
                return glue.layouts.remove(layout.type, layout.name);
            })
            .catch((err) => {
                console.warn(err)
            });
        });
    } else {
        glue.layouts.get(layoutsToRemove.name, layoutsToRemove.type)
        .then(() => {
            return glue.layouts.remove(layoutsToRemove.type, layoutsToRemove.name);
        })
        .catch((err) => {
            console.warn(err)
        });
    };

    window.alert("Layouts removed!");
    
};
