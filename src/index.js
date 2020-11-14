import './scss/index.scss';
import {icon1} from '@/icons';

const $root = document.getElementById('app');

const circleColors = [
  '#D6D6D6',
  '#FFCD1A',
  '#FC6E1E',
  '#EE1448',
  '#52D749'
];

const bgColors = [
  {color: '#000', opacity: '0.4'},
  {color: '#EE2C41', opacity: '0.6'},
  {color: '#499C6C', opacity: '0.6'},
];

const directions = [
  {to: false, from: false},
  {to: true, from: false},
  {to: false, from: true},
  {to: true, from: true}
];
const imgs = [];
// for(let i = 0; i < 360; i++){
  circleColors.forEach(circleColor => {
    bgColors.forEach(bgColor => {
      directions.forEach(direction => {
        $root.insertAdjacentHTML('beforeend', `<img src="${icon1(
          90,
          direction.to,
          direction.from,
          circleColor,
          bgColor.color,
          bgColor.opacity
        )}" alt="">`)
      })
    })
  });
// }

console.log(imgs);

// const $root = document.getElementById('app');
// $root.insertAdjacentHTML('beforeend', `<img src="${icon1(333, true, true, 'red', '#EE2C41')}" alt="">`);
