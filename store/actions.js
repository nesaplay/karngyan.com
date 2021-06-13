export default {
  // nuxt handles invoking this when firebaseAuthStateChanges
  async authAction({dispatch, state, commit}, {authUser}) {
    console.debug('in auth action')
    if (!authUser) {
      console.debug('signing out as no user')
      await dispatch('signOut')
    } else {
      // logged in
      await dispatch('setFirebaseUser', {authUser})
    }
  },

  setFirebaseUser({commit}, {authUser}) {
    return new Promise((resolve) => {
      const { uid, email, emailVerified, displayName, photoURL } = authUser
      commit('setUser', { uid, email, emailVerified, displayName, photoURL })
      resolve({ uid, email, emailVerified, displayName, photoURL })
    })
  },

  signOut({commit}) {
    return this.$fire.auth.signOut()
      .then(() => {
        commit('setUser', null)
      })
  },

  signInUserWithGoogle({dispatch}) {
    return new Promise((resolve, reject) => {
      // https://firebase.google.com/docs/auth/web/google-signin#web-v8
      const provider = new this.$fireModule.auth.GoogleAuthProvider()
      this.$fire.auth.signInWithPopup(provider)
        .then((userCred) => {
          dispatch('setFirebaseUser', {authUser: userCred.user})
            .then((user) => {
              resolve(user)
            })
        }).catch((error) => {
          reject(error)
        })
    })
  }
}
