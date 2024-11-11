import React, { useEffect, useState, useCallback  } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props)=> {
   const [articles, setArticles] = useState([])
//    const [loading, setloading] = useState(true)
   const [page, setpage] = useState(1)
   const [totalResults, settotalResults] = useState(0)
   document.title = `NewsForYou - ${props.category}`; // mathi tab ma aaune name change gareko ho!
   
    
    const updateNews = useCallback(async () => {
        // props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=67b64a15505c4f389d8968282e53e989&page=${page}&pageSize=${props.pageSize}`;
        // setloading(true)
        let data = await fetch(url);
        // props.setProgress(30);
        let parsedData = await data.json();
        // props.setProgress(70);
        console.log(parsedData);
        setArticles(parsedData.articles)
        settotalResults(parsedData.totalResults)
        // setloading(false)
        // props.setProgress(100);
    }, [props.country, props.category, props.pageSize]);


    useEffect( () => {
        updateNews ();
    }, [updateNews] )

    // const handlePrevClick = async () => {
    //     setpage(page - 1);
    //     updateNews();
    // }

    // const handleNextClick = async () => {
    //     setpage(page + 1 );
    //     updateNews();
    // }

    const fetchMoreData = async() => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=67b64a15505c4f389d8968282e53e989&page=${page+1}&pageSize=${props.pageSize}`;
        setpage(page + 1)
        // setloading(true);
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        setArticles(articles.concat(parsedData.articles))
        settotalResults(parsedData.totalResults)
    }
        return (
            <>
                <h1 className='text-center' style={{ margin: '35px', marginTop: "90px" }}><strong>NewsForYou - Top Headlines</strong></h1>
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Spinner/>}
                >
                    <div className ="container" >
                    <div className='row'>
                        {articles.map((element) => {  
                            return <div className='col-md-4 my-3' key={element.url}>
                                <NewsItem title={element.title ? element.title.slice(0, 77) : ""} description={element.description ? element.description.slice(0, 77) : ""} imageurl={element.urlToImage}
                                    newsurl={element.url} author={element.author} date={element.publishedAt} />
                                {/* mathi ko .slice(0, 77) le 0 dekhi 77 oota characters samma ko title ra description dekhauxa. */}
                            </div>
                        })}
                    </div>
                    </div>
                </InfiniteScroll>
            </>




        )
   
}


News.propTypes = {
    // eslint-disable-next-line  
        country: 'us',
        pageSize: 8,
        category: 'general',

    }

    News.propTypes = {
        // eslint-disable-next-line
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,

    }


export default News
