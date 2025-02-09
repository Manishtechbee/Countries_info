import { useContext } from "react"
import { theme } from "../contexts/themeContext"

export function useTheme(){
    const [isdark,setisdark]=useContext(theme)
    return [isdark,setisdark]
}