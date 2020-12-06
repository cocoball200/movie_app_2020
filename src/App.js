import React from 'react';
import ProTypes from 'prop-types';

function Mama({ name, picture }) {
  return (
    <div>
      <h2> Comming Soon {name}</h2>
      <img src={picture} alt={name} />
    </div>
  );
}

const singers = [
  {
    name: 'BoA',
    image: 'https://dimg.donga.com/wps/NEWS/IMAGE/2019/09/16/97419640.2.jpg'
  },
  {
    name: 'BTS',
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/0d/%E2%80%98LG_Q7_BTS_%EC%97%90%EB%94%94%EC%85%98%E2%80%99_%EC%98%88%EC%95%BD_%ED%8C%90%EB%A7%A4_%EC%8B%9C%EC%9E%91_%2842773472410%29_%28cropped%29.jpg'
  },
  {
    name: 'TAEMIN',
    image: 'https://koreajoongangdaily.joins.com/data/photo/2020/08/05/50212021-335a-4197-88f5-59c2c128dba7.jpg'
  }
];

function App() {
  return (
    <div>
      {singers.map(singer => (
        <Mama name={singer.name} picture={singer.image} />
      ))}
    </div>
  );
}
export default App;