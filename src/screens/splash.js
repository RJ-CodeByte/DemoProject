import { Text, StyleSheet, View, SafeAreaView, Image } from 'react-native'
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { setUsers } from "../redux/actions";
import AsyncStorage from '@react-native-async-storage/async-storage';
import ConstantsImages from "../constants/images";


class SplashScreen extends Component {

    componentDidMount() {
        setTimeout(() => {
            // this.props.navigation.replace("Home");
            this.setUsersData();
        }, 2000);
    }

    setUsersData = () => {
        var DATA =
            [
                {
                    Id: 0,
                    name: "Jenish",
                    age: 20,
                    gender: 'Male',
                    course: 'MscIt'
                },
                {
                    Id: 1,
                    name: "Hardik",
                    age: 23,
                    gender: 'Male',
                    course: 'BscIt'
                },
                {
                    Id: 2,
                    name: "Mehul",
                    age: 25,
                    gender: 'Male',
                    course: 'MscIt'
                },
                {
                    Id: 3,
                    name: "Janki",
                    age: 22,
                    gender: 'Female',
                    course: 'Imca'
                },
                {
                    Id: 4,
                    name: "Meghna",
                    age: 22,
                    gender: 'Female',
                    course: 'Imscit'
                },
            ]
        // console.log("data++++++", this.props.userData);
        // console.log("All Users ", allUsers);
        AsyncStorage.setItem('Usersdata', JSON.stringify(DATA)).then(() => {
            this.props.setUsers(DATA);
            console.log("Success!");
            this.props.navigation.replace("Home");
        });
        // console.log(this.props.userData);
    }

    render() {
        return (
            <View style={styles.body}>
                <Image
                    source={ConstantsImages.butterfly}
                    style={{
                        width: "100%"
                    }}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

const mapStateToProps = state => {
    return {
        userData: state.usersReducer.userData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUsers: (users) => dispatch(setUsers(users))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen);