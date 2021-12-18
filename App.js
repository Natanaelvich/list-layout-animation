import React, {useState} from 'react';
import 'expo-dev-client';
import {Button, View, Text, ScrollView, TextInput} from 'react-native';
import Animated, {
  Layout,
  LightSpeedInLeft,
  LightSpeedOutRight,
} from 'react-native-reanimated';

const styles = {
  participantView: {
    borderBottomColor: 'black',
    width: '100%',
    borderBottomWidth: 1,
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fffbeb',
  },
  listView: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100%',
    paddingBottom: 30,
  },
  bottomRow: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  textInput: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
};

function Participant({name, onRemove}) {
  return (
    <Animated.View
      entering={LightSpeedInLeft}
      layout={Layout.springify()}
      exiting={LightSpeedOutRight}
      style={[styles.participantView]}>
      <Text>{name}</Text>
      <Button title="Remove" color="red" onPress={onRemove} />
    </Animated.View>
  );
}

export default function AnimatedListExample() {
  const [inputValue, setInputValue] = useState('');
  const [participantList, setParticipantList] = useState([]);

  const addParticipant = () => {
    setParticipantList(
      [{name: inputValue, id: Date.now().toString()}].concat(participantList),
    );
    setInputValue('');
  };

  const removeParticipant = id => {
    setParticipantList(
      participantList.filter(participant => participant.id !== id),
    );
  };

  return (
    <View style={[styles.listView]}>
      <ScrollView style={[{width: '100%'}]}>
        {participantList.map(participant => (
          <Participant
            key={participant.id}
            name={participant.name}
            onRemove={() => removeParticipant(participant.id)}
          />
        ))}
      </ScrollView>

      <View style={[styles.bottomRow]}>
        <View style={[styles.textInput]}>
          <Text>Add participant: </Text>
          <TextInput
            placeholder="Name"
            value={inputValue}
            onChangeText={setInputValue}
          />
        </View>

        <Button
          title="Add"
          disabled={inputValue === ''}
          onPress={addParticipant}
        />
      </View>
    </View>
  );
}
