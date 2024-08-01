import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import { connectToDB } from "./libs/db";
import { User } from "./libs/schemas/users";
import bcrypt from "bcrypt";

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(2) })
          .safeParse(credentials);
        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;

          connectToDB();

          const user = await User.findOne({ email });
          if (!user) return null;

          const passwordMatch = await bcrypt.compare(password, user.password);
          if (passwordMatch) {
            return user;
          }
        }
        return null;
      },
    }),
  ],
});
