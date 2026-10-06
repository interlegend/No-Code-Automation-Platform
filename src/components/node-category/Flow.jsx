import play from '../../assets/play.png'
import Arr_map from '../Arr_map.jsx'
function Flow() {

    const arr = [
        {
            "icon": play,
            "name": "Wait",
            "description": "Wait for a some time"
        },
        {
            "icon": play,
            "name": "Repeat",
            "description": "repeat a task"
        },
        {
            "icon": play,
            "name": "For Each",
            "description": "Loop for each element"
        },
        {
            "icon": play,
            "name": "Stop",
            "description": "Stop workflow"
        }
    ]
    return (
        <Arr_map arr={arr} Title="FLOW" />
    )
}

export default Flow