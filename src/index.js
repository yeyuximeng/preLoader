import Loader from './preLoader/preLoader'
import './style/loading.css'
import './style/preLoader.css'


let img = [
  "https://images.pexels.com/photos/596156/pexels-photo-596156.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/206280/pexels-photo-206280.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/207817/pexels-photo-207817.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/207145/pexels-photo-207145.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/365347/pexels-photo-365347.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb",
  "https://images.unsplash.com/photo-1517784312427-7ec83f3de5fd?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a7a1cb24e407ea0e5f420f5bf2eca5d0&auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1490633874781-1c63cc424610?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b51259a5ff31138ff0059b896e2a2af3&auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1498008018457-e4c2937641b2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=86dbb6b8b95fed864aece157c91f2123&auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1494524911179-6e6cb56f7ed6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d4b9730daa9cac20676b5bfd32cbd6b1&auto=format&fit=crop&w=634&q=80",
  "https://images.unsplash.com/photo-1505933112018-aae873439d01?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f1c8304a421757476a230740fd265af5&auto=format&fit=crop&w=1331&q=80"
];
new Loader(img,{
  loading:"loading",     //加载进度loading
  pro:"process",         //加载进度
  elem:"album",          //图片显示位置
  buttons:"btns",        //图片切换按钮
  isCirculation:true,    //是否循环播放

  autoPlay:true,         //是否自动播放
  interval: 3000,        //间隔时间
  direction: 'ordinal'   //播放方向（autoPlay为true时有效），可选值： 'reverse' 反序 || 'ordinal' 顺序
}).play();
