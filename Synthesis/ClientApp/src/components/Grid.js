import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNews } from '../actions/newsActions';

class Grid extends Component {
    constructor() {
        super();
        this.state = {
            news: ['a', 'b']
        };
    }

    componentDidMount(){
        fetch("https://localhost:44339/api/News")
            .then(response => response.json())
            .then(data => this.setState({ news: data }));
    }

    render() {
        console.log(this.state);
        return(
            <div>
                {this.state.news.map(item => <p>{item}</p>)}
            </div>
        );
    }
}

export default connect(null, { fetchNews })(Grid);


