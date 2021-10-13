export function getMode() {
    let mode;
    if (document.getElementById('Merge').checked == true) {
        mode = "merge";
    }
    else if (document.getElementById('Replace').checked == true) {
        mode = "replace";
    }
    else {
        mode = undefined;
    }
    return mode;
}
;
