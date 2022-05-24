import { Text, StyleSheet, View, Image, FlatList, Alert, TouchableOpacity, } from 'react-native'
import React, { Component } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ConstantsFonts from '../constants/fonts'
import ConstantsImages from '../constants/images'
import { connect } from 'react-redux';
import { setUsers, setUsersID } from "../redux/actions";
// import { Button } from 'react-native-paper'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-async-storage/async-storage'



class HomeScreen extends Component {


    componentDidMount() {
        this.getUsers();
    }

    getUsers = () => {
        AsyncStorage.getItem('Usersdata').then(data => {
            const parsedData = JSON.parse(data);
            if (parsedData && typeof parsedData === 'object') {
                console.log("get Data", parsedData);
                this.props.setUsers(parsedData);
            }
        }).catch(err => console.log(err))
    }

    deleteUser = (id) => {
        const FilteredUsers = this.props.userData.filter(user => user.Id !== id)
        console.log(FilteredUsers);
        AsyncStorage.setItem('Usersdata', JSON.stringify(FilteredUsers)).then(() => {
            this.props.setUsers(FilteredUsers);
            alert('User deleted Successfully!');
        }).catch(err => console.log(err))
    }


    render() {
        return (
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={this.props.userData}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item, index }) => (
                        <View style={styles.innercontainer}>
                            <Text style={styles.text}>Name: {item.name}</Text>
                            <Text style={styles.text}>Age: {item.age}</Text>
                            <Text style={styles.text}>Gender: {item.gender}</Text>
                            <Text style={styles.text}>Education: {item.course}</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <FontAwesome5 name={'edit'} size={25} style={{ flex: 4 }} onPress={() => {
                                    console.log("my ID", item.Id),
                                        this.props.setUsersID(item.Id),
                                        this.props.navigation.navigate("Edit");
                                }}
                                    color={'green'} />
                                <FontAwesome5 name={'trash'} size={25} onPress={() => this.deleteUser(item.Id)} color={'red'} />
                            </View>
                        </View>
                    )
                    }
                />
                <TouchableOpacity style={styles.button} onPress={() => {
                    this.props.setUsersID(this.props.userID + 1);
                    // console.log(this.props.userID + 1);
                    this.props.navigation.navigate('Add')
                }} >
                    <FontAwesome5 name={'plus'} size={20} color={'white'} />
                </TouchableOpacity>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    button: {
        width: 60,
        height: 60,
        borderRadius: 30,
        position: 'absolute',
        marginBottom: 50,
        bottom: 50,
        right: 20,
        elevation: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0080ff'
    },
    innercontainer: {
        padding: 10,
        borderWidth: 0.3,
        borderRadius: 10,
        marginHorizontal: 10,
        marginVertical: 10,
        backgroundColor: "#ffff",
        elevation: 5,
        // flexDirection:'row'
        shadowColor: '#000',
    },
    text: {
        fontSize: 20,
        fontFamily: ConstantsFonts.poppins.regular
        // 
    },
})


const mapStateToProps = state => {
    return {
        userData: state.usersReducer.userData,
        userID: state.usersReducer.userID
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUsers: (users) => dispatch(setUsers(users)),
        setUsersID: (id) => dispatch(setUsersID(id))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);