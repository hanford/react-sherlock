import React, { Component } from 'react'
import sherlock from 'sherlockjs'

class Sherlock extends Component {
  constructor () {
    super()

    this.inputChange = this.inputChange.bind(this)
  }

  inputChange (event) {
    const {
      onStartDate,
      onEndDate
    } = this.props

    const parsed = sherlock.parse(event.target.value)

    if (parsed.startDate) {
      onStartDate(parsed.startDate)
    }

    if (parsed.endDate) {
      onEndDate(parsed.endDate)
    }
  }

  render () {
    const {
      onStartDate,
      onEndDate,
      ...otherProps
    } = this.props

    return (
      <input {...otherProps} onChange={this.inputChange} />
    )
  }
}

export default Sherlock
