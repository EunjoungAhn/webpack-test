//parcel은 구성옵션을 따로 설정 없이 자동으로 해줬지만,
//webpack의 경우에는 구성옵셥을 설정해줘야 한다.
//webpack은 노드js 환경에서 동작한다.

//노드js에서 쓰는 절대경로
const path = require('path');

module.exports ={
  //진입점 파일을 설정해야 하는데
  //parcel index.html 이였다면, webpack은
  //js파일을 진입점으로 쓴다.
  entry: './js/main.js',
  
  //결과물(번들)을 dist라는 폴더에 반환하는 설정이다.
  output:{
    // __dirname는 현재 파일이 있는 그 경로를 지칭하는 것이다.
    //dist란 폴더를 만들어준다.
   // path: path.resolve(__dirname, 'dist'),
    //filename: 'main.js',
    //기존에 만들어진 파일을 제거하고 다시 복사
    clean: true
  }
}