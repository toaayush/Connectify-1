import React, { useState, useEffect } from "react";
import "./Messages.css";
import InfiniteScroll from "react-infinite-scroll-component";

const Messages = (props) => {
  const { openmenu } = props;
  const [list, setList] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [num, setNum] = useState(12);

  const updateList = async () => {
    const url = "./DummyFiles/abc2.json";
    let data = await fetch(url);
    let parsedData = await data.json();
    setList(parsedData.articles.slice(0, 12));
    setTotalResults(parsedData.totalResults);
  };
  useEffect(() => {
    updateList();
    // eslint-disable-next-line
  }, []);
  const fetchMoreData = async () => {
    const url = "./DummyFiles/abc2.json";
    let data = await fetch(url);
    let parsedData = await data.json();
    setList(list.concat(parsedData.articles.slice(num, num + 12)));
    setTotalResults(parsedData.totalResults);
    setNum(num + 12);
  };
  return (
    <div>
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
                <div
                  className={openmenu ? "openmenu-message-item" : "messageitem"}
                  key={element.content.slice(0, 2)}
                >
                  <div className="friendphoto"></div>
                  <div className="messagecontent">
                    <div className="friendname">Ayush Raj</div>
                    {element.content}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default Messages;
