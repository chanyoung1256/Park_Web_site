import '../styles/Search.css'; // CSS 파일을 import합니다.

import ChonCheon from '../assets/image/ChunCheon.png'
import OneJu from '../assets/image/OneJu.png'
import Gang from '../assets/image/Gang.png'
import WestSun from '../assets/image/WestSun.png'

import Taback from '../assets/image/TaBack.png'
import SockCHo from '../assets/image/SockCho.png'
import SamCheok from '../assets/image/SamCheok.png'
import HongCheon from '../assets/image/HongCheon.png'

import HoengSong from '../assets/image/HoengSong.png'
import YeongWol from '../assets/image/YeongWol.png'
import PyeongChang from '../assets/image/PyeongChang.png'
import JeongSeon from '../assets/image/JeongSeon.png'

import CheorWon from '../assets/image/CheorWon.png'
import HwaCheon from '../assets/image/HwaCheon.png'
import YangGu from '../assets/image/YangGu.png'
import InJe from '../assets/image/InJe.png'

import GoSung from '../assets/image/GoSung.png'
import YangYang from '../assets/image/YangYang.png' 

function Search() {
  return (
    <div>
      <h1> 여행하는 목적지 지역을 선택하시오 </h1>
      <hr/>
      <br/><br/>
      <br/><br/>
      

      <div className="search-container">
        <div className="search">  
          <div>
            <a href='https://www.chuncheon.go.kr'>
              <img src={ChonCheon} alt='춘천시로고' />
            </a>    
            <div className="result"> 춘천시 </div>
            <div className="contents1">  
              내용 추가
            </div>
          </div>
        </div>
        <div className="search">  
          <div>
            <a href='https://www.wonju.go.kr/www/index.do'>
              <img src={OneJu} alt='원주시로고' />
              </a>  
            <div className="result"> 원주시 </div>
            <div className="contents1">  
              내용 추가
            </div>
          </div>
        </div>
        <div className="search">  
          <div>
            <a href='https://www.gn.go.kr'>
              <img src={Gang} alt='강릉시로고' />    
            </a>
            <div className="result"> 강릉시 </div>
            <div className="contents1">  
              내용 추가
            </div>
          </div>
        </div>
        <div className="search">  
          <div>
            <a href='https://www.dh.go.kr/www/index.do'>
              <img src={WestSun} alt='동해시로고' />    
            </a>
            <div className="result"> 동해시 </div>
            <div className="contents1">  
              내용 추가
            </div>
          </div>
        </div>
      </div>
      {/* 새로운 줄 */}
      <div className="search-container">
        <div className="search">  
          <div>
            <a href='http://www.taebaek.go.kr/intro.jsp'>
              <img src={Taback} alt='태백시로고' />    
            </a>
            <div className="result"> 태백시 </div>
            <div className="contents1">  
              내용 추가
            </div>
          </div>
        </div>
        <div className="search">  
          <div>
            <a href='https://www.sokcho.go.kr/sc/portal'>
              <img src={SockCHo} alt='속초시로고' />    
            </a>
            <div className="result"> 속초시 </div>
            <div className="contents1">  
              내용 추가
            </div>
          </div>
        </div>
        <div className="search">  
          <div>
            <a href='https://www.samcheok.go.kr/main.web'>
              <img src={SamCheok} alt='삼척시로고' />    
            </a>    
            <div className="result"> 삼척시 </div>
            <div className="contents1">  
              내용 추가
            </div>
          </div>
        </div>
        <div className="search">  
          <div>
            <a href='https://www.hongcheon.go.kr/www/index.do'>
              <img src={HongCheon} alt='홍천군로고' />    
            </a>  
            <div className="result"> 홍천군 </div>
            <div className="contents1">  
              내용 추가
            </div>
          </div>
        </div>
      </div>
      {/* 새로운 줄 */}
      <div className="search-container">
        <div className="search">  
          <div>
            <a href='https://www.hsg.go.kr/common/intro/covidintro/main.html'>
              <img src={HoengSong} alt='횡성군로고' />    
            </a>  
            <div className="result"> 횡성군 </div>
            <div className="contents1">  
              내용 추가
            </div>
          </div>
        </div>
        <div className="search">  
          <div>
            <a href='https://www.yw.go.kr/www/index.do'>
              <img src={YeongWol} alt='영월군로고' />    
            </a>  
            <div className="result"> 영월군 </div>
            <div className="contents1">  
              내용 추가
            </div>
          </div>
        </div>
        <div className="search">  
          <div>
            <a href='https://www.pc.go.kr/portal'>
              <img src={PyeongChang} alt='평창군로고' />    
            </a>  
            <div className="result"> 평창군 </div>
            <div className="contents1">  
              내용 추가
            </div>
          </div>
        </div>
        <div className="search">  
          <div>
            <a href='https://www.jeongseon.go.kr'>
              <img src={JeongSeon} alt='정선군로고' />    
            </a>  
            <div className="result"> 정선군 </div>
            <div className="contents1">  
              내용 추가
            </div>
          </div>
        </div>
      </div>
      {/* 새로운 줄 */}
      <div className="search-container">
        <div className="search">  
          <div>
            <a href='https://www.cwg.go.kr'>
              <img src={CheorWon} alt='철원군로고' />    
            </a>  
            <div className="result"> 철원군 </div>
            <div className="contents1">  
              내용 추가
            </div>
          </div>
        </div>
        <div className="search">  
          <div>
            <a href='https://www.ihc.go.kr/www/index.do'>
              <img src={HwaCheon} alt='화천군로고' />    
            </a>
            <div className="result"> 화천군 </div>
            <div className="contents1">  
              내용 추가
            </div>
          </div>
        </div>
        <div className="search">  
          <div>
            <a href='https://www.yanggu.go.kr'>
              <img src={YangGu} alt='양구군로고' />    
            </a>           
            <div className="result"> 양구군 </div>
            <div className="contents1">  
              내용 추가
            </div>
          </div>
        </div>
        <div className="search">  
          <div>
            <a href='https://www.inje.go.kr/portal'>
              <img src={InJe} alt='인제군로고' />    
            </a>  
            <div className="result"> 인제군 </div>
            <div className="contents1">  
              내용 추가
            </div>
          </div>
        </div>
      </div>
      <div className="search-container">
        <div className="search">  
          <div>
            <a href='https://www.gwgs.go.kr'>
              <img src={GoSung} alt='고성군로고' />    
            </a>  
            <div className="result"> 고성군 </div>
            <div className="contents1">  
              내용 추가
            </div>
          </div>
        </div>
        <div className="search">  
          <div>
            <a href='https://www.yangyang.go.kr/gw/portal'>
              <img src={YangYang} alt='양양군로고' />    
            </a>  
            <div className="result"> 양양군 </div>
            <div className="contents1">  
              내용 추가
            </div>
          </div>
        </div>
      </div>
      <br/><br/>
      <br/><br/>
    </div>
    
  );
}

export default Search;
