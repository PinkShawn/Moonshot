const CLOSE = Symbol()
const MINIMIZE = Symbol()
const MAXIMIZE = Symbol()
const SET_PAGE = Symbol()

export default {
  CLOSE,
  MINIMIZE,
  MAXIMIZE,
  SET_PAGE,
  creators: {
    close: ()=>({ type: CLOSE }),
    minimize: ()=>({ type: MINIMIZE }),
    maximize: ()=>({ type: MAXIMIZE }),
    setPage: (pageName)=>({ type: SET_PAGE, pageName })
  }
}
