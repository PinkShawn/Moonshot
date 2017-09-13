import React, { Component } from 'react'
import styles from './overview.scss'

import { Pie } from 'react-chartjs-2'

export default class Overview extends Component {
	render() {
    let me = this
		let props = me.props
    let state = me.state

		return (
			<div className={styles.overview}>
        <h1 className={styles.header}>My Wallet</h1>
        <ul className={styles.topColumns}>
          <li>
            <h2>Available</h2>
            <label>
              <span>1,000,000</span>
              <span>PINK</span>
            </label>
            <label>
              <span>+1,250</span>
              <span>Pending</span>
            </label>
          </li>

          <li>
            <h2>Stakes</h2>
            <label>
              <span>553</span>
              <span>PINK</span>
            </label>
            <label>
              <span>15,128</span>
              <span>Given</span>
            </label>
          </li>

          <li>
            <h2>Total</h2>
            <label>
              <span>1,000,000</span>
              <span>PINK</span>
            </label>
            <label>
              <span>$75,810</span>
              <span>USD</span>
            </label>
          </li>
        </ul>
        <h2 className={styles.activityHeader}>Recent Activity</h2>
				<div className={styles.activityContent}>Yay</div>
			</div>
		)
	}
}
