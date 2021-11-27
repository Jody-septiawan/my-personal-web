import { Container, Col, Row } from 'react-bootstrap';

import style from '../styles/home.module.css';

export default function Home() {
  return (
    <div className={style.container}>
      <div className={style.contentBox}>
        <img
          src="https://avatars.githubusercontent.com/u/44697757?v=4"
          alt="my-ig"
        />
        <span>🖐🏻</span>
        {/* <div>
          <input type="color" />
        </div> */}
      </div>
    </div>
  );
}
