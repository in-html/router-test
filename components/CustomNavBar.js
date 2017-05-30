import React from 'react';
import {View, Text, StyleSheet} from "react-native";
import Button from "react-native-button";
import {Actions} from "react-native-router-flux";
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icoMoonConfig from '../assets/iconFontConfig/selection.json';
const Icon = createIconSetFromIcoMoon(icoMoonConfig);
import styled from 'styled-components/native';


const Wrapper = styled.View`
  width: 100%;
  height: 56;
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${$props => $props.bg ? $props.bg : '#fff'};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const IconButton = styled.TouchableOpacity`

`;
const BasketCounter = styled.View`
  width: 15;
  height: 15;
  background: #36C842;
  border-radius: 7.5;
  position: absolute;
  top: 0;
  right: 0;
  justify-content: center;
  align-items: center;
`;

const BasketCounterText = styled.Text`
  font-family: HelveticaNeue-Bold;
  font-size: 11px;
  color: #FFFFFF;
  background-color: transparent;
`;


export default class CustomNavBar extends React.Component {
    render(){
      return(
        <Wrapper bg={this.props.bg}>
          <IconButton onPress={()=>{}}>
            <Icon
              size={25}
              name={'hamburger_wide'}
              color={'#E4002B'}
              style={{}}
            />
          </IconButton>
          <IconButton onPress={()=>{Actions.ScreenTwo()}}>
            <Icon
              size={25}
              name={'cart'}
              color={'#E4002B'}
              style={{}}
            />
            <BasketCounter>
              <BasketCounterText>1</BasketCounterText>
            </BasketCounter>
        </IconButton>
      </Wrapper>
    );
  }
}
