import React, { createContext, useContext, useState, useEffect } from 'react'
import { account } from '../appwrite/config'

const AuthContext = createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    checkAuth()
  }, [])

  async function checkAuth() {
    try {
      const session = await account.get()
      setUser(session)
      console.log('User authenticated:', session.email)
    } catch (error) {
      setUser(null)
      console.log('No active session')
    } finally {
      setLoading(false)
    }
  }

  async function login(email, password) {
    try {
      await account.createEmailPasswordSession(email, password)
      const session = await account.get()
      setUser(session)
      console.log('Login successful:', session.email)
      return { success: true }
    } catch (error) {
      console.error('Login error:', error)
      return { success: false, error: error.message }
    }
  }

  async function logout() {
    try {
      await account.deleteSession('current')
      setUser(null)
      console.log('Logout successful')
      return { success: true }
    } catch (error) {
      console.error('Logout error:', error)
      return { success: false, error: error.message }
    }
  }

  const value = {
    user,
    login,
    logout,
    loading
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}