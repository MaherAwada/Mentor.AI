import { router } from 'expo-router'; // Mantido para navegação
import { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function SkillsScreen() {
  const [selectedSkills, setSelectedSkills] = useState([]);
  
  // Lista de habilidades do snippet fornecido
  const skills = [
    "Comunicação",
    "Pensamento analítico",
    "Organização",
    "Aprendizado rápido",
    "Trabalho em equipe",
  ];

  const toggleSkill = (skill) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter((s) => s !== skill));
    } else if (selectedSkills.length < 3) {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  // Lógica de navegação mantida da sua implementação anterior
  const handleGetRecommendations = () => {
    if (selectedSkills.length < 2) {
      alert('Por favor, selecione 2 ou 3 habilidades.');
      return;
    }
    console.log('Skills selecionadas:', selectedSkills);
    
    // Navega para a terceira tela
    router.replace('/LibraryScreen');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        
        {/* Bloco de cabeçalho */}
        <View style={styles.header}>
          <Text style={styles.subtitleHeader}>Seu objetivo: Recolocação</Text>
          <Text style={styles.title}>
            Quais habilidades mais se destacam em você?
          </Text>
          <Text style={styles.subtitleDescription}>Selecione 2 ou 3 habilidades.</Text>
        </View>

        {/* Grid de Habilidades */}
        <View style={styles.skillsGrid}>
          {skills.map((skill, index) => {
            const isSelected = selectedSkills.includes(skill);
            return (
              <TouchableOpacity
                key={`${skill}-${index}`}
                onPress={() => toggleSkill(skill)}
                style={[
                  styles.skillButton,
                  isSelected ? styles.skillButtonSelected : styles.skillButtonUnselected,
                ]}
              >
                <Text style={[styles.skillText, isSelected && styles.skillTextSelected]}>
                  {skill}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Botão de Ação */}
        <TouchableOpacity
          onPress={handleGetRecommendations}
          style={[styles.submitButton, selectedSkills.length < 2 && styles.submitButtonDisabled]}
          disabled={selectedSkills.length < 2}
        >
          <Text style={styles.submitButtonText}>Receber Minhas Recomendações</Text>
        </TouchableOpacity>
        
      </ScrollView>
    </SafeAreaView>
  );
}

// Novos estilos baseados no snippet
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F3F4F6', // Cor de fundo principal
  },
  container: {
    flexGrow: 1,
    padding: 24,
  },
  header: {
    marginBottom: 32,
  },
  subtitleHeader: {
    fontSize: 14, // Ajustado para ser menor que o subtitleDescription
    color: '#6B7280', 
    marginBottom: 4,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#0a2540',
    lineHeight: 36,
    marginBottom: 8,
  },
  subtitleDescription: {
    fontSize: 18,
    color: '#6B7280', 
    marginBottom: 8,
  },
  skillsGrid: {
    width: '100%',
    marginBottom: 24,
    // Alterado para 'flex-start' para alinhar os botões à esquerda (como na tela original)
    flexDirection: 'row', 
    flexWrap: 'wrap',
    gap: 12, // Adiciona espaço entre os itens
  },
  skillButton: {
    paddingVertical: 12, // Ajustado para ser menos alto
    paddingHorizontal: 24,
    borderRadius: 9999, // Arredondado
    borderWidth: 2,
    alignItems: 'center',
    // Removido marginBottom para usar 'gap' no skillsGrid
  },
  skillButtonSelected: {
    backgroundColor: '#1E90FF',
    borderColor: '#1E90FF',
  },
  skillButtonUnselected: {
    backgroundColor: 'white',
    borderColor: '#D1D5DB', 
  },
  skillText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0a2540',
  },
  skillTextSelected: {
    color: 'white',
  },
  submitButton: {
    backgroundColor: '#1E90FF',
    paddingVertical: 20,
    borderRadius: 9999,
    alignItems: 'center',
    marginTop: 20,
  },
  submitButtonDisabled: {
    backgroundColor: '#A0A0A0',
  },
  submitButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
});