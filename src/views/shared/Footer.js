function Footer() {
    return (
        <footer>
            <div className="container-fluid d-flex flex-column flex-sm-row justify-content-between px-5 p-4">
                <div className="d-flex justify-content-center align-items-center gap-4">
                    <p>&copy; Jihan Duerme 2023</p>
                    <p>COMP2112 - Assignment 2</p>
                </div>
                <div className="d-flex list-unstyled justify-content-center align-items-center gap-4">
                    <a href="https://github.com/jihaniqua>">
                        <i className="bi bi-github"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;