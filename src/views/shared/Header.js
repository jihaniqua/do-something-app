function Header() {
    return (
        <nav className="navbar navbar-expand-lg fixed-top p-4">
            <div className="container-fluid">
                <a href="/" className="navbar-brand d-flex">
                    <h1 className="m-0 align-self-center fs-4">Do Something</h1>
                </a>
                <button className="navbar-toggler light-bg-border" type="button" data-bs-toggle="collapse" data-bs-target="#globalNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="globalNav">
                    <ul className="navbar-nav ms-auto align-center">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/generate">Generate</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/suggest">Suggest</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/my-list">My List</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;