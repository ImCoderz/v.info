export { default } from "next-auth/middleware"

export const config = {matcher: ["/((?!auth/register|auth/signin).*)"]}