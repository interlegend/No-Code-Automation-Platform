import play from '../../assets/play.png'
import Arr_map from '../Arr_map.jsx'
function Logic() {
    const arr = [
        {
            "icon": play,
            "name": "Condition",
            "description": "Check for a condition"
        },
        {
            "icon": play,
            "name": "Branch/Switch",
            "description": "Switch/branch based on input"
        },
        {
            "icon": play,
            "name": "Loop",
            "description": "Execute a block of code repeatedly"
        },
        {
            "icon": play,
            "name": "Error Handling",
            "description": "Handle errors gracefully"
        }
    ]
    return (
        <Arr_map arr={arr} Title="LOGIC" />
    )
}

export default Logic