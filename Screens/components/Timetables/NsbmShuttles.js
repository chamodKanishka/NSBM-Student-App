import React, { Component } from "react";
import{View, Text, StyleSheet, ScrollView} from "react-native";
import { Header, Left, Right, Icon} from 'native-base';
import { Table, TableWrapper, Row } from 'react-native-table-component';
import axios from 'axios';
class NsbmShuttles extends Component{

    constructor(props) {
        super(props);
        this.state = {
          tableHead: ['NSBM To Makumbura', 'Makubura to NSBM'],
          widthArr: [ 170, 170],
          dataList: []
        }
      }

      componentDidMount() {
        axios.get(`http://192.168.43.199:8083/api/events/events`)
          .then(res => {console.log(res.data)
            const dataList = res.data;
            this.setState({ dataList });
          })
          .catch(error => {console.log(error)});
      }

    render(){
        const state = this.state;
            const tableData = [];
            for (let i = 0; i < 30; i += 1) {
            const rowData = [];
            for (let j = 0; j < 9; j += 1) {
                rowData.push(`${i}${j}`);
            }
      tableData.push(rowData);
    }

        return(
            <View style={styles.container}>
            <ScrollView horizontal={true}>
              <View>
                <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
                  <Row data={state.tableHead} widthArr={state.widthArr} style={styles.header} textStyle={styles.text}/>
                </Table>
                <ScrollView style={styles.dataWrapper}>
                  <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
                    {
                      tableData.map((rowData, index) => (
                        <Row
                          key={index}
                          data={rowData}
                          widthArr={state.widthArr}
                          style={[styles.row, index%2 && {backgroundColor: '#F7F6E7'}]}
                          textStyle={styles.text}
                        />
                      ))
                    }
                  </Table>
                </ScrollView>
              </View>
            </ScrollView>
          </View>
        );
    }
}
export default NsbmShuttles;

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    header: { height: 50, backgroundColor: '#537791' },
    text: { textAlign: 'center', fontWeight: '100' },
    dataWrapper: { marginTop: -1 },
    row: { height: 40, backgroundColor: '#E7E6E1' }
  });