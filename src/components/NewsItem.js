import React from 'react'

export default function NewsItem(props) {
  
     let {title,description,imgUrl,newsUrl,author,publishedAt,source}=props;
    return (
      <>
        <div className="card" >
            {/* ------------------CardBadge */}
            <div className='d-flex justify-content-end'>
            <span className="position-absolute  badge rounded-pill bg-danger" >
                {source}
            </span>
            </div>
            {/* --------------------CardImage */}
            <img src={!imgUrl?"https://www.reuters.com/resizer/nJC1G4hFURzs0wx2CNKUcje8nv8=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/K7LLVCEQKZKFDDEC2HLZEJMVI4.jpg":imgUrl} className="card-img-top" alt="..."/>

            {/* ---------------------CardBody */}
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description?description:"The Description of this news can be seen by only by clicking the link down below"}</p>
                <p className="card-text"><small className="text-muted">{author?`By ${author}`:""} on {new Date(publishedAt).toUTCString()}</small></p>
                <a href={newsUrl} target="_blank" rel="noreferrer"  className="btn btn-sm btn-primary">Read More</a>
            </div>
        </div>
      </>
    )
  }
