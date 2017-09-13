import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

export default function bindRedux(selectorFunction, actions) {
  return connect(selectorFunction, (dispatch)=>({ actions: bindActionCreators(actions.creators, dispatch) }))
}
