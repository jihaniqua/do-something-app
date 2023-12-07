import { useEffect } from "react";

function Home() {
    useEffect(() => {
        document.title = 'Do Something';
    }, []);

    return (
        <div className="container">
            <section className="mb-4">
                <h1>Find a new activity to do with your friends</h1>
                <p>Fun things to do with your friends that are perfect to try any time of the year.</p>
            </section>
            <section className="list-group col-lg-3">
                <a href="/generate" className="list-group-item list-group-item-action list-group-item-light">Generate an activity</a>
                <a href="/suggest" className="list-group-item list-group-item-action list-group-item-light">Suggest an activity</a>
                <a href="/my-list" className="list-group-item list-group-item-action list-group-item-light">View your list</a>
            </section>
        </div>
    );
}

export default Home;
