import play from '../../assets/play.png'
import Arr_map from '../Arr_map.jsx'
function Browser() {

    const arr = [
        {
            "icon": play,
            "name": "Open Website",
            "description": "Open the website with url"
        },
        {
            "icon": play,
            "name": "URL",
            "description": "Go the url"
        },
        {
            "icon": play,
            "name": "Click",
            "description": "Perform click operation"
        },
        {
            "icon": play,
            "name": "Text",
            "description": "Enter Text"
        },
        {
            "icon": play,
            "name": "Wait",
            "description": "Wait for a some time"
        },
        {
            "icon": play,
            "name": "Find Element",
            "description": "Find element on screen"
        },
        {
            "icon": play,
            "name": "Read text",
            "description": "Read text on screen"
        }
    ]
    return (
        <Arr_map arr={arr} Title="BROWSER" />
    )
}

export default Browser