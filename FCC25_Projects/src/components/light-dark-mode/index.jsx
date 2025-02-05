import UseLocalStorage from "./uselocalstorage";
import './index.css'

export default function LightDarkMode() {
    
    const [theme, setTheme] = UseLocalStorage("theme", "dark")

    function handleToggeleTheme() {
        setTheme(theme === "light" ? "dark" : "light")
    }

    console.log(theme)
    
    return (
        <div className="light-dark-mode" data-theme={theme}>
            <div className="container">
                <p>Hello world!</p>
                <button onClick={handleToggeleTheme}>Change Theme</button>
            </div>
        </div>
    )
}