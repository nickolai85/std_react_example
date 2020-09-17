import React, { Component } from 'react';
import axios from "axios";
export default class Blog extends Component {
    constructor(){
            super();
            this.state ={
                  user_name: 'Vasile',
                  pageTitle: ''
            }
            this.blogItems = this.blogItems.bind(this);
            this.items = this.items.bind(this);
    }

    blogItems(){
        const url_temp_prefix = 'https://cors-anywhere.herokuapp.com/'; 
        const url = `${url_temp_prefix}https://frontdb-214a.restdb.io/rest/coll1`;
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
            //console.log('responsesd',response.data);
            this.setState({
                data : response.data
            }
        )
          })
        .catch(error => {
            console.log('error',error);
        });


        /* const items = {
            pageTitle: "Welcome to my Portfolyo!",
            data: [
                {title: "Quip" },
                {title: "Eventbrite" },
                {title: "Ministry Safe" },
                {title: "SwingAway" }
            ]
         
          }
        this.setState({
            pageTitle: items.pageTitle,
            data: items.data
        })
        */
    }


    items(){
       console.log('state data',this.state.data);
        return this.state.data.map(item =>{
             return <div>{item.title}</div> 
         })
 
        }

    componentDidMount(){
        this.blogItems();
    }
    
   render() {

    console.log(this.state);
     return (
    
        <div>
            <h1>
                {this.state.pageTitle}
            </h1>
            <h3>

                Hello {this.state.user_name}
            </h3>
            <div>
         
                {this.state.data != null ? this.items() : 'Loading'}
            </div>
        </div>
     );
   }
 }