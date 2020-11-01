import { useState, useEffect } from 'react'

export default function useDarkMode() {
    const [darkMode, setDarkMode] = useState('dark')

    useEffect(() => {
        return darkMode
            ? document.body.classList.add('dark-mode')
            : document.body.classList.remove('dark-mode')
    }, [darkMode])
    return [darkMode, setDarkMode]
}