module.exports = {
  //일일이 따로 작성하는 js를 자동으로 명시를 도와주는 기능
  presets:['@babel/preset-env'],
  //비동기 처리를 위한 설정
  plugins:[//2뎁스로 들어가있어서 2차원 배열이라고도 한다.
    ['@babel/plugin-transform-runtime']
  ]
}