import Header from "~/components/Layout/components/Header";

function HeaderOnly({ children }) {
    return (
        <div>
            <Header></Header>
            {children}
        </div>

    );
}

export default HeaderOnly;