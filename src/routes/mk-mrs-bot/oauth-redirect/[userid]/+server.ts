import { OAUTH_RETURN_URL } from '$env/static/private';
import { addUserCode } from '$lib/db.js';

export async function GET({ params, url }) {
    const { userid } = params;
    const code = url.searchParams.get("code") || "";
    addUserCode(userid, code);
    return new Response("", { status: 301, headers: { Location: OAUTH_RETURN_URL } });
}