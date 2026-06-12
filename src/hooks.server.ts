import type { ServerInit } from "@sveltejs/kit";
import { init as db_init } from "$lib/db";

export const init: ServerInit = async () => {
    await db_init();
}