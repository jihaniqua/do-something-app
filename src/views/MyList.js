import { useState, useEffect } from "react";

function MyList() {
    useEffect(() => {
        //
        // inital list of activities
        const initialActivity = [
            {
                "activity": "Have an at-home spa day",
                "type": "recreational",
                "participants": 4,
                "price": 100,
            },
            {
                "activity": "Have a friendly bake-off",
                "type": "cooking",
                "participants": 3,
                "price": 5
            },
            {
                "activity": "Plan a scavenger hunt",
                "type": "recreational",
                "participants": 10,
                "price": 50
            },
            {
                "activity": "Host a potluck dinner",
                "type": "social",
                "participants": 4,
                "price": 100
            },
        ]

        const [activities, setActivities] = useState(initialActivity);
    })

    return (
        <div className="container">
            <h1>My List</h1>
            <p>Description</p>
        </div>
    );
}

export default MyList;
