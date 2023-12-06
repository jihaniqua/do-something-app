import { useState, useEffect } from "react";

function MyList() {
    const [listData, setListData] = useState(initialList);

    // initial list of activities
    const initialList = [
        {
            "activity": "Have an at-home spa day",
            "description": "Create a cozy space with cushions and soft lighting. Play your favorite spa playlist, wear your cozy loungewear, put on a couple of sheet masks, and enjoy a bottle of wine while you relax",
            "category": "relaxation"
        },
        {
            "activity": "Play some board games",
            "description": "Noting better than a classic game night. Welcome a break from the usual Netflix/Hulu circuit. Have everyone bring their game (and drink) of choice for a night of competitive fun.",
            "category": "entertainment"
        },
        {
            "activity": "Start learning a new language.",
            "description": "Get on the language learning apps with your friends, because accountability is key when you're trying to master a different language. And, you need people to practice chatting with.",
            "category": "education"
        }
    ]

    useEffect(() => {
        document.title = 'Suggest an activity';
    }, []);

    return (
        <div className="container">
            <h1>My List</h1>
            <p>Description</p>
        </div>
    );
}

export default MyList;
