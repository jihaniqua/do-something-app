import { useState, useEffect } from "react";

function Generate() {
    const [activityData, setActivityData] = useState([]);
    const [newLabel, setNewLabel] = useState("Let's go!")

    // button label options
    const labelOptions = ["Let's go!", "Go for it!", "I'm still bored", "Show me another", "Hmm... What else?"];

    const fetchData = async () => {
        try {
            // fetch api
            const response = await fetch('http://www.boredapi.com/api/activity');
            const data = await response.json();
            setActivityData(data);

            // randomize button label
            const randomize = labelOptions[Math.floor(Math.random() * labelOptions.length)]
            setNewLabel(randomize);
        } catch {
            console.error("Error fetching data");
        }
    };

    useEffect(() => {
        document.title = 'Generate Fun Activities';
        fetchData();
    }, []);

    return (
        <div className="container align-items-center">
            <span className="badge rounded-pill text-bg-light fs-5 px-3 mb-4">{activityData.type}</span>
            <h1 className="activities mb-5">{activityData.activity} with {activityData.participants} of your friends!</h1>
            <button type="button" className="btn main-btn btn-dark p-3 w-100 fs-2" onClick={fetchData}>{newLabel}</button>
        </div>
    )
}

export default Generate;