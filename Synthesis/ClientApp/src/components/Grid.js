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
            <div className="Board">
                {this.state.news.map(item =>
                    <div className="Unit">
                        <div className="ImageContainer"><img className="Image" src={item.links && item.links.find(v => v.item1 == "image").item2}/></div>
                        <h3>{item.title}</h3>
                        <div>{item.summary}</div>
                        <div>{item.date}</div>
                        <div>Source: {item.links && item.links.find(v => v.item1 == "source").item2}</div>
                        <div>{item.links && item.links.map(link => <div><b>{link.item1}</b> {link.item2}</div>)}</div>
                    </div>)
                 }
            </div>
        );
    }
}

export default connect(null, { fetchNews })(Grid);


