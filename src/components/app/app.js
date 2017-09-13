import styles from './app.scss'

import React, { Component } from 'react'

import bindRedux from 'bindRedux'
import actionsApp from 'actions/app'
import pages from 'pages'

import TitleBar from 'components/titleBar'
import SideBar from 'components/sideBar'

@bindRedux((store)=>({
	title: store.app.title,
	currentPage: store.app.currentPage
}), actionsApp)
export default class App extends Component {
	render() {
		let props = this.props
		let actions = props.actions

		return (
			<div className={styles.app}>
				<TitleBar title={props.title} close={actions.close} minimize={actions.minimize} maximize={actions.maximize} />
				<div className={styles.container}>
					<div className={styles.sidebar}>
						<SideBar setPage={actions.setPage} pages={pages} currentPage={props.currentPage} />
					</div>
					<div className={styles.content}>
						{pages[props.currentPage].content}
					</div>
				</div>
			</div>
		)
	}
}
