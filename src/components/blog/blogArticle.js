import React, { Component } from 'react';
import axios from "axios";

class BlogArticle extends Component {
    constructor(props){
        super(props);
        this.state ={
            user_name: 'Vasile',
            pageTitle: ''
      }
        this.likeHendler = this.likeHendler.bind(this);
        this.article = this.article.bind(this);
    }
    article(){
            const {autor,content,title,likes,created_at} = this.state.data;
            console.log('likes',likes)
           return <div>
               <div>
                <h1>{title}</h1>
                <h3>{autor}</h3>
                <p>
                    {content}
                </p>
                <div>
                    {created_at}
                </div>
              </div>
              <div>
                  <div>
                    <button className="btn" onClick={this.likeHendler}>like</button>
                  </div>
                  <div>
                    {likes == 'undefined' ?  '0' : likes}
                  </div>
              </div>
            </div>
    }

    likeHendler(){
        
        const url_temp_prefix = 'https://cors-anywhere.herokuapp.com/';
        const url = `${url_temp_prefix}https://frontdb-214a.restdb.io/rest/blog/${this.props.match.params.article_id}`;
        const likes = this.state.data.likes != null ? this.state.data.likes : 0;
        console.log(likes);
        const like = likes +1;
        console.log('like',like)
        var jsondata = {"likes": like};

        var settings = {
            "async": true,
            "crossDomain": true,
            "headers": {
                "content-type": "application/json",
                "x-apikey": "c2768b4671611332237f9ea2dd5723248a2fc",
                "cache-control": "no-cache"
            },
            "processData": false,
        }        
        axios.put(url,jsondata,settings)
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
                data : response.data[0]
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