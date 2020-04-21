import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default class Calc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      operateText: '',
      resultText: '',
    };
  }

  buttonPressed(par) {
    const lastCaracter = this.state.operateText.split('').pop();
    let dot = true;

    if (par === '=') {
      switch (lastCaracter) {
        case '+':
        case '-':
        case '*':
        case '/':
          const text = this.state.operateText.split('');
          text.pop();
          this.setState({
            operateText: text.join(''),
            resultText: eval(text.join('')),
          });
          break;
      }
      this.setState({
        resultText: eval(this.state.operateText),
      });
    } else if (par === 'C') {
      this.setState({
        operateText: '',
        resultText: '',
      });
    } else if (par === '<') {
      const text = this.state.operateText.split('');
      text.pop();
      this.setState({
        operateText: text.join(''),
      });
    } else if (
      (par === '+' || par === '-' || par === '*' || par === '/') &&
      (lastCaracter === '+' ||
        lastCaracter === '-' ||
        lastCaracter === '*' ||
        lastCaracter === '/')
    ) {
      const text = this.state.operateText.split('');
      text.pop();
      this.setState({
        operateText: text.join('') + par,
      });
    } else {
      this.setState({
        operateText: this.state.operateText + par,
      });
    }
  }

  render() {
    let numbers = [
      ['C', '()', '%'],
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
        <View style={styles.operateScreen}>
          <Text style={styles.operateText}>{this.state.operateText}</Text>
        </View>

        <View style={styles.resultScreen}>
          <Text style={styles.resultText}>{this.state.resultText}</Text>
        </View>

        <View style={styles.btnsStyle}>
          <View style={styles.numberStyle}>{rows}</View>
          <View style={styles.operatorStyle}>{ops}</View>
        </View>
      </View>
    );
  }
}

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
