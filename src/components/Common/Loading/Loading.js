import React, {Component} from 'react'
import './index.css'
import {loadingSpinner1} from '../../../assets/images'

class LoadingSipinnerContainer extends Component {
  render() {
    return (
      <div className={'loading-container'}>
        <img src={loadingSpinner1} alt={'loading spinner'} />
      </div>
    );
  }
}


export default LoadingSipinnerContainer;