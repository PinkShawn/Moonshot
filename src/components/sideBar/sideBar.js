import React, { Component } from 'react'
import styles from './sideBar.scss'

import {
  EntypoMenu
} from 'react-entypo'

let dragging = false;

export default class Menu extends Component {
  constructor(props) {
    super(props)

    this.state = {
      minimized: false
    }
  }

  render() {
    let me = this;
    let state = me.state;

    let props = this.props
    let items = []

    for(let page in props.pages) {
      let data = props.pages[page]

      let isCurrentPage = props.currentPage === page

      items.push(
        <li className={isCurrentPage ? styles.currentPage : null} key={page}
            onMouseMove={()=>(dragging === true && props.setPage(page))}
            onMouseDown={()=>props.setPage(page)}>
          <span className={styles.iconContainer}>{<data.icon />}</span>
          <span className={styles.labels}>{data.title}</span>
          {isCurrentPage ? <svg className={styles.arrow} version="1.1" viewBox="0 0 6 20">
            <path fill="#ff7aac" id="arrow" d="M0,0 0,20 00,10 z">
              <animate attributeName="d" begin="0s" dur="0.2s" to="M0,0 0,20 6,10 z" fill="freeze" />
              {/*<animate ref={(ref)=>(me.arrow_in=ref)} attributeName="d" begin="indefinite" dur="0.2s" to="M0,0 0,20 10,10 z" fill="freeze" />*/}
              {/*<animate ref={(ref)=>(me.arrow_in=ref)} attributeName="d" begin="indefinite" dur="0.2s" to="M0,0 0,20 10,10 z" fill="freeze" />*/}
            </path>
          </svg> : null}
        </li>
      )
    }

    return (
      <div className={state.minimized ? styles.sideBarSmall : styles.sideBar}
          onMouseDown={()=>(dragging=true)}
          onMouseLeave={()=>(dragging=false)}
          onMouseUp={()=>(dragging=false)}>
        <div className={styles.collapse} onClick={()=>me.setState({ minimized: !state.minimized })}>
          <EntypoMenu />
        </div>
        <ul className={styles.menu}>
          {items}
        </ul>
      </div>
    )
  }
}
