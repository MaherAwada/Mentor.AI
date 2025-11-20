/* desativado 
import { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function PerfilScreen() {
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
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Text style={styles.subtitle}>Seu objetivo: Recolocação</Text>
          <Text style={styles.title}>
            Quais habilidades mais se destacam em você?
          </Text>
          <Text style={styles.subtitle}>Selecione 2 ou 3 habilidades.</Text>
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
  subtitle: {
    fontSize: 18,
    color: '#6B7280', // gray-500
    marginBottom: 8,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#0a2540',
    lineHeight: 36,
    marginBottom: 8,
  },
  skillsGrid: {
    width: '100%',
    marginBottom: 24,
  },
  skillButton: {
    paddingVertical: 18,
    paddingHorizontal: 24,
    borderRadius: 9999, // rounded-full
    borderWidth: 2,
    alignItems: 'center',
    marginBottom: 12,
  },
  skillButtonSelected: {
    backgroundColor: '#1E90FF',
    borderColor: '#1E90FF',
  },
  skillButtonUnselected: {
    backgroundColor: 'white',
    borderColor: '#D1D5DB', // border-gray-300
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
    backgroundColor: '#A0A0A0', // A gray color for disabled state
  },
  submitButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
});

*/