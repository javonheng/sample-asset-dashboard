import React, { useState } from 'react'

import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { AuthLayout } from '@/components/AuthLayout'
import { Button } from '@/components/Button'
import { TextField } from '@/components/Fields'
import { Logo } from '@/components/Logo'

export default function Login() {
  const router = useRouter()
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  })
  const [loading, setLoading] = useState(false)
  const login = (e) => {
    setLoading(true)
    e.preventDefault()
    localStorage.setItem('user', JSON.stringify(loginData))
    router.push('/assets')
    setLoading(false)
  }

  const handleInput = (e) => {
    const fieldName = e.target.name
    const fieldValue = e.target.value

    setLoginData((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue,
    }))
  }

  return (
    <>
      <Head>
        <title>Renora | Sign In</title>
      </Head>
      <AuthLayout>
        <div action="#" className="flex flex-col">
          <Link href="/" aria-label="Home">
            <Logo className="h-10 w-auto" />
          </Link>
          <div className="mt-20">
            <h2 className="text-lg font-semibold text-gray-900">
              Sign in to your account
            </h2>
            <p className="mt-2 text-sm text-gray-700">
              Don’t have an account?{' '}
              <Link
                href="/register"
                className="font-medium text-blue-600 hover:underline"
              >
                Sign up
              </Link>{' '}
              for a free trial.
            </p>
          </div>
        </div>
        <form className="mt-10 grid grid-cols-1 gap-y-8">
          <TextField
            label="Username"
            id="username"
            name="username"
            type="text"
            autoComplete="username"
            value={loginData.username}
            onChange={handleInput}
            required
          />
          <TextField
            label="Password"
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            value={loginData.password}
            onChange={handleInput}
            required
          />
          <div>
            <Button
              type="submit"
              variant="solid"
              className="primary-color w-full hover:bg-teal-800"
              onClick={login}
            >
              <span>
                <div>
                  {loading ? (
                    <div class="loader">Loading...</div>
                  ) : (
                    <div>
                      Sign in <span aria-hidden="true">&rarr;</span>
                    </div>
                  )}
                </div>
              </span>
            </Button>
          </div>
        </form>
      </AuthLayout>
    </>
  )
}
