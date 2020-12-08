import React from 'react';

const singersList = [
  { id: 1, name: 'Boa', img: 'https://res.heraldm.com/content/image/2018/01/26/20180126000818_0.jpg' },
  { id: 2, name: 'Taemin', img: 'https://koreajoongangdaily.joins.com/data/photo/2020/09/07/2b2a0e5b-924a-4137-ae75-5d859a11f00a.jpg' },
  { id: 3, name: 'BTS', img: 'https://blog.kakaocdn.net/dn/b71v0O/btqEw3k68Hw/5kmSi0lE9zzOFaO9WN7K41/img.jpg' },
  { id: 4, name: 'KATTY PERRY', img: 'https://www.rollingstone.com/wp-content/uploads/2020/05/KatyPerry.jpg?resize=1800,1200&w=1800' },
  { id: 5, name: 'SIA', img: 'https://blog.kakaocdn.net/dn/k09It/btqB9ymZNZR/6dXnwW6cksaanlw0ZvrAXK/img.jpg' }
]

function Singers({ name, img }) {
  return (
    <div>
      <h1> 이번 페스티벌에 나올 사람은 {name}입니다</h1>
      <img src={img} alt={name} />
    </div>
  );
}

function App() {
  return (
    <div>
      {singersList.map(item => (
        <Singers id={item.id} name={item.name} img={item.img} />
      ))}
    </div>
  )
}

export default App;