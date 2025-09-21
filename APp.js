import React from "react";
import { SafeAreaView, Text, FlatList, TouchableOpacity } from "react-native";

const channels = [
  { id: "1", name: "CNN", category: "Notícias" },
  { id: "2", name: "ESPN", category: "Esportes" },
  { id: "3", name: "HBO", category: "Filmes" }
];

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, padding: 20, backgroundColor: "#111" }}>
      <Text style={{ color: "#fff", fontSize: 20, marginBottom: 10 }}>
        📺 Meu IPTV (Demo)
      </Text>
      <FlatList
        data={channels}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              padding: 15,
              backgroundColor: "#222",
              borderRadius: 10,
              marginBottom: 8
            }}
          >
            <Text style={{ color: "#fff", fontSize: 16 }}>{item.name}</Text>
            <Text style={{ color: "#aaa", fontSize: 12 }}>{item.category}</Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
  }
