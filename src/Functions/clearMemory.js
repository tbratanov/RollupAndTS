import { initializeGlue } from "./initalizeGlue";
export async function clearMemory() {
    const glue = await initializeGlue();
    glue.appManager.inMemory.clear()
        .then(() => {
        window.alert("Memory cleared!");
    })
        .catch((error) => {
        console.warn(error);
    });
}
;
