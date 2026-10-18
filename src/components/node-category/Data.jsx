import play from '../../assets/play.png'
import Arr_map from '../Arr_map.jsx'
function Data() {
    const arr = [
        {
            type: "set_variable",
            icon: play,
            name: "Set Variable",
            description: "Set a value for a variable",
            config: {
                variable_name: {
                    label: "Variable Name",
                    type: "text",
                    value: ""
                },
                value: {
                    label: "Value",
                    type: "text",
                    value: ""
                }
            }
        },
        {
            type: "get_variable",
            icon: play,
            name: "Get Variable",
            description: "Get value of a variable",
            config: {
                variable_name: {
                    label: "Variable Name",
                    type: "text",
                    value: ""
                }
            }
        },
        {
            type: "calculate",
            icon: play,
            name: "Calculate",
            description: "Perform a calculation based on data",
            config: {
                first_value: {
                    label: "First Value",
                    type: "text",
                    value: ""
                },
                operator: {
                    label: "Operator",
                    type: "dropdown",
                    options: ["+", "-", "*", "/", "%"],
                    value: "+"
                },
                second_value: {
                    label: "Second Value",
                    type: "text",
                    value: ""
                },
                result_variable: {
                    label: "Save Result As",
                    type: "text",
                    value: "result"
                }
            }
        },
        {
            type: "format",
            icon: play,
            name: "Format",
            description: "Format data",
            config: {
                template: {
                    label: "Text Template",
                    type: "text",
                    value: "Hello {name}!"
                },
                result_variable: {
                    label: "Save Result As",
                    type: "text",
                    value: "formatted_text"
                }
            }
        }
    ]
    return (
        <Arr_map arr={arr} Title="DATA" />
    )
}

export default Data