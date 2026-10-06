import play from '../../assets/play.png'
import Arr_map from '../Arr_map.jsx'
function Flow() {

    const arr = [
        {
            type: "wait",
            icon: play,
            name: "Wait",
            description: "Wait for a some time"
        },
        {
            type: "repeat",
            icon: play,
            name: "Repeat",
            description: "repeat a task"
        },
        {
            type: "for_each",
            icon: play,
            name: "For Each",
            description: "Loop for each element"
        },
        {
            type: "stop",
            icon: play,
            name: "Stop",
            description: "Stop workflow"
        }
    ]
    return (
        <Arr_map arr={arr} Title="FLOW" />
    )
}

export default Flow