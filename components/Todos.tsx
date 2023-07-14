import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const Todos = () => {
  const [todoTitle, setTodoTitle] = useState('');
  const [todoDescription, setTodoDescription] = useState('');
  const [todo, setTodo] = useState([]);

  const addTodo = () => {
    if (todoTitle !== '' && todoDescription !== '') {
      const newTodo = {title: todoTitle, desc: todoDescription};
      setTodo([...todo, newTodo]);
      setTodoTitle('');
      setTodoDescription('');
    } else {
      console.warn('Please fill both the fields');
      setTodoTitle('');
      setTodoDescription('');
    }
  };
  const RemoveTodo = index => {
    const updatedTodo = [...todo];
    updatedTodo.splice(index, 1);
    setTodo(updatedTodo);
  };
  return (
    <>
      <ScrollView>
        <View style={style.mainContainer}>
          <Text style={style.mainContainerTitle}>My Todos List</Text>
          <TextInput
            style={style.mainContainerInput}
            placeholder="Enter Todo title..."
            value={todoTitle}
            onChangeText={text => setTodoTitle(text)}
          />
          <TextInput
            style={style.mainContainerInput}
            placeholder="Enter Todo description..."
            value={todoDescription}
            onChangeText={text => setTodoDescription(text)}
          />
          <TouchableOpacity style={style.mainContainerBtn} onPress={addTodo}>
            <Text style={style.mainContainerBtnText}>Add Todo</Text>
          </TouchableOpacity>
          {todo.length > 0 &&
            todo.map((item, index) => (
              <View key={index} style={style.todoContainer}>
                <Text style={style.todoTitle}>{item.title}</Text>
                <Text style={style.todoDesc}>{item.desc}</Text>
                <TouchableOpacity
                  style={style.removeBtn}
                  onPress={() => RemoveTodo(index)}>
                  <Text style={style.removeBtnText}>Remove Todo</Text>
                </TouchableOpacity>
              </View>
            ))}
        </View>
      </ScrollView>
    </>
  );
};

export default Todos;
const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
  },
  mainContainerTitle: {
    fontSize: 24,
    marginBottom: 20,
    marginTop: 10,
    fontWeight: 'bold',
  },
  mainContainerInput: {
    width: '80%',
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    fontSize: 20,
  },
  mainContainerBtn: {
    marginTop: 20,
    width: '35%',
    backgroundColor: 'black',
    borderRadius: 10,
    elevation: 5,
  },
  mainContainerBtnText: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
    paddingVertical: 15,
  },
  todoContainer: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    width: '80%',
    padding: 10,
    marginBottom: 10,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  todoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'black',
  },
  todoDesc: {
    fontSize: 16,
    color: 'gray',
  },
  removeBtn: {
    marginTop: 10,
    backgroundColor: 'cyan',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  removeBtnText: {
    color: 'black',
    fontSize: 18,
  },
});
