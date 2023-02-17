import React, { useState, useEffect } from "react";
import "./Connect.css";
import InfiniteScroll from "react-infinite-scroll-component";

const Connect = (props) => {
    const {openmenu} = props;
  const [list, setList] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [num, setNum] = useState(4);

  const updateList = async () => {
    const url = "./DummyFiles/abc.json";
    let data = await fetch(url);
    let parsedData = await data.json();
    setList(parsedData.articles.slice(0, 4));
    setTotalResults(parsedData.totalResults);
  };
  useEffect(() => {
    updateList();
    // eslint-disable-next-line
  }, []);
  const fetchMoreData = async () => {
    const url = "./DummyFiles/abc.json";
    let data = await fetch(url);
    let parsedData = await data.json();
    setList(list.concat(parsedData.articles.slice(num, num + 4)));
    setTotalResults(parsedData.totalResults);
    setNum(num + 4);
  };
  return (
    <div className="homecontainer">
      <InfiniteScroll
        dataLength={list.length}
        next={fetchMoreData}
        hasMore={list.length !== totalResults}
        loader={"<Spinner />"}
      >
        <div className="container">
          <div className="row">
            {list.map((element) => {
              return (
                <div className={openmenu?"openmenu-connect-item":"connectitem"} key={element.content.slice(0, 2)}>
                  {element.content}
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </div>
  )
}

export default Connect