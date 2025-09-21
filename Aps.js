import React, { useState } from "react";
import { SafeAreaView, View, Text, FlatList, TextInput, TouchableOpacity, Alert } from "react-native";
import { Video } from "expo-av";

/**
 * App simples para Snack / Expo
 * - Lista de canais por categoria
 * - Busca por nome/categoria
 * - Player com controles nativos (expo-av)
 */

const initialChannels = [
  { id: "1", name: "CNN", category: "Notícias", url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" },
  { id: "2", name: "ESPN", category: "Esportes", url: "https://test-streams.mux.dev/test_001/stream.m3u8" },
  { id: "3", name: "HBO", category: "Filmes", url: "https://test-streams.mux.dev/pts_shift/master.m3u8" }
];

export default function App() {
  const [channels, setChannels] = useState(initialChannels);
  const [search, setSearch] = useState("");
  const [playing, setPlaying] = useState(null);

  const filtered = channels.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <SafeAreaView style={{ flex: 1, padding: 12, backgroundColor: "#111" }}>
      <Text style={{ color: "#fff", fontSize: 20, fontWeight: "600", marginBottom: 8 }}>Meu IPTV (Demo)</Text>

      <TextInput
        placeholder="🔍 Buscar canal ou categoria..."
        placeholderTextColor="#999"
        value={search}
        onChangeText={setSearch}
        style={{
          backgroundColor: "#222",
          color: "#fff",
          padding: 10,
          borderRadius: 10,
          marginBottom: 12
        }}
      />

      {playing ? (
        <View style={{ flex: 1 }}>
          <Video
            source={{ uri: playing.url }}
            useNativeControls
            shouldPlay
            resizeMode="contain"
            style={{ width: "100%", height: 280, backgroundColor: "black", borderRadius: 8 }}
          />
          <TouchableOpacity
            onPress={() => setPlaying(null)}
            style={{ marginTop: 10, padding: 12, backgroundColor: "#e74c3c", borderRadius: 8 }}
          >
            <Text style={{ color: "#fff", textAlign: "center" }}>✖ Fechar player</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <FlatList
          data={filtered}
          keyExtractor={item => item.id}
          ListEmptyComponent={() => <Text style={{ color: "#aaa", marginTop: 20 }}>Nenhum canal encontrado.</Text>}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => setPlaying(item)}
              style={{ padding: 14, backgroundColor: "#222", borderRadius: 10, marginBottom: 8 }}
            >
              <Text style={{ color: "#fff", fontSize: 16 }}>{item.name}</Text>
              <Text style={{ color: "#aaa", fontSize: 12 }}>{item.category}</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </SafeAreaView>
  );
    }
