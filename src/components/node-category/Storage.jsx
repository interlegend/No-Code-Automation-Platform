import play from '../../assets/play.png'
import Arr_map from '../Arr_map.jsx'
function Storage() {

    const arr = [
        {
            type: "save_value",
            icon: play,
            name: "Save Value",
            description: "Store The value",
            config: {
                key: {
                    label: "Storage Key",
                    type: "text",
                    value: ""
                },
                value: {
                    label: "Value to Save",
                    type: "text",
                    value: ""
                }
            }
        },
        {
            type: "get_value",
            icon: play,
            name: "Get Value",
            description: "Get value from storage",
            config: {
                key: {
                    label: "Storage Key",
                    type: "text",
                    value: ""
                },
                variable_name: {
                    label: "Save To Variable",
                    type: "text",
                    value: "stored_val"
                }
            }
        }
    ]
    return (
        <Arr_map arr={arr} Title="STORAGE" />
    )
}

export default Storage