import React, { Component } from "react";

class Lifecycle extends Component {
    constructor(props) {
        super(props);
        console.log("constructor");
    }
    componentDidMount() {
        console.log("componentDidMount");
    }
    componentDidUpdate() {
        console.log("componentDidUpdate");
    }
    componentWillUnmount() {
        console.log("componentWillUnmount");
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate', nextProps);
        return nextProps.text !== this.props.text;
    }
    render() {
        console.log("render");
        return (
            <div className="lifecycles">
                <h3>LifeCycle Component</h3>
                {this.props.text}
            </div>
        )
    }
}
export default Lifecycle;