import { Component } from "react";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    // if something errors out, this lifecycle will run
    componentDidCatch() {
        this.setState({hasError: true})
    }

    render() {
        if(this.state.hasError) {
            // return default meaningful state
            return <h1>Ooops. That is not good</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundary;