import { router } from 'expo-router'; // Importar o roteador
import React, { useState } from "react";
import { Alert, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

// Usaremos SkillsScreen como nome para manter a rota /SkillsScreen funcionando.
export default function SkillsScreen() {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const skills = [
    "Comunicação",
    "Pensamento analítico",
    "Organização",
    "Aprendizado rápido",
    "Trabalho em equipe",
  ];

  const toggleSkill = (skill: string) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter((s) => s !== skill));
    } else if (selectedSkills.length < 3) {
      setSelectedSkills([...selectedSkills, skill]);
    } else {
      // Opcional: Avisar o usuário se ele tentar selecionar mais de 3
      Alert.alert("Limite Atingido", "Você pode selecionar no máximo 3 habilidades.");
    }
  };
  
  // Implementação da navegação
  const handleGetRecommendations = () => {
    if (selectedSkills.length < 2) {
      Alert.alert('Atenção', 'Por favor, selecione 2 ou 3 habilidades.');
      return;
    }
    
    console.log('Skills selecionadas:', selectedSkills);
    
    // Navega para a Tela 3 (Biblioteca)
    router.replace('/LibraryScreen'); 
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Text style={styles.subtitleHeader}>Seu objetivo: Recolocação</Text>
          <Text style={styles.title}>
            Quais habilidades mais se destacam em você?
          </Text>
          <Text style={styles.subtitleDescription}>Selecione 2 ou 3 habilidades.</Text>
        </View>

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

        <TouchableOpacity
          onPress={handleGetRecommendations} // Chamada para a função de navegação
          style={[styles.submitButton, selectedSkills.length < 2 && styles.submitButtonDisabled]}
          disabled={selectedSkills.length < 2}
        >
          <Text style={styles.submitButtonText}>Receber Minhas Recomendações</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F3F4F6', // Similar to from-gray-100
  },
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 24,
  },
  header: {
    marginBottom: 32,
  },
  subtitleHeader: {
    fontSize: 14, 
    color: '#6B7280', // gray-500
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
    flexDirection: 'row', 
    flexWrap: 'wrap',
    gap: 12,
    justifyContent: 'flex-start', // Alinha botões à esquerda
  },
  skillButton: {
    paddingVertical: 12, 
    paddingHorizontal: 24,
    borderRadius: 9999, 
    borderWidth: 2,
    alignItems: 'center',
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