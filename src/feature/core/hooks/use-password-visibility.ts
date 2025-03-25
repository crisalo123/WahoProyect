import { useState } from 'react'

interface PasswordVisibility {
  [key: string]: boolean
}
export function usePasswordVisibility() {
  const [passwordsVisible, setPasswordsVisible] = useState<PasswordVisibility>(
    {}
  )

  const toggleVisibility = (inputName: string) => {
    setPasswordsVisible({
      ...passwordsVisible,
      [inputName]: !passwordsVisible[inputName]
    })
  }

  return { passwordsVisible, toggleVisibility }
}
