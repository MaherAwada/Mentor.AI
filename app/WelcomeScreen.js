import { ThemedText } from '@/components/themed-text';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { router } from 'expo-router'; // IMPORTANTE: Módulo de roteamento
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Definição dos botões de objetivo
const objectives = [
  'Primeiro emprego',
  'Recolocação',
  'Transição de carreira',
  'Atualização profissional',
];

export default function WelcomeScreen() {
  
  // Função de navegação corrigida
  const handleSelectObjective = (objective) => {
    console.log('Objective selected:', objective);
    
    // Navega para a segunda tela, passando o objetivo selecionado
    router.push({
      // Rota de destino
      pathname: '/SkillsScreen', 
      // Parâmetros a serem passados
      params: { objective: objective }, 
    });
  };

  
  const renderHeaderIcon = () => (
    <IconSymbol 
      name="brain.head.profile" 
      size={50} 
      color="#187498" 
      style={styles.headerIcon}
    />
  );
  
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        
        {/* Ícone */}
        {renderHeaderIcon()}


        {/* Título de Boas-Vindas */}
        <ThemedText type="title" style={styles.welcomeTitle}>
          Bem-vindo(a) ao Mentor.AI
        </ThemedText>
        <ThemedText style={styles.welcomeSubtitle}>
          Selecione uma das opções e abra as portas para o seu futuro.
        </ThemedText>

        {/* Pergunta */}
        <ThemedText type="subtitle" style={styles.questionText}>
          Qual é o seu objetivo no momento?
        </ThemedText>

        {/* Lista de Botões de Objetivo */}
        <View style={styles.buttonsContainer}>
          {objectives.map((objective) => (
            <TouchableOpacity
              key={objective}
              style={styles.button}
              onPress={() => handleSelectObjective(objective)}
            >
              <Text style={styles.buttonText}>{objective}</Text>
            </TouchableOpacity>
          ))}
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#E6F4FE', // Cor de fundo da imagem "tela1.jpg"
  },
  headerIcon: {
    marginBottom: 20,
    marginTop: 50, // Ajuste para descer um pouco
  },
  welcomeTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    color: '#10233e'
  },
  welcomeSubtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#34495e',
    marginBottom: 40,
  },
  questionText: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '600',
    marginBottom: 20,
    color: '#10233e'
  },
  buttonsContainer: {
    width: '100%',
    alignItems: 'center',
    gap: 15,
  },
  button: {
    backgroundColor: '#fff',
    borderRadius: 50,
    paddingVertical: 15,
    paddingHorizontal: 20,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  buttonText: {
    color: '#187498', 
    fontSize: 16,
    fontWeight: '700',
  },
});