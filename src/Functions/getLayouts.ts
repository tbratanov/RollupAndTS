import {fetchFromJSON} from "./fetchFromJSON"

export async function getLayouts(type:string, location:string) {

    const layoutsConfig = await fetchFromJSON(location);

    let layouts:any;

    if (Array.isArray(layoutsConfig)) {
        layouts = layoutsConfig.filter(filter => filter.type === type)
    } else {
        if (layoutsConfig.type === type) {
            layouts = layouts;
        }
    };

    return layouts;

};