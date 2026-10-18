import play from '../../assets/play.png'
import Arr_map from '../Arr_map.jsx'
function Flow() {

    const arr = [
        {
            type: "wait",
            icon: play,
            name: "Wait",
            description: "Wait for a some time",
            config: {
                duration: {
                    label: "Duration",
                    type: "number",
                    value: 1000
                },
                unit: {
                    label: "Time Unit",
                    type: "dropdown",
                    options: ["Milliseconds", "Seconds", "Minutes"],
                    value: "Milliseconds"
                }
            }
        },
        {
            type: "repeat",
            icon: play,
            name: "Repeat",
            description: "repeat a task",
            config: {
                times: {
                    label: "Number of Repetitions",
                    type: "number",
                    value: 3
                }
            }
        },
        {
            type: "for_each",
            icon: play,
            name: "For Each",
            description: "Loop for each element",
            config: {
                list: {
                    label: "List/Array to Iterate",
                    type: "text",
                    value: ""
                },
                item_var: {
                    label: "Item Variable Name",
                    type: "text",
                    value: "item"
                }
            }
        },
        {
            type: "stop",
            icon: play,
            name: "Stop",
            description: "Stop workflow",
            config: {
                status: {
                    label: "End Status",
                    type: "dropdown",
                    options: ["Success", "Error"],
                    value: "Success"
                },
                message: {
                    label: "Message",
                    type: "text",
                    value: ""
                }
            }
        }
    ]
    return (
        <Arr_map arr={arr} Title="FLOW" />
    )
}

export default Flow