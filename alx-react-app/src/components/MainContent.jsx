// src/components/MainContent.jsx
function MainContent() {
    return (
        <main
            style={{
                padding: '20px',
                textAlign: 'center',
                backgroundColor: '#f9f9f9',
                borderRadius: '10px',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                marginTop: '20px'
            }}
        >
            <p style={{ fontSize: '20px', fontWeight: 'normal' }}>
                I love to visit New York, Paris, and Tokyo.
            </p>
        </main>
    );
}

export default MainContent;
