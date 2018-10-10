class Loader{

  //构造函数，定义默认配置即初始化一些数据
  constructor(imgList, options){
    this.defaults = {
      isCirculation:false,
      elem:'preLoader',
      each:null,
      all:null,
      loading:"loading", //加载进度loading
      pro:"process",     //加载进度
      showPlace:"album", //图片显示位置
      buttons:"btns",    //图片切换按钮
      autoPlay:false,
      interval: 1000 * 3,
      direction: 'ordinal'
    };

    this.options = Object.assign(this.defaults, options || {})
    this.imgList = imgList;
    this.len = imgList.length;
    this._init();
    this._load();
    //this.play();
  }

  //初始化，设置默认显示的图片
  _init () {
    const options = this.options;
    this.count = 0;
    this.imgPlace = document.querySelector('#' + options.showPlace + ' > img');
    this.btns =  document.querySelectorAll("#"+options.buttons+" .btn")
    this.loading = document.querySelector("#"+options.loading)
    this.pro = this.loading.querySelector("#"+options.pro)
    document.querySelector('#' +　options.elem + ' > img').src = this.imgList[0];
  }
  //预加载图片
  _load (){

    if(!this.options)return;

    //变量声明
    let imgList = this.imgList,
        options = this.options,
        count = this.count,
        loading = this.loading,
        pro = this.pro,
        len = this.len;

    let events = ['load','error']


    //根据图片地址循环预加载图片
    imgList.forEach((src, i) => {

      let imgObj = new Image();

      for (let event of events) {
        imgObj.addEventListener(event,() => {
          options.each && options.each(i,src);

          pro.innerHTML = Math.round(((count + 1) / len) * 100) + "%";

          if(count >= len-1){
            loading.style.display = 'none';
            options.all && options.all(len);
          }
          count++;
        });
      }

      imgObj.src = src;
    });
  }
  _hasClass (el,clazz) {
    if(el && typeof el === 'object'){
      for (let klass of el.classList) {
        if(klass === clazz){
          return true;
        }
      }
    }
  }
  //手动播放图片
  play (){
    let options = this.options,
        len = this.len,
        index = 0,
        imgList = this.imgList,
        imgPlace = this.imgPlace;
    if(options.autoPlay) {
      this.autoPlay(options, len, index, imgList, imgPlace)
    } else {
      this.manualPlay(options, len, index, imgList, imgPlace)
    }

  }
  manualPlay(options, len, index, imgList, imgPlace){
    this.btns.forEach((btn) => {
      btn.addEventListener("click",(e) => {
        let isCirculation = options.isCirculation
        if(this._hasClass(e.target || e.srcElement,'prev')){
          index = isCirculation ? ((--index<0?(len-1):index)%len) : (Math.max(0,--index));
        }else{
          index = isCirculation ? (++index>(len)?0:index%len) : (Math.min(len-1,++index));
        }
        imgPlace.src = imgList[index];
      });
    })
  }
  autoPlay(options, len, index, imgList, imgPlace){
    let isCirculation = options.isCirculation
    let interval = options.interval
    let intervalId = setInterval(() => {
      if(options.direction === 'ordinal'){
        index = isCirculation ? (++index>(len)?0:index%len) : (Math.min(len-1,++index));
      }else{
        index = isCirculation ? ((--index<0?(len-1):index)%len) : (Math.max(0,--index));
      }
      imgPlace.src = imgList[index];

      if(!isCirculation && (index === 0 || index === len)){
        clearInterval(intervalId)
      }
    }, interval)
  }

}

export default Loader
