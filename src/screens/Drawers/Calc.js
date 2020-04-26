import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {Calculate, Calculate1} from '../../Redux/Action/ActionCalc';
import CustomHeader from '../../Components/CustomHeader';

class Calc extends Component {
  constructor(props) {
    super(props);
  }

  buttonPressed(par) {
    // console.log(this.props.text1); ///operate text
    // console.log(this.props.text2); ///result text
    // this.props.Calculate('3'); ///operate yaz
    // this.props.Calculate1('6'); ///resulati yaz

    const lastCaracter = this.props.text1.split('').pop();

    if (par === '=') {
      switch (lastCaracter) {
        case '+':
        case '-':
        case '*':
        case '/':
          const text = this.props.text1.split('');
          text.pop();
          this.props.Calculate(text.join(''));
          this.props.Calculate1(eval(text.join('')));
          break;
      }
      this.props.Calculate1(eval(this.props.text1));
    } else if (par === 'C') {
      this.props.Calculate('');
      this.props.Calculate1('');
    } else if (par === '<') {
      const text = this.props.text1.split('');
      text.pop();
      this.props.Calculate(text.join(''));
    } else if (
      (par === '+' || par === '-' || par === '*' || par === '/') &&
      (lastCaracter === '+' ||
        lastCaracter === '-' ||
        lastCaracter === '*' ||
        lastCaracter === '/')
    ) {
      const text = this.state.operateText.split('');
      text.pop();
      this.props.Calculate(text.join('') + par);
    } else {
      this.props.Calculate(this.props.text1 + par);
    }
  }

  render() {
    let numbers = [
      ['C', '%', ''],
      [7, 8, 9],
      [4, 5, 6],
      [1, 2, 3],
      [0, '.', '<'],
    ];
    let rows = [];
    for (let i = 0; i < 5; i++) {
      let row = [];
      for (let j = 0; j < 3; j++) {
        row.push(
          <TouchableOpacity
            key={numbers[i][j]}
            onPress={() => this.buttonPressed(numbers[i][j])}
            style={styles.btn}>
            <Text style={styles.btnText}>{numbers[i][j]}</Text>
          </TouchableOpacity>,
        );
      }
      rows.push(<View style={styles.row}>{row}</View>);
    }

    let ops = [];
    let opers = ['/', '*', '-', '+', '='];
    for (let i = 0; i < 5; i++) {
      ops.push(
        <TouchableOpacity
          key={opers[i]}
          onPress={() => this.buttonPressed(opers[i])}
          style={styles.btn}>
          <Text style={styles.btnText}>{opers[i]}</Text>
        </TouchableOpacity>,
      );
    }

    return (
      <View style={styles.container}>
        <CustomHeader title="Calculator" navigation={this.props.navigation} />
        <View style={styles.operateScreen}>
          <Text style={styles.operateText}>{this.props.text1}</Text>
        </View>

        <View style={styles.resultScreen}>
          <Text style={styles.resultText}>{this.props.text2}</Text>
        </View>

        <View style={styles.btnsStyle}>
          <View style={styles.numberStyle}>{rows}</View>
          <View style={styles.operatorStyle}>{ops}</View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    text1: state.Calc.operateText,
    text2: state.Calc.resultText,
    dot: state.Calc.dot,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    Calculate: value => {
      dispatch(Calculate(value));
    },
    Calculate1: value => {
      dispatch(Calculate1(value));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Calc);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  operateScreen: {
    flex: 2,
    backgroundColor: 'black',
    padding: 10,
  },
  operateText: {
    fontSize: 30,
    color: 'white',
  },
  resultScreen: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'flex-end',
    paddingRight: 10,
  },
  resultText: {
    fontSize: 25,
    color: 'white',
  },
  btnsStyle: {
    flex: 4,
    flexDirection: 'row',
  },
  numberStyle: {
    flex: 5,
    backgroundColor: 'white',
  },
  operatorStyle: {
    flex: 1,
    backgroundColor: 'orange',
  },
  btn: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  btnText: {
    fontSize: 25,
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
