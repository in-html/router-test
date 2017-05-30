import React from 'react';
import {View, Text, StyleSheet} from "react-native";
import {Actions} from "react-native-router-flux";
import CustomNavBar from './CustomNavBar';
import styled from 'styled-components/native';

const Wrapper = styled.View`
  flex: 1;
  background-color: yellow;
  margin-top: 36;
`;

export default class ScreenTwo extends React.Component {
  static renderNavigationBar(){
    return(
      <CustomNavBar
        bg="green"
      />
    );
  }
  render(){
    return (
      <Wrapper>
        <Text>ScreenTwo</Text>
      </Wrapper>
    );
  }
}