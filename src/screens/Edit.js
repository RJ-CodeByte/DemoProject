import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { TextInput, RadioButton } from 'react-native-paper';
import SelectDropdown from 'react-native-select-dropdown';
import { Button } from 'react-native-elements';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useSelector, useDispatch } from 'react-redux';
import { setUsers, setUsersID } from "../redux/actions";
import { Item } from 'react-native-paper/lib/typescript/components/List/List';
import { NavigationHelpersContext } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function EditUser({ navigation }) {

    const { userData, userID } = useSelector((state) => state.usersReducer);
    const dispatch = useDispatch();


    const [Gender, setGender] = React.useState();
    const [newName, setNewName] = React.useState();
    const [newAge, setNewAge] = React.useState(0);

    const [Course, setCourse] = React.useState();
    let courses = ["MscIt", "BscIt", "Imca", "ImscIt"];

    useEffect(() => {
        navigation.addListener('focus', () => {
            getUserData();
        })
        // getUserData();
        // console.log("current Id", userID);
        // getData(Courses);
    }, [])

    const getUserData = () => {
        const User = userData.find((user) => user.Id === userID)
        if (User) {
            setNewName(User.name);
            setNewAge(User.age);
            setGender(User.gender);
            setCourse(User.course);
        }
        console.log({ Course });
    }

    const UpdateData = () => {
        var user = {
            Id: userID,
            name: newName,
            age: newAge,
            gender: Gender,
            course: Course
        }
        var index = userData.findIndex(user => user.Id === userID); // for finding an Index
        let newUser = [];
        newUser = [...userData];
        newUser[index] = user;
        AsyncStorage.setItem('Usersdata', JSON.stringify(newUser)).then(() => {
            dispatch(setUsers(newUser));
            // console.log("Success!");
            alert("User Updated SuccessFully!");
            navigation.goBack();
        });
    }

    return (
        <View style={{ flex: 1, padding: 20, backgroundColor: 'white' }}>
            <TextInput
                label={"Name"}
                mode='outlined'
                style={{ marginVertical: 20 }}
                onChangeText={(value) => setNewName(value)}
                value={newName}
            />
            <TextInput
                label={"Age"}
                mode='outlined'
                onChangeText={(value) => setNewAge(value)}
                value={newAge.toString()}
            />
            <View style={{ padding: 10 }}>
                <RadioButton.Group onValueChange={newValue => setGender(newValue)} value={Gender}>
                    <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ fontSize: 20 }}>Male</Text>
                            <RadioButton.Android value="Male" theme={{ roundness: 20 }} />
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10 }}>
                            <Text style={{ fontSize: 20 }}>Female</Text>
                            <RadioButton.Android value="Female" />
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10 }}>
                            <Text style={{ fontSize: 20 }}>Others</Text>
                            <RadioButton.Android value="Others" />
                        </View>
                    </View>
                </RadioButton.Group>
            </View>
            <SelectDropdown
                // data={Courses.filter((item) => item !== course)}
                data={courses.filter((item) => item !== Course)}
                renderDropdownIcon={() => (
                    <FontAwesome5 name={'angle-down'} size={25} style={{ paddingHorizontal: 10 }} color={'#000000'} />
                )}
                buttonStyle={{ borderRadius: 2, width: '100%', borderWidth: 1 }}

                onSelect={(selectedItem, index) => {
                    setCourse(selectedItem);
                    // console.log(selectedItem, index)
                }}
                defaultButtonText={Course}
                buttonTextAfterSelection={(selectedItem, index) => {
                    return selectedItem
                }}
                rowTextForSelection={(item, index) => {
                    return item;
                }}
            />
            <View style={{ alignItems: "center", margin: 10 }}>
                <Button title={'Submit'} containerStyle={{
                    width: 200,
                    borderRadius: 10,
                    marginHorizontal: 50,
                    marginVertical: 10,
                }}
                    onPress={() => {
                        UpdateData();
                    }}
                />
            </View>
        </View>
    )
}
