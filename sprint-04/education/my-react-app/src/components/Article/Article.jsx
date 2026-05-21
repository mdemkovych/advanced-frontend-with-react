// Inline CSS styles
const wrapper = {
    display: 'inline-block',
    backgroundColor: '#FFF8E7',  /* Warm, light cream */
    color: '#333333',  /* Dark charcoal for good contrast */
    padding: '1.5rem',   /* breathing room around your text */
    lineHeight: '1.6',      /* comfortable line spacing */
    fontFamily: 'Georgia, serif'
}

export default function Article() {
    return (
        <>
            <div style={wrapper}>
                <h3>JSX Styles</h3>
                <p style={{fontStyle: 'Georgia, cursive'}}>This is my education article about JSX Styles</p>
            </div>
        </>
    )
}