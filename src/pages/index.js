import React from 'react'
import {
  EntypoHome,
  EntypoPaperPlane,
  EntypoHeart,
  EntypoSwap,
  EntypoVCard,
  EntypoChat,
  EntypoTree,
} from 'react-entypo'

//import ElectronWebview from 'react-electron-webview'

import Overview from './overview'
import Stakes from './stakes'

export default {
  overview: {
    title: 'Overview',
    icon: EntypoHome,
    content: <Overview />
  },
  sendReceiveCoins: {
    title: 'Send / Receive',
    icon: EntypoPaperPlane,
    content: <h1>Send stuff</h1>
  },
  stakes: {
    title: 'Stakes & Donations',
    icon: EntypoHeart,
    content: <Stakes />
  },
  transactions: {
    title: 'Transactions',
    icon: EntypoSwap,
    content: <h1>History</h1>
  },
  addressBook: {
    title: 'Address Book',
    icon: EntypoVCard,
    content: <h1>Got Friends?</h1>
  },
  messages: {
    title: 'Messages',
    icon: EntypoChat,
    content: <h1>Yeah, you got friends</h1>
  },
  community: {
    title: 'Community',
    icon: EntypoTree,
    //dom-ready
    content: <h1>Hi</h1>
    /*
    // DO NOT ENABLE THIS OR @MIW WILL HUNT YOU DOWN!
    // Preserving for experimentation.
    content: <ElectronWebview style={{ height: '100%' }} onDomReady={function(){
      this.insertCSS(`
        .top { display: none }
        #page #page_contents { margin-top: 0; padding: 20px }
        .real_content { display: none }
      `)
      this.openDevTools()
    }} src="https://pinkarmy.slack.com/"></ElectronWebview>
    */
  },
}
