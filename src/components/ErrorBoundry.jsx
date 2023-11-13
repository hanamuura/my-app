import react, {Component} from "react";

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            error: null,
            errorInfo: null,
        }
    }

    componentDidCatch(error, errorInfo) {
        console.log("error is here");
        this.setState({
            hasError: true,
            error, errorInfo
        })

    }

    render(){
        if(this.state.hasError) {

                return (
                <>
                    <p>no books</p>
                </>
            )
        }

        return this.props.children;
    }


}
