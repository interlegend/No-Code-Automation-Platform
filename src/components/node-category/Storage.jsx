import play from '../../assets/play.png'
import Arr_map from '../Arr_map.jsx'
function Storage() {

    const arr = [
        {
            "icon": play,
            "name": "Save Value",
            "description": "Store The value"
        },
        {
            "icon": play,
            "name": "Get Value",
            "description": "Get value from storage"
        }
    ]
    return (
        <Arr_map arr={arr} Title="STORAGE" />
    )
}

export default Storage