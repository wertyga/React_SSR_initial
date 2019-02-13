const noFound = () => {
    return (
        <div className="not-found-page"
             style={{
                 width: '100vw',
                 height: '100vh',
                 display: 'flex',
                 alignItems: 'center',
                 zIndex: 100,
                 paddingTop: '10%',
                 flexDirection: 'column'}}>
            <h2>Page not found</h2>
            <h1>404 Error</h1>
        </div>
    );
};

export default noFound;