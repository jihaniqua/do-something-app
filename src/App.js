// shared components
import Header from "./views/shared/Header";
import Footer from "./views/shared/Footer";

// page components
import Home from "./views/Home";
import Generate from "./views/Generate";
import Suggest from "./views/Suggest";
import MyList from "./views/MyList";

// dependencies
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="d-flex flex-column min-vh-100">
            <Header />
            <main>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/generate" element={<Generate />} />
                        <Route path="/suggest" element={<Suggest />} />
                        <Route path="/my-list" element={<MyList />} />
                    </Routes>
                </BrowserRouter>
            </main>
            <Footer />
        </div>
    );
}

export default App;
