import React, {useState, useEffect} from 'react'
import '../styles/Home.css';
import Login_icon from '../assets/image/Login.png';
import Search_icon from '../assets/image/Search.png';
import Suggesrtions_icon from '../assets/image/Suggestions.png';
import Map_icon from '../assets/image/map.png';

import parking1 from '../assets/image/parking1.png';
import parking2 from '../assets/image/parking2.png';
import parking3 from '../assets/image/parking3.png';
import parking4 from '../assets/image/parking4.png';
import parking5 from '../assets/image/parking5.png';

import title1 from '../assets/image/title1.png'

import { useNavigate } from 'react-router-dom';



function Home() {
  const [imageIndex, setImageIndex] = useState(0);
  const images = [
    parking1,
    parking2,
    parking3,
    parking4,
    parking5
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 5000);
  
    return () => clearInterval(interval);
  }, [images.length]);

  const backgroundImageStyle = {
    width: '100%',
    height: '720px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundImage: `linear-gradient(
      rgba(255, 255, 255, 0.5), 
      rgba(255, 255, 255, 0.5)
    ), url("${images[imageIndex]}")`
  }

  const navigate = useNavigate();
  
  const handleMoreLoginClick = () => {
    navigate('/Login');
  };
  const handleMoreSearchClick = () => {
    navigate('/Search');
  };
  const handleMoreLocationClick = () => {
    navigate('/Location');
  };
  const handleMoreInquiryClick = () => {
    navigate('/Inquiry');
  }

  return (
    <div className='Wrap'>
      <div className="intro_bg" style={backgroundImageStyle}>
        <div className='header' id='link_header'>
          <div className='searchArea'>
            <form>
              <input type='search' placeholder='search' />
            </form>
            <span> 검색 </span>
          </div>
          <ul className="nav">
            <li><a href="#link_header"> HOME </a></li>
            <li><a href="#link_main_text0"> ABOUT </a></li>
            <li><a href="#link_main_service"> SERVICE </a></li>
            <li><a href="#link_main_contact"> CONTACT </a></li>
          </ul>
        </div>
      <header/>
        <div className="intro_text">
          <img src={title1} alt=''/>
          <div className="title2"> 관광지 주차장 위치 정보 웹사이트 </div>
        </div>
      </div>
      <ul className="amount">
        <li>
          <div>
            <div className="contents1"> 등록된 여행 광광지 </div>
            <div className="result"> 273 </div>
          </div>
        </li>
        <li>
          <div>
            <div className="contents1"> 등록된 공용주차장 </div>
            <div className="result"> 1000+ </div>    
          </div>
        </li>
        <li>
          <div>
            <div className="contents1"> 휴게소 </div>
            <div className="result"> 100+ </div>    
          </div>
        </li>
        <li>
          <div>
            <div className="contents1"> 방문객 </div>
              <div className="result"> 30000 </div>    
          </div>
        </li>
      </ul>
      <div className="main_text" id="link_main_text0">
        <h1> ABOUT </h1>
          <div className="contents1"> 
            강원특별자치도
          </div>
          <ul className="icons">
          <li>
            <div className="icon_img"> 
              <img src={Login_icon} width="125px" height="125px" alt="" />      
            </div>
            <div className="contents1_bold">
              로그인
            </div>
            <div className="contents2">
              로그인 서비스
            </div>
            <div className="more" onClick={handleMoreLoginClick}>
              MORE
            </div>
          </li>
          <li>
            <div className="icon_img"> 
              <img src={Suggesrtions_icon} width="125px" height="125px" alt="" />
            </div>
            <div className="contents1_bold">
              강원특별자치도
            </div>
            <div className="contents2">
              관광지 정보
            </div>
            <div className="more" onClick={handleMoreSearchClick}>
              MORE
            </div>
          </li>
          <li>
            <div className="icon_img"> 
              <img src={Search_icon} width="125px" height="125px" alt="" />
            </div>
            <div className="contents1_bold">
              주차장
            </div>
            <div className="contents2">
              위치 지도
            </div>
            <div className="more" onClick={handleMoreLocationClick}>{/* onClick */} 
              MORE
            </div>
          </li>
        </ul>
      </div>
      <div className="main_text1" id="link_main_service">
        <h1> SERVICE </h1>
        <div className="contents1">
          관광지 추천
          <div className="service">
            <div className="Tourism_photo">
              <a href='https://state.gwd.go.kr/portal'>
                <img src={Map_icon} alt='' />
              </a>
            </div>
            <div className="contents2">
              <h2> 강원특별자치도 지도 </h2>
              이사진은 강원특별자치도 지도야 이미지를 클릭해줘
            </div>
          </div>
        </div>
      </div>
      <div className="main_text2" id="link_main_contact">
        <ul>
          <li>
            <div>
              <h1> CONTACT </h1>
            </div>
            <div>
              웹사이트 에서 주차장 등록 신청하거나, 건의사항을 알려주세요
            </div>
            <div className="more2" onClick={handleMoreInquiryClick}>
              더알아보기 
            </div>
          </li>
          <li></li>
        </ul>
      </div>
      <div className="footer">
        <div> 웹프로그래밍 프로젝트 </div>
        <div>
          개발자. 김찬영 <br />
          학과. 빅데이터 <br />
          학번. 20235147 <br />
          전화번호. 010-6333-1256
        </div>
      </div>
    </div>
  )
}

export default Home