import { FlatList, TouchableOpacity, View, Image, Text } from 'react-native';
import { style } from './style';

const DATA = [
    {
        id: 1,
        name: 'minhtuan',
        email: 'tuan@gmail.com',
        position: 'developer',
        photo: 'https://w7.pngwing.com/pngs/186/205/png-transparent-react-native-react-logos-brands-icon.png',
    },
    {
        id: 3,
        name: 'minhtuan',
        email: 'tuan@gmail.com',
        position: 'developer',
        photo: 'https://w7.pngwing.com/pngs/186/205/png-transparent-react-native-react-logos-brands-icon.png',
    },
    {
        id: 2,
        name: 'minhtuan',
        email: 'tuan@gmail.com',
        position: 'developer',
        photo: 'https://w7.pngwing.com/pngs/186/205/png-transparent-react-native-react-logos-brands-icon.png',
    },
];

const ContactItems = ({ contact }) => (
    <View styles={[style.containerView, contact.id !== 1 && { marginTop: 0 }]}>
        <View styles={style.container}>
            <Image source={{ uri: contact.photo }} style={{ width: 50, height: 50 }} />
            <View styles={{ alignItems: 'center' }}>
                <Text>name : {contact.name}</Text>
                <Text>{contact.position}</Text>
                <Text>{contact.email}</Text>
            </View>
            <TouchableOpacity onPress={() => console.log('Calling...')}>
                <Text>Call</Text>
            </TouchableOpacity>
        </View>
    </View>
);
const viewItems = () => {
    return (
        <View>
            <FlatList
                data={DATA}
                renderItem={({ item }) => <ContactItems contact={item} />}
                keyExtractor={(item) => item.email}
                onScrollAnimationEnd={true}
            />
        </View>
    );
};
export default viewItems;
