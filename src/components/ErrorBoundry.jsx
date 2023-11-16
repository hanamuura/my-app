import react, {Component} from "react";
import styled from "styled-components";

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            error: null,
            errorInfo: null,
        }
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
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
                <Container>
                    <span>no books</span>
                </Container>
            )
        }

        return this.props.children;
    }


}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 30px;
`