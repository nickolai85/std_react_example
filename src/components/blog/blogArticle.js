import React, { Component } from 'react';
import axios from "axios";

class BlogArticle extends Component {
    constructor(props){
        super(props);
        this.state ={
            user_name: 'Vasile',
            pageTitle: ''
      }
        this.article = this.article.bind(this);
    }
    article(){
            const {autor,content,title,created_at} = this.state.data[0];
           return <div>
                <h1>{title}</h1>
                <h3>{autor}</h3>
                <p>
                    {content}
                </p>
                <div>
                    {created_at}
                </div>
            </div>
    }
    getArticle(){
        const url_temp_prefix = 'https://cors-anywhere.herokuapp.com/';
        const query = `{"_id":"${this.props.match.params.article_id}"}`;
        const url = `${url_temp_prefix}https://frontdb-214a.restdb.io/rest/blog?q=${query}`;
         
        const data =   {
            "async": true,
            "crossDomain": true,
            "headers": {
            "content-type": "application/json",
            "x-apikey": "c2768b4671611332237f9ea2dd5723248a2fc",
            "cache-control": "no-cache"
          }};
        
        axios.get(url,data)
        .then(response => {
            console.log('responsesd',response.data);
            this.setState({
                data : response.data
            }
        )
          })
        .catch(error => {
            console.log('error',error);
        });
    }

    componentWillMount() {
        this.getArticle();
      }
    render() {
        console.log('this.state.data ',this.state.data)
        return (
            <div>
                {this.state.data != null ? this.article() : 'Loading'}
            </div>
        );
    }
}

export default BlogArticle;