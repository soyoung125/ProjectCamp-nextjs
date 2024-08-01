import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod"; //validation check
import { connectToDB } from "./libs/db";
import { User } from "./libs/schemas/users";
import bcrypt from "bcrypt";

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(2) }) // 이메일이 이메일 형식인지 확인하는건데 중요하지 않아서 2로 변경
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;

          connectToDB();

          // 입력한 아이디를 가진 유저가 있는 지 확인
          const user = await User.findOne({ email });
          if (!user) return null;

          // 비밀번호 비교
          const passwordMatch = await bcrypt.compare(password, user.password);
          if (passwordMatch) {
            return user;
          }
        }

        return null; // 빨간 줄 없애려고 넣음
      },
    }),
  ],
});
