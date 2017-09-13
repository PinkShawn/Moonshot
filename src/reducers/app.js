import actions from 'actions/app'

const app = (state = {
  title: 'PinkCoin',
  currentPage: 'overview'
}, action) => {
  switch (action.type) {
    case actions.CLOSE:
      require('electron').remote.app.quit()
      return state

    case actions.MINIMIZE:
      require('electron').remote.BrowserWindow.getFocusedWindow().minimize()
      return state

    case actions.MAXIMIZE:
      let win = require('electron').remote.BrowserWindow.getFocusedWindow()
    win.isMaximized
      win.isMaximized() ? win.unmaximize() : win.maximize()
      return state

    case actions.SET_PAGE:
      state = {...state}
      state.currentPage = action.pageName
      return state

    default:
      return state
  }
}

export default app
