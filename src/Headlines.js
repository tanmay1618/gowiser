import React, { Component } from "react";
import headphones from './headphones.png';

export default class Headlines extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  headlineClicked=(time)=>{
      this.props.onHeadlineClick(time)
  }

  renderDate=()=>{
    if("date" in this.props.data.data){
      return( <h4>{this.props.data.data["date"]}</h4>)
    }else{
      return("")
    }
  }

  renderHeadlines=()=>{
    if("headlines" in this.props.data.data){
      return(
      this.props.data.data["headlines"].map((news)=>{
      return(
        <div class="news-item">
          <div class="news-headline">
          <h4>{news.headline}</h4>    
          <button class="circular-buttons"
          onClick={()=>this.headlineClicked(news.time)}>
            <img src={headphones} height={20} width={20}/></button>
          </div>
          <a href={news.link} target="_blank">Read More</a>
          </div>
        )})) 
    }else{
      return("")
    }

  }

  renderData=()=>{
    //console.log("rendering")
    return(<div>
      {this.renderDate()}
      {this.renderHeadlines()}
    </div>)
  }


  render() {
    //console.log("data",this.props.data)
    return (
      <div class="headlines-container">
          {this.props.data ? this.renderData() : ""}
      </div>
    );
  }
}
