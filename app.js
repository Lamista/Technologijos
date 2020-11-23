var styles = {
    container: { background: 'red' },
    greetingText: { color: 'green' }
};

class Component extends React.Component {
    render() {
        return (
            <div style={styles.container}>
                <p style={styles.greetingText}>Tekstas yra toks</p>
            </div>
        );
    }
}