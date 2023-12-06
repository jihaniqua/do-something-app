import { useState, useEffect } from "react";

function Suggest() {
    const [formData, setFormData] = useState({
        activity: '',
        category: '',
        description: ''
    });

    // get input form values
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }

    // redirect to My List to display data there 
    const handleSubmit = (event) => {
        // prevent form submission
        event.preventDefault();
        // convert data into string and store data in session storage
        sessionStorage.setItem('newActivity', JSON.stringify(formData));
        // send to My List page
        window.location.href = '/my-list';
    }

    // to check if form data is stored
    let storedFormData = sessionStorage.getItem('newActivity');
    if (storedFormData !== null) {
        console.log('Successful')
    } else {
        console.log('No data stored');
    }

    useEffect(() => {
        document.title = 'Suggest New Activity';
    }, []);

    return (
        <div className="container">
            <section className="col-lg-6">
                <h1>Suggest a new activity</h1>
                <p>Having a list of things to do is a great way to encourage yourself and your family to build these activity days in your calendar. <a href="/my-list">See what others have suggested.</a></p>
                <form onSubmit={handleSubmit}>
                    {/* Activity input field */}
                    <fieldset className="form-floating mb-3">
                        <input type="text" className="form-control" id="activity" placeholder="Activity" name="activity" value={formData.activity} onChange={handleChange}></input>
                        <label htmlFor="activity" className="form-label">Activity</label>
                    </fieldset>
                    {/* Category input field */}
                    <fieldset className="form-floating mb-3">
                        <input type="text" className="form-control" id="category" placeholder="Category" name="category" value={formData.category} onChange={handleChange}></input>
                        <label htmlFor="category" className="form-label">Category</label>
                    </fieldset>
                    {/* Description text field */}
                    <fieldset className="form-floating mb-3">
                        <input type="text" className="form-control" id="description" placeholder="Describe the activity" name="description" value={formData.description} onChange={handleChange} />
                        <label htmlFor="description" className="form-label">Description</label>
                    </fieldset>
                    <button type="submit" className="btn btn-dark">Submit</button>
                </form>
            </section>
        </div>
    )
}

export default Suggest;