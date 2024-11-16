import React, { useEffect, useState, useCallback  } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

const News = ({ country = 'us', pageSize = 8, category = 'general' }) => {
   const [articles, setArticles] = useState([]);
   const [page, setpage] = useState(1);
   const [totalResults, settotalResults] = useState(0);
   const [error, setError] = useState(null); // Error state

   document.title = `NewsForYou - ${category}`; // mathi tab ma aaune name change gareko ho!
   
    
    const updateNews = useCallback(async () => {
        const url = `/api/v2/top-headlines?country=${country}&category=${category}&apiKey=67b64a15505c4f389d8968282e53e989&page=${page}&pageSize=${pageSize}`;
        try {
            // Fetch data from API
        let data = await fetch(url,{
            method: 'GET',
            headers: {
                'Accept': 'application/json', // Ensures the response is in JSON format
                'Content-Type': 'application/json' // Sets content-type to application/json
            }
        });
        
        // Handle if response is not ok (non-2xx status codes)
        if (!data.ok) {
            throw new Error(`Failed to fetch data, Status: ${data.status}`);
        }

        let parsedData = await data.json();
        // Ensure parsedData.articles exists before setting state
        if (parsedData && parsedData.articles) {
        setArticles(parsedData.articles);
        settotalResults(parsedData.totalResults);    
        }else{
            setError('No articles available.');
        }
    } catch (err) {
        console.error('Error fetching news:', err);
        setError('Error fetching news articles. Please try again later.');
    }
}, [country, category, pageSize]);


    useEffect( () => {
        updateNews ();
    }, [updateNews] );


  // Function for loading more data  
    const fetchMoreData = async() => {
        const url = `/api/v2/top-headlines?country=${country}&category=${category}&apiKey=67b64a15505c4f389d8968282e53e989&page=${page+1}&pageSize=${pageSize}`;
        setpage(page + 1);
        
        try {
        let data = await fetch(url);
        let parsedData = await data.json();

        if (parsedData && parsedData.articles) {
        setArticles(articles.concat(parsedData.articles));
        settotalResults(parsedData.totalResults);
    } else {
        setError('No additional articles available.');
    }
    } catch (err) {
        console.error('Error fetching more news:', err);
        setError('Error loading more articles.');
    }
};



        return (
            <>
                <h1 className='text-center' style={{ margin: '35px', marginTop: '90px' }}><strong>NewsForYou - Top Headlines</strong></h1>
                
                 {/* Display error if there is one */}
            {error && <div style={{ color: 'red', textAlign: 'center' }}>{error}</div>}
                 
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
                                <NewsItem title={element.title ? element.title.slice(0, 77) : ''} description={element.description ? element.description.slice(0, 77) : ''} imageurl={element.urlToImage}
                                    newsurl={element.url} author={element.author} date={element.publishedAt} />
                                {/* mathi ko .slice(0, 77) le 0 dekhi 77 oota characters samma ko title ra description dekhauxa. */}
                            </div>;
                        })};
                    </div>
                    </div>
                </InfiniteScroll>
            </>




        );
   
};

    News.propTypes = {
        // eslint-disable-next-line
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,

    };


export default News;
