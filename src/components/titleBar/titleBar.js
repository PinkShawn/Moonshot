import React, { Component } from 'react';
import styles from './titleBar.scss';

import {
	EntypoSquaredCross,
	EntypoSquaredMinus,
	EntypoSquaredPlus
} from 'react-entypo'

export default class TitleBar extends Component {
	static defaultProps = {
    title: '',
		close: ()=>{}
  }

	render() {
		let props = this.props
		return (
			<div className={styles.title}>
				<div className={styles.logo}></div>
				<div className={styles.titleLabel}>{props.title}</div>
				<ul className={styles.actionMenu}>
					<li onClick={props.minimize}>
						<span className={styles.label}>Minimize</span>
						<EntypoSquaredMinus />
					</li>
					<li onClick={props.maximize}>
						<span className={styles.label}>Maximize</span>
						<EntypoSquaredPlus />
					</li>
					<li onClick={props.close}>
						<span className={styles.label}>Close</span>
						<EntypoSquaredCross />
					</li>
				</ul>
			</div>
		)
	}
}
