import React, { Component } from 'react'
import fecha from 'fecha'
import Sherlock from './react-sherlock'

import './App.css'

class App extends Component {
  constructor () {
    super()

    this.state = {
      start: null,
      end: null
    }

    this.onStart = this.onStart.bind(this)
    this.onEnd = this.onEnd.bind(this)
  }

  onStart (start) {
    start = fecha.format(start, 'M/D/YY h:mm a')
    this.setState({ start })
  }

  onEnd (end) {
    end = fecha.format(end, 'M/D/YY h:mm a')
    this.setState({ end })
  }

  render() {
    const {
      start,
      end
    } = this.state

    console.log(start, end)

    return (
      <div className='App'>
        <h2 className='App-header'>react-sherlock</h2>
        <div className='App-intro'>
          <div className='example-list'>
            <div className='example'><b>Some ideas of events to try...</b></div>
            <div className='example'>February 24 at 3pm - 2pm March 3</div>
            <div className='example'>Vacation is in 4 weeks...</div>
            <div className='example'>Christmas is on December 25th.</div>
            <div className='example'>Homework 5 due next monday at 3pm</div>
            <div className='example'>Tuesday at 1pm until Saturday</div>
          </div>
          <Sherlock
            onStartDate={this.onStart}
            onEndDate={this.onEnd}
            placeholder='Type a date'
          />
          <div>{start && `Start Date: ${start}`}</div>
          <div>{end && `End Date: ${end}`}</div>
        </div>
      </div>
    )
  }
}

export default App
