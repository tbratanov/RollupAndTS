export async function fetchFromJSON(location) {
    const response = await fetch(location);
    if (!response.ok) {
        throw new Error("error reading file" + response.status);
    }
    ;
    return response.json();
}
;
