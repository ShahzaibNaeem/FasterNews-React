import React,{useEffect,useState} from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'

export default function News(props) {

  // --------------------SetMethods
  const [article,setArticle]=useState([]);
  const [loading,setLoading]=useState(true);
  const [page,setPage]=useState(1);
  const [totResults,setTotResults]=useState(0);
  
 

   // -------------- fetching NextPage and FirstPage--------------
   useEffect(() => {   
     // ----------------To set Title
     document.title=`FasterNews - ${props.category.charAt(0).toUpperCase()+props.category.slice(1)}`;
        const updateNews=async()=>{
              props.setProgress(10);
              let response= await fetch(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`);
                let data =await response.json();
              props.setProgress(40);
               setArticle(data.articles);   
               setLoading(false);   
               setTotResults(data.totalResults)    
              props.setProgress(100);
             }
             updateNews()

      }, [])
      

       const fetchMoreData = async() => {
         let response= await fetch(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`);
         let data =await response.json()
         setPage(page+1);
        setArticle(article.concat(data.articles)); 
       }

  
    return (
      <>
      <div className="container my-4">
       {/* ------------------------Name Design----------------- */}
       <div id="nameContainer">
       <p id="nameStyle">by Shahzaib</p>
       </div>
      {/* ------------------Primary/Secondary Heading + Spinner-------------- */}
       <div className='d-flex justify-content-center' id='primaryHeading'>
       <h1 className="mb-2 d-inline-block pr"> <strong>FasterNews</strong> - Top Headlines
        {loading&&<div className="spinner-border text-primary mx-2" role="status">
        <span className="visually-hidden">Loading...</span>
        </div>}
      </h1>
       </div>
       <h2>{props.category.charAt(0).toUpperCase()+props.category.slice(1)}</h2>

         {/* ---------------------Itrating Items + Infinite Scroll------------------- */}
         <InfiniteScroll  style={{overflow:"hidden"}}
          dataLength={article.length}
          next={fetchMoreData}
          hasMore={article.length!==totResults}
          loader={<div className='d-flex justify-content-center my-2'>
          <div className="spinner-border text-primary " role="status">
                <span className="visually-hidden">Loading...</span>
                </div>
                </div>}  >

         <div className="container">
        <div className="row justify-content-between">
        {article.map((element)=>{
           return <div className="col-sm-4 my-2" key={element.url}>
        <NewsItem  title={element.title?element.title:""} description={element.description?element.description:""} imgUrl={element.urlToImage} newsUrl={element.url} author={element.author} publishedAt={element.publishedAt}
        source={element.source.name}
        />
        </div>
        })}
        </div>
        </div>

        </InfiniteScroll>
      </div>

      </>
    )
  }

// ------------Setting Default Props and propTypes to ensure the correct Typeof (BugFree)
  
News.defaultProps={
  pageSize: 9,
 country:"us",
 category:"general"
 }

News.propTypes={
   pageSize:PropTypes.number,
   country:PropTypes.string,
   category:PropTypes.string
 }
 