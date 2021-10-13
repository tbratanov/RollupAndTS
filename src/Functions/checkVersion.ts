import {initializeGlue} from "./initalizeGlue"

export function checkVersion() {
    initializeGlue()
    .then((glue) => {
        console.log(glue.version)
    })
    .catch((error) => {
        console.warn(error)
    })
}