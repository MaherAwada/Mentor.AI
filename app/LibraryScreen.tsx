// app/LibraryScreen.js
import { Stack } from 'expo-router';
import BibliotecaScreen from "../src/screens/BibliotecaScreens";

export default function LibraryScreen() {
  return (
    <>
      {/* Opcional: Você pode definir o cabeçalho (header) específico para esta tela aqui */}
      <Stack.Screen 
        options={{ 
          headerShown: false // A tela da biblioteca já tem um SafeAreaView e títulos próprios.
        }} 
      />
      <BibliotecaScreen />
    </>
  );
}