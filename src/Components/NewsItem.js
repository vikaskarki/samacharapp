import React  from 'react'

const NewsItem = (props) => {
        let {title, description, imageurl, newsurl, author, date} = props;
        return (
            <div>
                <div className="card" >
                    <img src={!imageurl?"https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png":imageurl}/>
                        <div className="card-body">
                            <h5 className="card-title">{title}...</h5>
                            <p className="card-text">{description}...</p>
                            <a href={newsurl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                            <p className="card-text"><small className="text-body-secondary">By {!author?"unknown":author} on {new Date(date).toGMTString()}</small></p>
                            {/* target="_blank" le news card ma read more click garda arko page ma news khulxa. */}
                            {/* here newsurl is a js variable tei bhayera href bhitra pani curly brackets bhitra newsurl lai rakheko */}
                        </div>
                </div>
            </div>
        )
    
}

export default NewsItem
