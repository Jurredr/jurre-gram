import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || 'clientId',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || 'clientSecret'
    })
  ],
  pages: {
    signIn: '/signin'
  },
  callbacks: {
    async session({ session, token }) {
      // @ts-ignore
      session.user.username = session.user.name
        .split(' ')
        .join('')
        .toLocaleLowerCase()

      // @ts-ignore
      session.user.uid = token.sub
      return session
    }
  }
})
