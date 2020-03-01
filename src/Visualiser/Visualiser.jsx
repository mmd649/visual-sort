import React from "react";
import "./Visualiser.css";
//import { MergeSort } from "../SortingAlgorithms/Merge-Sort";
import { getBubbleSortAnimation } from "../SortingAlgorithms/Bubble-Sort";
import { getInsertionSortAnimation } from "../SortingAlgorithms/Insertion-Sort";
import { getQuickSortAnimation } from "../SortingAlgorithms/Quick-Sort";

//Bar Generation Settings
const minGeneratedValue = 10;
const maxGeneratedValue = 800;
const arrayLength = 50;

//Animation Settings
const PRIMARY_COLOUR = "darkorange";
const SECONDARY_COLOUR = "deepskyblue";
const ANIMATION_SPEED = 5;

export default class Visualiser extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: []
    };
  }

  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    const array = [];
    for (let x = 0; x < arrayLength; x++) {
      const randomNumer =
        Math.floor(
          Math.random() * (maxGeneratedValue - minGeneratedValue + 1)
        ) + minGeneratedValue;
      array.push(randomNumer);
    }
    this.setState({array});
  }

  /*
    ====================================
    Bubble Sort
    ====================================
   */
  bubbleSortAnimation() {
    const animations = getBubbleSortAnimation(this.state.array);
    const bars = document.getElementsByClassName("bar");

    for (let x = 0; x < animations.length; x++) {

      const colorChange = x % 3 !== 2;

      if(colorChange){

        const [firstBarIndex, secondBarIndex] = animations[x];
        const fbStyle = bars[firstBarIndex].style;
        const sbStyle = bars[secondBarIndex].style;
        
        const colour = x % 3 === 0 ? SECONDARY_COLOUR : PRIMARY_COLOUR;

        setTimeout(() => {
          fbStyle.backgroundColor = colour;
          sbStyle.backgroundColor = colour;
        }, x * ANIMATION_SPEED);

      } else {

        const [firstBarIndex, secondBarIndex] = animations[x - 1];
        const [fbNewHeight, sbNewHeight] = animations[x];
        const fbStyle = bars[firstBarIndex].style;
        const sbStyle = bars[secondBarIndex].style;

        setTimeout(() => {
          fbStyle.height = `${fbNewHeight}px`;
          sbStyle.height = `${sbNewHeight}px`;
        }, x * ANIMATION_SPEED);
      }

    }
  }

  /* 
    ======================================
    Insertion Sort
    ======================================
  */

  insertionSortAnimation(){

    const animations = getInsertionSortAnimation(this.state.array);
    const bars = document.getElementsByClassName("bar");

    for(let x = 0; x < animations.length; x++){

      if(animations[x][0] === 'initialComparison' || animations[x][0] === 'secondaryComparison'){

        const colour = animations[x][0] === 'initialComparison' ? SECONDARY_COLOUR : PRIMARY_COLOUR;
        const firstBarIndex = animations[x][1];
        const secondBarIndex = animations[x][2];

        const firstBarStyle = bars[firstBarIndex].style;
        const secondBarStyle = bars[secondBarIndex].style;

        setTimeout(() =>{

          firstBarStyle.backgroundColor = colour;
          secondBarStyle.backgroundColor = colour;

        }, x * ANIMATION_SPEED);

      } else if(animations[x][0] === 'swap') {
        
        const barIndex = animations[x][1];
        const barStyle = bars[barIndex].style;

        setTimeout(() =>{
          
          barStyle.height = `${animations[x][2]}px`;

        }, x * ANIMATION_SPEED);

      }
      
    }
  }

  /* 
    ======================================
    Quick Sort
    ======================================
  */

  quickSortAnimation(){

    const animations = getQuickSortAnimation(this.state.array);
    const bars = document.getElementsByClassName("bar");
    
    for(let x = 0; x < animations.length; x++){

      if(animations[x][0] === 'initialComparison' || animations[x][0] === 'secondaryComparison'){
        
        const colour = animations[x][0] === 'initialComparison' ? SECONDARY_COLOUR : PRIMARY_COLOUR;
        const firstBarIndex = animations[x][1];
        const secondBarIndex = animations[x][2];
        const firstBarStyle = bars[firstBarIndex].style;
        const secondBarStyle = bars[secondBarIndex].style;

        setTimeout(() => {

          firstBarStyle.backgroundColor = colour;
          secondBarStyle.backgroundColor = colour;

        }, x * ANIMATION_SPEED);

      } else if(animations[x][0] === 'swap'){

        const barIndex = animations[x][1];
        const barStyle = bars[barIndex].style;

        setTimeout(() =>{
          
          barStyle.height = `${animations[x][2]}px`;

        }, x * ANIMATION_SPEED);

      }

    }

  }

  render() {
    const { array } = this.state;
    return (
      <div className="main-container">
        <div className="bar-container">
          {array.map((value, index) => (
            <div
              className="bar"
              key={index}
              style={{ height: `${value}px` }}
            ></div>
          ))}
        </div>
        <div className="btn-container">
          <div className="btn" onClick={() => this.resetArray()}>Generate New Array</div>
          <div className="btn" onClick={() => this.bubbleSortAnimation()}>Bubble Sort</div>
          <div className="btn" onClick={() => this.insertionSortAnimation()}>Insertion Sort</div>
          <div className="btn" onClick={() => this.quickSortAnimation()}>Quick Sort</div>
          <div className="btn">Merge Sort</div>
        </div>
      </div>
    );
  }
}
