import React from 'react';
import { StyleSheet, Text, View, StatusBar, ListView } from 'react-native';
import { Container, Content, Header, Form, Input, Item, Button, Label, Icon, List, ListItem } from 'native-base';

import * as firebase from 'firebase';

// Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyCBJNojJkUSyu0jLj9T646NcSO4UNLKfJo",
    authDomain: "project-react-native-e877d.firebaseapp.com",
    databaseURL: "https://project-react-native-e877d.firebaseio.com",
    projectId: "project-react-native-e877d",
    storageBucket: "project-react-native-e877d.appspot.com",
    messagingSenderId: "293347456595"
};

firebase.initializeApp(firebaseConfig);

var data = ["First", "Second"];

export default class App extends React.Component {

    constructor(props){
        super(props);

        this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

        this.state = {
            listViewData: data,
            newContact: ""
        }
    }

    render() {
        return (
            <Container style={styles.container}>
                <Header style={styles.header}>
                    <Content>
                        <Item>
                            <Input
                                placeholder="Add name"
                                style={styles.input}
                            />
                            <Button>
                                <Icon name="add" />
                            </Button>
                        </Item>
                    </Content>
                </Header>
                <Content>
                    <List
                        dataSource = { this.ds.cloneWithRows(this.state.listViewData) }
                        renderRow = { data =>
                            <ListItem>
                                <Text>{data}</Text>
                            </ListItem>
                        }
                        renderLeftHiddenRow = { data =>
                            <Button full>
                                <Icon name="information-circle" />
                            </Button>
                        }
                        renderRightHiddenRow = { data =>
                            <Button full danger>
                                <Icon name="trash" />
                            </Button>
                        }

                        leftOpenValue={-75}
                        rightOpenValue={-75}
                    />
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header:{
        backgroundColor: '#0099e5',
        marginTop: StatusBar.currentHeight,
    },
    input:{
        color: 'white'
    }
});
