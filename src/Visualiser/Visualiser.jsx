import React from "react";
import "./Visualiser.css";
import { MergeSort } from "../SortingAlgorithms/Merge-Sort";
import { bubbleSort } from "../SortingAlgorithms/Bubble-Sort";
import { getInsertionSortAnimation } from "../SortingAlgorithms/Insertion-Sort";

//Bar Generation Settings
const minGeneratedValue = 10;
const maxGeneratedValue = 800;
const arrayLength = 50;

//Animation Settings
const PRIMARY_COLOUR = "darkorange";
const SECONDARY_COLOUR = "deepskyblue";
const ANIMATION_SPEED = 15;

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
    const animations = bubbleSort(this.state.array);

    for (let x = 0; x < animations.length; x++) {

      const bars = document.getElementsByClassName("bar");
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
        setTimeout(() => {
          const [firstBarIndex, secondBarIndex] = animations[x - 1];
          const [fbNewHeight, sbNewHeight] = animations[x];
          const fbStyle = bars[firstBarIndex].style;
          const sbStyle = bars[secondBarIndex].style;
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

    for(let x = 0; x < animations.length; x++){

      const bars = document.getElementsByClassName("bar");
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
        setTimeout(() => {
          const [firstBarIndex, secondBarIndex] = animations[x - 1];
          const [fbNewHeight, sbNewHeight] = animations[x];
          const fbStyle = bars[firstBarIndex].style;
          const sbStyle = bars[secondBarIndex].style;
          fbStyle.height = `${fbNewHeight}px`;
          sbStyle.height = `${sbNewHeight}px`;
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
          <div className="btn">Quick Sort</div>
          <div className="btn">Merge Sort</div>
        </div>
      </div>
    );
  }
}
