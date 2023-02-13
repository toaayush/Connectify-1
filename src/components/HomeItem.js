import React, {useState} from 'react'

const HomeItem = () => {
    const [mytext, setMytext] = useState("")

  fetch('./DummyFiles/1.txt')
  .then((r) => r.text())
  .then(text  => {
    setMytext(text) 
  }) 
  return (
    <div><div className="item">
    {mytext}
  </div></div>
  )
}

export default HomeItem