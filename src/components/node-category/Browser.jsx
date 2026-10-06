import play from '../../assets/play.png'
import Arr_map from '../Arr_map.jsx'
function Browser() {

    const arr = [
        {
            type: "openwebsite",
            icon: play,
            name: "Open Website",
            description: "Open the website with url"
        },
        {
            type: "url",
            icon: play,
            name: "URL",
            description: "Go the url"
        },
        {
            type: "click",
            icon: play,
            name: "Click",
            description: "Perform click operation"
        },
        {
            type: "text",
            icon: play,
            name: "Text",
            description: "Enter Text"
        },
        {
            type: "wait",
            icon: play,
            name: "Wait",
            description: "Wait for a some time"
        },
        {
            type: "find_element",
            icon: play,
            name: "Find Element",
            description: "Find element on screen"
        },
        {
            type: "read_text",
            icon: play,
            name: "Read text",
            description: "Read text on screen"
        }
    ]
    return (
        <Arr_map arr={arr} Title="BROWSER" />
    )
}

export default Browser