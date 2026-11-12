function App() {
    return (
        <>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/comics">Midland</Link>
                <Link to="/about">Archi</Link>
                <Link to="/cotton">Cotton</Link>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/comics" element={<Midland />} />
                <Route path="/about" element={<Archi />} />
                <Route path="/cotton" element={<Cotton />} />
            </Routes>
        </>
    );
}

export default App;