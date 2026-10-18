import play from '../../assets/play.png'
import Arr_map from '../Arr_map.jsx'
function Triggers() {

    const arr = [
        {
            type: "start",
            icon: play,
            name: "Manual Start",
            description: "Trigger Workflow Manually",
            config: {}
        },
        {
            type: "schedule",
            icon: play,
            name: "Schedule",
            description: "Trigger at a specific time",
            config: {
                frequency: {
                    label: "Frequency",
                    type: "dropdown",
                    options: ["Daily", "Weekly", "Monthly"],
                    value: "Daily"
                },
                time: {
                    label: "Time (e.g. 09:00)",
                    type: "text",
                    value: "09:00"
                }
            }
        },
        {
            type: "interval",
            icon: play,
            name: "Interval",
            description: "Trigger after every interval",
            config: {
                every: {
                    label: "Repeat Every",
                    type: "number",
                    value: 5
                },
                unit: {
                    label: "Time Unit",
                    type: "dropdown",
                    options: ["Seconds", "Minutes", "Hours"],
                    value: "Minutes"
                }
            }
        },
        {
            type: "webhook",
            icon: play,
            name: "Webhook",
            description: "Create a webhook",
            config: {
                method: {
                    label: "HTTP Method",
                    type: "dropdown",
                    options: ["POST", "GET"],
                    value: "POST"
                },
                path: {
                    label: "Webhook Path",
                    type: "text",
                    value: "/webhook/my-trigger"
                }
            }
        }
    ]

    return (
        <Arr_map arr={arr} Title="TRIGGERS" />
    )
}

export default Triggers