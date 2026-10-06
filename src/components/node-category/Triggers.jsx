import play from '../../assets/play.png'
import Arr_map from '../Arr_map.jsx'
function Triggers() {

    const arr = [
        {
            type: "start",
            icon: play,
            name: "Manual Start",
            description: "Trigger Workflow Manually"
        },
        {
            type: "schedule",
            icon: play,
            name: "Schedule",
            description: "Trigger at a specific time"
        },
        {
            type: "interval",
            icon: play,
            name: "Interval",
            description: "Trigger after every interval"
        },
        {
            type: "webhook",
            icon: play,
            name: "Webhook",
            description: "Create a webhook"
        }
    ]

    return (
        <Arr_map arr={arr} Title="TRIGGERS" />
    )
}

export default Triggers