import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import {
  increment,
  decrement,
  incrementIfOdd,
  incrementAsync
} from '../store/counter/actions';
import { AppState } from '../store/types';
import parseImageAsync from '../store/image-parsing/actions';

function mapStateToProps(state: AppState) {
  return {
    counter: state.counter
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return bindActionCreators(
    {
      increment,
      decrement,
      incrementIfOdd,
      incrementAsync: parseImageAsync
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
