import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";


export default function Principal(){
  const [task, setTask] = useState<string>("");
  const [listaTask, setListTask] = useState<string[]>([]);
  const [editando, setEditando] = useState<number | null>(null);
  const [novoTexto, setNovoTexto] = useState<string>("");

  function addTask(): void {
    if (task.trim() === "") return;
    setListTask([...listaTask, task]);
    setTask(""); // limpa o input depois de adicionar
  }

  function removeTask(index: number): void {
    setListTask(listaTask.filter((_, i) => i !== index));
  }

  function salvarEdicao(index: number): void {
    if (novoTexto.trim() === "") return;
    const novaLista = [...listaTask];
    novaLista[index] = novoTexto;
    setListTask(novaLista);
    setEditando(null);
    setNovoTexto("");
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerLista}>
        <View style={styles.containerHeader}>
          <TextInput
            value={task}
            onChangeText={setTask}
            style={styles.input}
            placeholder="Adicionar tarefa"
          />
          <TouchableOpacity onPress={addTask} style={styles.Button}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={listaTask}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item, index }) => (
            <View style={styles.card}>
              {editando === index ? (
                <TextInput
                  value={novoTexto}
                  onChangeText={setNovoTexto}
                  style={[styles.input, { flex: 1 }]}
                  onSubmitEditing={() => salvarEdicao(index)}
                />
              ) : (
                <Text style={styles.textCardList}>{item}</Text>
              )}

              <View style={styles.icon}>
                {editando === index ? (
                  <TouchableOpacity onPress={() => salvarEdicao(index)}>
                    <MaterialIcons name="check" size={24} color="green" />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity onPress={() => { setEditando(index); setNovoTexto(item); }}>
                    <MaterialIcons name="edit" size={24} color="blue" />
                  </TouchableOpacity>
                )}

                <TouchableOpacity onPress={() => removeTask(index)}>
                  <AntDesign name="delete" size={24} />
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
}

// estilos
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f7f7f7",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding:20,
  },
  containerLista: {
    backgroundColor: "#FFFFFF",
    flex: 1,
    width: "100%",
    borderRadius: 20,
    padding: 20,
    gap: 25,
    elevation: 5,
  },
  buttonText: {
    color: "#FFFF",
  },
  containerHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#000000",
    padding: 10,
    flex: 1,
  },
  Button: {
    padding: 15,
    backgroundColor: "#f4e38c",
    borderRadius: 10,
  },
  textCardList: {
    color: "#000000ff",
    flex: 1,
  },
  card: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 25,
    marginVertical: 10,
    justifyContent: "space-between",
  },
  icon: {
    color:"f4e38c",
    flexDirection: "row",
    gap: 5,
  },
  
});
