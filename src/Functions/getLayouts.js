import { fetchFromJSON } from "./fetchFromJSON";
export async function getLayouts(type, location) {
    const layoutsConfig = await fetchFromJSON(location);
    let layouts;
    if (Array.isArray(layoutsConfig)) {
        layouts = layoutsConfig.filter(filter => filter.type === type);
    }
    else {
        if (layoutsConfig.type === type) {
            layouts = layouts;
        }
    }
    ;
    return layouts;
}
;
