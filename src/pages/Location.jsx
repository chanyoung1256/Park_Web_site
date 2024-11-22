import React, { useEffect, useState, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import '../styles/Location.css';

function Location() {
  const [mapLoaded, setMapLoaded] = useState(false);
  const [map, setMap] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const freeParkingLots = useMemo(() =>[
    { name: '도농협 옆', lat: 37.8768, lng: 127.7234 },
    { name: '도농협 뒤', lat: 37.8773, lng: 127.7241 },
    { name: '평생정보교육관 옆', lat:  37.8757, lng: 127.7236 },
    { name: '계림탕', lat: 37.8757, lng: 127.7326 },
    { name: '외환은행뒤', lat: 37.8763, lng: 127.7341},
    { name: '남부막국수 별관', lat: 37.8692, lng: 127.7244 },
    { name: '후평2동사무소뒤-한신A', lat: 37.8776, lng: 127.7506 },
    { name: '별당막국수 옆', lat: 37.8749, lng: 127.7331 },
    { name: '후평3동사무소 뒤', lat: 37.8766, lng: 127.7540 },
    { name: '후평3단A-4단지A', lat: 37.8773, lng: 127.7537 },
    { name: '춘천중 정문(오리온제과)', lat: 37.8741, lng: 127.7188 },
    { name: '소양정비-오리온제과', lat: 37.8749, lng: 127.7182 },
    { name: '토우시장 뒤', lat: 37.8826, lng: 127.7472 },
    { name: '구)지성병원 건너', lat: 37.8900, lng: 127.7244 },
    { name: '한신아파트상가 앞', lat: 37.8740, lng: 127.7517 },
    { name: '시민회관 뒤', lat: 37.8842, lng: 127.7291 },
    { name: '소양동사-강원공업사', lat: 37.8825, lng: 127.7235 },
    { name: '시청-조운동', lat: 37.8806, lng: 127.7302 },
    { name: '구)은하예식장(메가시티)', lat: 37.8760, lng: 127.7352 },
    { name: '춘천시 농협', lat: 37.8815, lng: 127.7285 },
    { name: '남부시장노상', lat: 37.8708, lng: 127.7253 },
    { name: '안생약국', lat: 37.8815, lng: 127.7275 },
    { name: '이모집', lat: 37.8816, lng: 127.7275 },
    { name: '평생교육관', lat: 37.8756, lng: 127.7238 },
    { name: '농협마트', lat: 37.8770, lng: 127.7236 },
    { name: '현대자동차앞', lat: 37.8582, lng: 127.7412 },
    { name: '하늘평안교회(구 시온)', lat: 37.8566, lng: 127.7389 },
    { name: '강원일보', lat: 37.8820, lng: 127.7292 },
    // 새로운 주차장 데이터
    { name: '시청지상', lat: 37.8814, lng: 127.7299 },
    { name: '석사노외', lat: 37.8580, lng: 127.7407 },
    { name: '강촌노외', lat: 37.8139, lng: 127.6332 },
    { name: '약사노외', lat: 37.8753, lng: 127.7278 },
    { name: '춘천중학교뒤', lat: 37.8739, lng: 127.7205 },
    { name: '후평택지개발지구내 1', lat: 37.8757, lng: 127.7579 },
    { name: '후평택지개발지구내 2', lat: 37.8760, lng: 127.7579 },
    { name: '후평 노외', lat: 37.8726, lng: 127.7528 },
    { name: '석사택지개발지구내 1', lat: 37.8612, lng: 127.7420 },
    { name: '석사택지개발지구내 2', lat: 37.8583, lng: 127.7458 },
    { name: '일성아파트뒤', lat: 37.8669, lng: 127.7268 },
    { name: '퇴계 노외', lat: 37.8622, lng: 127.7255 },
    { name: '퇴계근린공원1', lat: 37.8618, lng: 127.7236 },
    { name: '퇴계근린공원2', lat: 37.8620, lng: 127.7248 },
    { name: 'MBC앞 노외', lat: 37.8748, lng: 127.7037 },
    { name: '팔호 노외', lat: 37.8756, lng: 127.7355 },
    { name: '소양 노외', lat: 37.8823, lng: 127.7261 },
    { name: '남부 노외', lat: 37.8703, lng: 127.7254 },
    { name: '소양댐주차장', lat: 37.9373, lng: 127.8014 },
    { name: '느치골제1', lat: 37.9473, lng: 127.8044 },
    { name: '느치골제2', lat: 37.9474, lng: 127.8062 },
    { name: '느치골제3', lat: 37.9458, lng: 127.8089 },
    { name: '소양댐정상', lat: 37.9477, lng: 127.8134 },
    { name: '효자동노외1', lat: 37.8718, lng: 127.7341 },
    { name: '효자동노외2', lat: 37.8747, lng: 127.7335 },
    { name: '싸이클경기장옆', lat: 37.8671, lng:  127.6921 },
    { name: '11토지 주차장1', lat: 37.8673, lng: 127.7237 },
    { name: '11토지 주차장2', lat: 37.8660, lng: 127.7226 },
    { name: '온의2지구 주차장2', lat: 37.8663, lng: 127.7211 },
    { name: '공지천노외', lat: 37.8740, lng: 127.7110 },
    { name: '요선 노외', lat: 37.8839, lng: 127.7260 },
    { name: '소양강주차장', lat: 37.8898, lng: 127.7208 },
    { name: '공지천 주차장', lat: 37.8752, lng: 127.7125 },
    { name: '삼천동 공영주차장', lat: 37.8706, lng: 127.7090 },
    { name: '거두리 공영주차장', lat: 37.8523, lng: 127.7519 },
    { name: '옥천지구 공영주차장', lat: 37.8821, lng: 127.7322 },
    { name: '철도하부공간(남춘천역)', lat: 37.8635, lng: 127.7249 },
    { name: '철도하부공간(정족고가)', lat: 37.8509, lng: 127.7336 },
    { name: '춘천초 뒤', lat: 37.8748, lng: 127.7231 },
    { name: '교동주차장', lat: 37.8795, lng: 127.7393 },
    { name: '낙원문화공원', lat: 37.8774, lng: 127.7233 },
    { name: '카풀주차장', lat: 37.8463, lng: 127.7561 },
    { name: '서부시장 뒤', lat: 37.8847, lng: 127.7243 },
    { name: '구)공무원아파트', lat: 37.8800, lng: 127.7453 },
    { name: '거두리 순복음교회 옆', lat: 37.8501, lng: 127.7554 },
    { name: '선거관리위원회', lat: 37.8927, lng: 127.7242 },
    { name: '우석새싹공원', lat: 37.8659, lng: 127.7516 },
    { name: '석사지구', lat: 37.8630, lng: 127.7484 },
    { name: '퇴계한숲', lat: 37.8571, lng: 127.7302 },
    { name: '파크푸르지오', lat: 37.8683, lng: 127.7083 },
    { name: '삼천지구', lat: 37.8681, lng: 127.7070 },
    { name: '춘천전력IT 문화복합산업단지', lat: 37.7667, lng: 127.6277 },
    { name: '문화예술회관', lat: 37.8732, lng: 127.7280 },
    { name: '교동초 앞', lat: 37.8794, lng: 127.7373 },
  ],[]);

  const paidParkingLots = useMemo(() => [
    // 유료 주차장 데이터
    { name: '춘천시청', lat: 37.8811, lng: 127.7295 },
    { name: '시청별관', lat: 37.8819, lng: 127.7307 },
    { name: '제일중앙', lat: 37.8772, lng: 127.7251 },
    { name: '동부시장', lat: 37.8769, lng: 127.7344 },
    { name: '석사근린공원', lat: 37.8574, lng: 127.7386 },
    { name: '낙원노외', lat: 37.8792, lng: 127.7253 },
    { name: '스카이워크', lat: 37.8933, lng: 127.7263 },
    { name: '풍물시장', lat: 37.8670, lng: 127.7190 },
    { name: '은하수거리', lat: 37.8788, lng: 127.7511 },
  ],[]);

  useEffect(() => {
    if (!mapLoaded) {
      const new_script = src => {
        return new Promise((resolve, reject) => {
          const script = document.createElement('script');
          script.src = src;
          script.addEventListener('load', () => {
            resolve();
          });
          script.addEventListener('error', e => {
            console.error('Script load error:', e);
            reject(e);
          });
          document.head.appendChild(script);
        });
      };

      const my_script = new_script('https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=1200a1b8713e1e6a9b3773822125b1e9');

      my_script
        .then(() => {
          console.log('script loaded!!!');
          const kakao = window['kakao'];
          kakao.maps.load(() => {
            const mapContainer = document.getElementById('map');
            const options = {
              center: new kakao.maps.LatLng(37.8825, 127.7386),
              level: 7
            };
            const map = new kakao.maps.Map(mapContainer, options);
            setMap(map);
            setMapLoaded(true);
          });
        })
        .catch(error => {
          console.error('Failed to load Kakao Map script:', error);
        });
    }
  }, [mapLoaded]);

  useEffect(() => {
    if (mapLoaded && map) {
      const kakao = window['kakao'];
      const addMarkers = (parkingLots, markerImageSrc) => {
        parkingLots.forEach(lot => {
          const markerPosition = new kakao.maps.LatLng(lot.lat, lot.lng);
          const markerImage = new kakao.maps.MarkerImage(
            markerImageSrc,
            new kakao.maps.Size(24, 35)
          );
          const marker = new kakao.maps.Marker({
            position: markerPosition,
            image: markerImage
          });
          const infowindow = new kakao.maps.InfoWindow({
            content: `<div style="padding:5px;">${lot.name}</div>`
          });
          kakao.maps.event.addListener(marker, 'mouseover', () => infowindow.open(map, marker));
          kakao.maps.event.addListener(marker, 'mouseout', () => infowindow.close());
          marker.setMap(map);
        });
      };

      const freeMarkerImageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png'; // URL for blue marker
      const paidMarkerImageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png'; // URL for red marker

      addMarkers(freeParkingLots, freeMarkerImageSrc);
      addMarkers(paidParkingLots, paidMarkerImageSrc);
    }
  }, [mapLoaded, map, freeParkingLots, paidParkingLots]);

  const handleSearch = () => {
    const searchUrl = `https://map.kakao.com/link/search/${searchTerm}`;
    window.open(searchUrl, '_blank');
  };

  return (
    <div className='back-ground'>
      <div className='map-header'>
        <h1> 지도 검색 </h1>
        <hr/>
        <br/><br/><br/>
        <div className="search-container">
          <input
            type='text'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder='검색어를 입력하세요'
            className="search-input"
          />
          <button onClick={handleSearch} className="search-button">
            <span>검색</span>
          </button>
        </div>
        <br/><br/><br/><br/><br/><br/>
        <div id="map" className="map">
          <Helmet>
            <meta
              http-equiv="Content-Security-Policy"
              content="default-src 'self' 'unsafe-inline' https://dapi.kakao.com http://*.daumcdn.net; script-src 'self' 'unsafe-inline' https://dapi.kakao.com http://*.daumcdn.net; img-src 'self' 'unsafe-inline' https://dapi.kakao.com http://*.daumcdn.net;"
            />
            <meta
              http-equiv="X-Content-Security-Policy"
              content="default-src 'self' 'unsafe-inline' https://dapi.kakao.com http://*.daumcdn.net; script-src 'self' 'unsafe-inline' https://dapi.kakao.com http://*.daumcdn.net; img-src 'self' 'unsafe-inline' https://dapi.kakao.com http://*.daumcdn.net;"
            />
          </Helmet>
        </div>
      </div>
    </div>
  );
}

export default Location;