import React, {
  Component,
} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar
} from 'react-native';
import ScreenOne from './components/ScreenOne';
import ScreenTwo from './components/ScreenTwo';
import {
  Scene,
  Reducer,
  Router,
  Switch,
  Modal,
  Actions,
  ActionConst,
} from 'react-native-router-flux';

const reducerCreate = params => {
  const defaultReducer = new Reducer(params);
  return (state, action) => {
//    console.log('ACTION:', action);
    return defaultReducer(state, action);
  };
};

// define this based on the styles/dimensions you use
const statusBarOffset = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
const getSceneStyle = (/* NavigationSceneRendererProps */ props, computedProps) => {
  const style = {
    flex: 1,
    backgroundColor: '#fff',
    shadowColor: null,
    shadowOffset: null,
    shadowOpacity: null,
    shadowRadius: null,
    marginTop: computedProps.hideNavBar ? 0 : statusBarOffset,
    marginBottom: computedProps.hideTabBar ? 0 : 0

};
  return style;
};

class Example extends Component {
  render() {
    return (
      <Router createReducer={reducerCreate} getSceneStyle={getSceneStyle}>
        <Scene key="modal" component={Modal} >
          <Scene key="root"  hideTabBar>
            <Scene key="ScreenOne" component={ScreenOne} title="ScreenOne" />
            <Scene key="ScreenTwo" component={ScreenTwo} title="ScreenTwo" />
          </Scene>
        </Scene>
      </Router>
    );
  }
}

export default Example;
