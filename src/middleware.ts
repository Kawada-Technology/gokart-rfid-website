import { withAuth } from "next-auth/middleware"

export default withAuth({
    callbacks: {
        authorized: ({ req, token }) => {
            const path = req.nextUrl.pathname;
            // Allow access to login page
            if (path.startsWith("/admin/login")) {
                return true;
            }
            // Require token for other admin pages
            return !!token;
        },
    },
})

export const config = {
    // Only protect /admin routes
    matcher: ["/admin/:path*"]
}
