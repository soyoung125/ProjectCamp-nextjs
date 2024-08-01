import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      // 인증 여부 확인
      const isLoggedIn = !!auth?.user;
      // 대시보드 접근 확인
      const isOnDashboard = nextUrl.pathname.startsWith("/dashboard");

      //true를 반환하면 로그인 페이지로 이동, false면 자동으로 로인 페이지로 이동
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL("/dashboard", nextUrl));
      }
      return true;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
