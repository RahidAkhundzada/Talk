import React, {useEffect} from 'react';
import {ActivityIndicator, View} from 'react-native';
import {connect} from 'react-redux';

import {isLogged} from '../../Redux/Action/ActionLogin';

const Logout = props => {
  useEffect(() => {
    props.isLogged(false);
  });
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator size="large" />
    </View>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    isLogged: value => {
      dispatch(isLogged(value));
    },
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(Logout);
