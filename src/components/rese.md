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