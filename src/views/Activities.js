import { useState, useEffect } from "react";

function Activities() {
    const [activityData, setActivityData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch('http://www.boredapi.com/api/activity');
            const data = await response.json();
            setActivityData(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        document.title = 'Generate Fun Activities';
        fetchData();
    }, []);

    return (
        <div className="container py-5 text-center">
            <h4 className="mb-3">You can... </h4>
            <section className="col-lg-6 m-auto align-items-center">
                <h1 className="activities mb-4">{activityData.activity} with {activityData.participants} of your friends for ${activityData.price === "$0" ? "free" : `${activityData.price}`}!</h1>
                <a href={activityData.link} className="mb-5">{activityData.link}</a>
                <span class="badge rounded-pill text-bg-primary">{activityData.type}</span>
                <button type="button" className="btn btn-primary w-100 alin" onClick={fetchData}>I'm still bored</button>
            </section>
        </div>
    )
}

export default Activities;