import React, { useEffect, createContext, useContext, useState } from 'react'

const AuthContext = createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(false) // default value changed to false for now

  function login(email, password) {
    console.log('login')
    // return signInWithEmailAndPassword(auth, email, password)
  }

  function logout() {
    console.log('logout')
    // return signOut(auth)
  }

  useEffect(() => {
    // const unsubscribe = onAuthStateChanged(auth, (user) => {
    //   setCurrentUser(user)
    //   setLoading(false)
    // })
    // return unsubscribe
  }, [])

  const value = { currentUser, login, logout }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
