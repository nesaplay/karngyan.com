export default async function ({ app, store }) {
  if (app.$fire.auth) {
    try {
      const user = app.$fire.auth.currentUser
      if (user) {
        console.debug('[middleware] user logged in')
        store.commit('')
      } else {
        console.debug('[middleware] no user here')
      }
    } catch (e) {
      store.dispatch('signOut')
    }
  }
}
