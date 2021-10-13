export function getMode() {

    let mode:string;

    if ((document.getElementById('Merge') as HTMLInputElement).checked == true) {
        mode = "merge";
    } else if ((document.getElementById('Replace') as HTMLInputElement).checked == true) {
        mode = "replace";
    } else {
        mode = undefined;
    }
    return mode;
};