import React from 'react';

function UpperbarBottom() {

  const sameTab = (url) => {
    window.open(url, '_self', 'noopener,noreferrer');
  };

  return (
    <div className='UpperbarBottom'>
      <span onClick={() => sameTab('http://127.0.0.1:3000/rankineskuprines')} >
        <a href='http://127.0.0.1:3000/rankineskuprines' target="_self" rel="noopener noreferrer">RANKINĖS IR KUPRINĖS</a></span>
      <span onClick={() => sameTab('http://127.0.0.1:3000/drabuziai')}>
        <a href='http://127.0.0.1:3000/drabuziai' target="_self" rel="noopener noreferrer">DRABUŽIAI</a></span>
      <span onClick={() => sameTab('http://127.0.0.1:3000/avalyne')}>
        <a href='http://127.0.0.1:3000/avalyne' target="_self" rel="noopener noreferrer">AVALYNĖ</a></span>
      <span onClick={() => sameTab('http://127.0.0.1:3000/kosmetika')}>
        <a href='http://127.0.0.1:3000/kosmetika' target="_self" rel="noopener noreferrer">KOSMETIKA</a></span>
    </div>
  )
}

export default UpperbarBottom;


*** 
    for(let i=0; i<basketElements.length; i++) {
      if (isNaN(basketElements[i]) === true) {
        console.log("hello");
      }
    }

****


  useEffect(() => {
    let basketElements = basketKeys.filter(item => item.length < 5);
    let wholeObjects = Object.entries(basketObject);
    let basketElements2 = wholeObjects.filter(item => isNaN(item[0]) == false);
    let basketArrayTest2 = basketElements2.filter(item => item[0].length < 5);
    for(let i=0; i<basketArrayTest2; i++) {
      let basketArrayTest2 = basketArrayTest2[i].shift();
    }
  }, []);

**** 
  let basketObject = { ...localStorage };
  let basketArray = [];
  let basketArrayTest = Object.values(basketObject);
  if (typeof JSON.parse(basketArrayTest[0]) === "string") {
    console.log("it is string");
  } else {
    console.log("it is NOT string");
  }
  let basketArrayTest5 = basketArrayTest.filter(item => typeof JSON.parse(item) === "object");
  console.log(basketArrayTest5);
  let basketKeys = Object.keys(basketObject);

****