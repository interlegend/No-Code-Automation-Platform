import play from '../../assets/play.png'
import Arr_map from '../Arr_map.jsx'
function Data() {
    const arr = [
        {
            type: "set_variable",
            icon: play,
            name: "Set Variable",
            description: "Set a value for a variable"
        },
        {
            type: "get_variable",
            icon: play,
            name: "Get Variable",
            description: "Get value of a variable"
        },
        {
            type: "calculate",
            icon: play,
            name: "Calculate",
            description: "Perform a calculation based on data"
        },
        {
            type: "format",
            icon: play,
            name: "Format",
            description: "Format data"
        }
    ]
    return (
        <Arr_map arr={arr} Title="DATA" />
    )
}

export default Data