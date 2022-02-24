//parcel은 구성옵션을 따로 설정 없이 자동으로 해줬지만,
//webpack의 경우에는 구성옵셥을 설정해줘야 한다.
//webpack은 노드js 환경에서 동작한다.

//노드js에서 쓰는 절대경로
const path = require('path');
//서버 설정
const HtmlPlugin = require('html-webpack-plugin');
//사진 자동 번들링 플러그인
const CopyPlugin = require('copy-webpack-plugin');

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
  },

  //번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정하는 옵션
  plugins: [
    new HtmlPlugin({
      template: './index.html'
    }),
    new CopyPlugin({
      //from 어디에 있는 폴더의 경로를 복사할 것이냐?
      // { } 배열이라는 것은 여러개의 경로를 입력 할 수 있다.
      patterns: [
        { from: 'static'}
      ]
    })
  ],

  devServer: {
    host: 'localhost'
  }

}