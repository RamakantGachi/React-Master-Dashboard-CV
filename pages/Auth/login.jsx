import { useRouter } from 'next/router'
import React, { useState, useRef, useEffect } from 'react'
// import Image from 'next/image'

function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError('')
      setLoading(true)
      if (
        emailRef.current.value === 'user123' &&
        passwordRef.current.value === '123'
      )
        router.push('/dashboard')
    } catch (error) {
      setError('Login Failed')
      console.error(error)
    }
    setLoading(false)
  }

  return (
    <div
      className="App container d-flex align-items-center justify-content-center"
      style={{
        minHeight: '100vh',
        backgroundImage: 'url(/bg.jpg)',
        backgroundSize: 'cover',
      }}
    >
      <div className="w-100" style={{ maxWidth: '600px' }}>
      {/* <div className="w-100" style={{ maxWidth: '800px' }}> */}
        <div className="card rounded-5 shadow">
          <div className="card-body">
            {/* <Image
              src={logo}
              alt="logo"
              className="logo mx-auto d-block mt-5 mb-4"
            /> */}
            <h4 className="text-center mb-4 fs-3">
              Welcome to
              <br />
              <strong>TATA Motors</strong>
              <br />
              Accounting Extracts
            </h4>
            {error && (
              <div className="alert alert-danger mx-4 text-center" role="alert">
                {error}
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="form-group m-4">
                <input
                  type="text"
                  ref={emailRef}
                  className="form-control"
                  id="inputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Username"
                  required
                />
              </div>

              <div className="form-group m-4">
                {/* <label htmlFor="inputPassword">Password</label> */}
                <input
                  type="password"
                  ref={passwordRef}
                  className="form-control"
                  id="inputPassword"
                  placeholder="Password"
                  required
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary d-block mx-auto px-5 rounded-0"
                disabled={loading}
              >
                {loading ? 'loading...' : 'Login'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
