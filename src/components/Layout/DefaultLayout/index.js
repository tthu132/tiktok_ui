import Header from "~/components/Layout/components/Header";
import Sidebar from "./Sidebar";

function DefaltLayout({ children }) {
    return (
        <div>
            <Header></Header>
            <div className="container">
                <Sidebar />
                <div className="content">{children}</div>
            </div>

        </div>
    );
}

export default DefaltLayout;