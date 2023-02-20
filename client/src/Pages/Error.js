import Header from "../Components/Layout/Header";
import { Link } from "react-router-dom"
function ErrorPage() {
    return (
        <>
        <Header/>
        <section className = "error">
        <main>
            <h1>An error has occured!</h1>
            <p>The requested page could not be loaded.</p>
            <Link class="nav-link" to ="/">Return home ⛰ ... </Link>
        </main></section>
        </>
    )
}    

export default ErrorPage;