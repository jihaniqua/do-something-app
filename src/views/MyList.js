import { useEffect } from "react";

function MyList() {
    // get Suggest page form data from session storage
    const storedFormData = sessionStorage.getItem('newActivity');
    // if form data exists, parse data into an object
    const moreActivity = storedFormData ? [JSON.parse(storedFormData)] : [];

    // initial list of sample activities
    const sampleList = [
        {
            "id": 1,
            "activity": "Have an at-home spa day",
            "description": "Play relaxing music, wear your cozy loungewear, and put on a couple of sheet masks.",
            "category": "relaxation"
        },
        {
            "id": 2,
            "activity": "Play some board games",
            "description": "Have everyone bring their game (and drink) of choice for a night of competitive fun.",
            "category": "entertainment"
        },
        {
            "id": 3,
            "activity": "Start learning a new language.",
            "description": "Pick out a language to learn and download a language learning app on your phone.",
            "category": "education"
        }
    ]

    useEffect(() => {
        document.title = 'My List';
    }, []);

    return (
        <div className="container">
            <section className="col-lg-6 mb-4">
                <h1>My List</h1>
                <p>Stay curious and try new things to improve your memory, mood and motivation. Pick an activity from your saved list and start today!</p>
            </section>
            <section className="row">
                {/* sampleList data */}
                {sampleList.map((activity) => (
                    <div className="col-4 col-sm-12 mb-4">
                        <div className="card text-bg-light p-2" key={activity.id}>
                            <div className="card-body">
                                <h6 className="badge rounded-pill text-bg-secondary card-subtitle mb-3">{activity.category}</h6>
                                <h5 className="card-title">{activity.activity}</h5>
                                <p className="card-text">{activity.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
                {/* Suggest page form data */}
                {moreActivity.map((value, index) => (
                    <div className="col-4 col-sm-12 mb-4">
                        <div className="card text-bg-light p-2" key={index}>
                            <div className="card-body">
                                <h6 className="badge rounded-pill text-bg-secondary card-subtitle mb-3">{value.category.toLowerCase()}</h6>
                                <h5 className="card-title">{value.activity}</h5>
                                <p className="card-text">{value.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
}

export default MyList;
