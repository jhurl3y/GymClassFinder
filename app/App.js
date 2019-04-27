import React, {Component} from 'react';
import MainView from './views/MainView';
import SplashView from './views/SplashView';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
        // <MainView> </MainView>
        <SplashView> </SplashView>
    );
  }
}
