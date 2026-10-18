import play from '../../assets/play.png'
import Arr_map from '../Arr_map.jsx'
function Logic() {
    const arr = [
        {
            type: "condition",
            icon: play,
            name: "Condition",
            description: "Check for a condition",
            config: {
                first_value: {
                    label: "First Value",
                    type: "text",
                    value: ""
                },
                operator: {
                    label: "Operator",
                    type: "dropdown",
                    options: ["==", "!=", ">", "<", "contains"],
                    value: "=="
                },
                second_value: {
                    label: "Second Value",
                    type: "text",
                    value: ""
                }
            }
        },
        {
            type: "switch",
            icon: play,
            name: "Branch/Switch",
            description: "Switch/branch based on input",
            config: {
                check_value: {
                    label: "Value to Check",
                    type: "text",
                    value: ""
                },
                cases: {
                    label: "Cases (comma separated)",
                    type: "text",
                    value: "case1, case2, default"
                }
            }
        },
        {
            type: "loop",
            icon: play,
            name: "Loop",
            description: "Execute a block of code repeatedly",
            config: {
                iterations: {
                    label: "Number of Iterations",
                    type: "number",
                    value: 5
                }
            }
        },
        {
            type: "error_handling",
            icon: play,
            name: "Error Handling",
            description: "Handle errors gracefully",
            config: {
                action: {
                    label: "On Error",
                    type: "dropdown",
                    options: ["Stop", "Retry", "Continue"],
                    value: "Stop"
                }
            }
        }
    ]
    return (
        <Arr_map arr={arr} Title="LOGIC" />
    )
}

export default Logic