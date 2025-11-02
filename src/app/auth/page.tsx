'use client'

import { useState } from 'react'
import { Logo } from '@/components/ui/Logo'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

type AuthState = 'welcome' | 'signin' | 'signup'

export default function AuthPage() {
  const [state, setState] = useState<AuthState>('welcome')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [workspace, setWorkspace] = useState('')
  const router = useRouter()

  const handleContinue = async () => {
    // TODO: Check if user exists
    const userExists = false // Placeholder

    if (userExists) {
      setState('signin')
    } else {
      setState('signup')
    }
  }

  const handleSignIn = async () => {
    // TODO: Implement sign in
    router.push('/onboarding')
  }

  const handleSignUp = async () => {
    // TODO: Implement sign up
    router.push('/onboarding')
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Logo */}
      <div className="absolute top-40 left-40">
        <Logo />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          className="w-full max-w-[400px] px-16"
        >
          {state === 'welcome' && (
            <div className="space-y-40">
              <h1 className="text-32 font-semibold text-center">
                Work as one.
              </h1>

              <div className="space-y-24">
                <Input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleContinue()}
                />

                <Button
                  fullWidth
                  onClick={handleContinue}
                  disabled={!email}
                >
                  Continue
                </Button>
              </div>

              <p className="text-12 text-secondary text-center">
                By continuing, you agree to our Terms and Privacy Policy
              </p>
            </div>
          )}

          {state === 'signin' && (
            <div className="space-y-40">
              <h1 className="text-32 font-semibold text-center">
                Welcome back.
              </h1>

              <div className="space-y-24">
                <Input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  disabled
                />

                <Input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSignIn()}
                />

                <Button
                  fullWidth
                  onClick={handleSignIn}
                  disabled={!password}
                >
                  Sign in
                </Button>
              </div>

              <button
                className="w-full text-14 text-foreground hover:text-secondary transition-colors text-center"
                onClick={() => {/* TODO: Magic link */}}
              >
                Send me a sign-in link instead
              </button>
            </div>
          )}

          {state === 'signup' && (
            <div className="space-y-40">
              <h1 className="text-32 font-semibold text-center">
                Create your workspace.
              </h1>

              <div className="space-y-24">
                <Input
                  type="text"
                  placeholder="Full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

                <Input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  disabled
                />

                <Input
                  type="password"
                  placeholder="Choose a password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <Input
                  type="text"
                  placeholder="Workspace name (optional)"
                  value={workspace}
                  onChange={(e) => setWorkspace(e.target.value)}
                />

                <Button
                  fullWidth
                  onClick={handleSignUp}
                  disabled={!name || !password}
                >
                  Create workspace
                </Button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}
