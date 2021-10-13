export async function fetchFromJSON(location:string) {

    const response = await fetch(location);

    if (!response.ok) {
        throw new Error("error reading file" + response.status);
    };

    return response.json();
};