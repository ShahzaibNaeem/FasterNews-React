import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'

export default class News extends Component {

  // ------------Setting Default Props and propTypes to ensure the correct Typeof (BugFree)
  static defaultProps={
   pageSize: 9,
  country:"us",
  category:"general"
  }
  static propTypes={
    pageSize:PropTypes.number,
    country:PropTypes.string,
    category:PropTypes.string
  }
  


  // --------------------All methods related to fetch nextBtn and prevBtn
    constructor(props){
        super(props)
        this.state={
            article:[],
            loading:true,
            page:1,
            totResults:38
          }
          document.title=`${this.props.category.charAt(0).toUpperCase()+this.props.category.slice(1)} - FasterNews`;
        }

        async updatePages(){
          this.setState({
            loading:true
           })
          let response= await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=66b1dab71ff4407d87b95ffb94df4091&page=${this.state.page}&pageSize=${this.props.pageSize}`);
          let data =await response.json()
          console.log(data);
         this.setState({
           article:data.articles,
           loading:false  
         })    
         }

      // ------ For fetching first page
      async componentDidMount(){
        //  let response= await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=66b1dab71ff4407d87b95ffb94df4091&page=1&pageSize=${this.props.pageSize}`);
    
        //  let data =await response.json()      //In Case of no updatePages We can run commented
        //  this.setState({
        //     article:data.articles,
        //     totResults:this.state.totResults,
        //     loading:false
        //  })
        this.updatePages();
       }

      // ------ For fetching Prev Page
       handlePrevClick=async()=>{
      //   this.setState({
      //     loading:true             //In Case of no updatePages We can run commented
      //    })
      //   let response= await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=66b1dab71ff4407d87b95ffb94df4091&page=${this.state.page-1}&pageSize=${this.props.pageSize}`);
      //   let data =await response.json()
      //  this.setState({
      //    article:data.articles,
      //    page:this.state.page-1,
      //    loading:false  
      //  })
       this.setState({
         page:this.state.page-1
       })
       this.updatePages();
       }

      // ------ For fetching Next Page
       handleNextClick= async()=>{
      //   if(this.state.page+1>Math.ceil(this.state.totResults/this.props.pageSize)){
              
      //   }                          
      //   else{                          //In Case of no updatePages We can run commented
      //     this.setState({                  
      //      loading:true
      //     })
      //   let response= await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=66b1dab71ff4407d87b95ffb94df4091&page=${this.state.page+1}&pageSize=${this.props.pageSize}`);      
      //    let data =await response.json()
      //   this.setState({
      //     article:data.articles,
      //     page:this.state.page+1,
      //     loading:false
      //   })
      //  }
      this.setState({
        page:this.state.page+1
      })
      this.updatePages();
       }

  render() {
    return (
      <>
      <div className="container my-4">
       {/* ------------------------Name Design----------------- */}
       <div id="nameContainer">
       <p id="nameStyle">by Shahzaib</p>
       </div>
      {/* ------------------PrimaryHeading+Spinner-------------- */}
       <div className='d-flex justify-content-center' id='primaryHeading'>
       <h1 className="mb-2 d-inline-block pr"> <strong>FasterNews</strong> - Top Headlines
        {this.state.loading&&<div className="spinner-border text-primary mx-2" role="status">
        <span className="visually-hidden">Loading...</span>
        </div>}
      </h1>
       </div>
       {/* ---------------------SecondayHeading-------------- */}
       <h2>{this.props.category.charAt(0).toUpperCase()+this.props.category.slice(1)}</h2>

         {/* ---------------------Itrating Items + Sending Props------------------- */}
        <div className="row justify-content-between">
        {!this.state.loading&&this.state.article.map((element)=>{
           return <div className="col-sm-4 my-2" key={element.url}>
        <NewsItem  title={element.title?element.title:""} description={element.description?element.description:""} imgUrl={element.urlToImage} newsUrl={element.url} author={element.author} publishedAt={element.publishedAt}
        source={element.source.name}
        />
        </div>
        })}
        </div>
        <hr/>

      </div>
       {/* -----------------------------Previous+Next Btns-------------------------------- */}
      <div className="container my-3 d-flex justify-content-between">
        <button type="button" disabled={this.state.page<=1?true:false} className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
        <button type="button" disabled={this.state.page+1>Math.ceil(this.state.totResults/this.props.pageSize)?true:false} className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
      </div>

      </>
    )
  }
}