import nextAuth from "next-auth";
import githubAuth from "next-auth/providers/github";

export const authOptions = {
  providers: [
    githubAuth({
      clientId: process.env.GITHUB_CLIENT,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = nextAuth(authOptions);
export { handler as GET, handler as POST };
