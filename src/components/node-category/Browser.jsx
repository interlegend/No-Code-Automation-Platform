import play from '../../assets/play.png'
import Arr_map from '../Arr_map.jsx'
function Browser() {

    const arr = [
        {
            type: "openwebsite",
            icon: play,
            name: "Open Website",
            description: "Open the website with url",
            config: {
                url: {
                    label: "Website URL",
                    type: "text",
                    value: ""
                }
            }
        },
        {
            type: "click",
            icon: play,
            name: "Click",
            description: "Perform click operation",
            config: {
                targetelement: {
                    label: "Element Selector",
                    type: "text",
                    value: ""
                }
            }
        },
        {
            type: "text",
            icon: play,
            name: "Text",
            description: "Enter Text",
            config: {
                targetelement: {
                    label: "Element Selector",
                    type: "text",
                    value: ""
                },
                text: {
                    label: "Text to Enter",
                    type: "text",
                    value: ""
                }
            }
        },
        {
            type: "wait",
            icon: play,
            name: "Wait",
            description: "Wait for a some time",
            config: {
                timeout: {
                    label: "Timeout (ms)",
                    type: "number",
                    value: 1000
                }
            }
        },
        {
            type: "find_element",
            icon: play,
            name: "Find Element",
            description: "Find element on screen",
            config: {
                targetelement: {
                    label: "Element Selector",
                    type: "text",
                    value: ""
                }
            }
        },
        {
            type: "read_text",
            icon: play,
            name: "Read text",
            description: "Read text on screen",
            config: {
                targetelement: {
                    label: "Element Selector",
                    type: "text",
                    value: ""
                },
                variable_name: {
                    label: "Save Result As Variable",
                    type: "text",
                    value: "extracted_text"
                }
            }
        }
    ]
    return (
        <Arr_map arr={arr} Title="BROWSER" />

    )
}

export default Browser