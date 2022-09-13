import Header from "./Head";

export default function Layout({ children }) {
    return (
        <div className="main-layout">
            <Header />
            <div>
                {children}
            </div>
        </div>
    )
}