import React from 'react'
import classes from './HomeView.scss'
import { connect } from 'react-redux'
import { fromJS } from 'immutable'
import Dimensions from 'react-dimensions'

export class HomeView extends React.Component {

  render = () => {
    return (
      <div>
      </div>
      );
  }
}


const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
  dispatch
})

export default Dimensions()(connect(mapStateToProps, mapDispatchToProps)(HomeView))
