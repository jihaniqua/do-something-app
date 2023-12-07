import { useState, useEffect } from "react";

function Generate() {
    const [activityData, setActivityData] = useState([]);
    const [newLabel, setNewLabel] = useState("Let's go!");
    const [loading, setLoading] = useState(true);

    // button label options
    const labelOptions = ["Let's go!", "Go for it!", "I'm still bored", "Show me another", "Hmm... What else?"];

    const fetchData = async () => {
        try {
            // show loading message
            setLoading(true);

            // fetch api
            const response = await fetch('https://www.boredapi.com/api/activity');
            const data = await response.json();
            setActivityData(data);

            // randomize button label
            const randomize = labelOptions[Math.floor(Math.random() * labelOptions.length)]
            setNewLabel(randomize);

            // after fetching, hide loading message
            setLoading(false);
        } catch {
            console.error("Error fetching data");
            setLoading(false);
        }
    };

    useEffect(() => {
        document.title = 'Generate Fun Activities';
        fetchData();
    }, []);

    return (
        <div className="container">
            {loading ? (
                <p className="text-success fs-1">Loading...</p>
            ) : (
                <div>
                    <span className="badge rounded-pill text-bg-light fs-5 px-3 mb-4">{activityData.type}</span>
                    <h1 className="activities mb-5">{activityData.activity} with {activityData.participants} of your friends!</h1>
                    <button type="button" className="btn main-btn btn-dark p-3 w-100 fs-2" onClick={fetchData}>{newLabel}</button>
                </div>
            )}
        </div>
    )
}

export default Generate;