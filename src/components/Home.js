import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import InfiniteScroll from "react-infinite-scroll-component";

const Home = (props) => {
  const { openmenu } = props;
  const [list, setList] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [num, setNum] = useState(4);

  const updateList = async () => {
    const url = "./DummyFiles/abc.json";
    let data = await fetch(url);
    let parsedData = await data.json();
    setList(parsedData.articles.slice(0, 4));
    setTotalResults(parsedData.totalResults);
    // console.log(list);
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
                <div className={openmenu?"openmenu-item":"item"} key={element.content.slice(0, 2)}>
                  {element.content}
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>

      <Link to='/connect' className={openmenu?"hide":"connect"}>Connect</Link>
    </div>
  );
};

export default Home;
