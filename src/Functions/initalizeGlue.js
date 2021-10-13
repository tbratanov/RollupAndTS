import Glue from "@glue42/desktop";
export async function initializeGlue() {
    try {
        return Glue({ layouts: "full" });
    }
    catch (error) {
        console.warn(error);
    }
}
;
