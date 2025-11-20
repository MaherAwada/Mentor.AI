import { ThemedText } from '@/components/themed-text';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';


const ALL_SKILLS = [
  'Comunicação',
  'Organização',
  'Pensamento analítico',
  'Aprendizado rápido',
  'Trabalho em equipe',
];

export default function SkillsScreen() {
  const [selectedSkills, setSelectedSkills] = useState([]);
  const colorScheme = useColorScheme() ?? 'light';
  const isDark = colorScheme === 'dark';

  const toggleSkill = (skill) => {
    setSelectedSkills((currentSkills) => {
      if (currentSkills.includes(skill)) {
        // Remove a habilidade se já estiver selecionada
        return currentSkills.filter((s) => s !== skill);
      } else if (currentSkills.length < 3) {
        // Adiciona a habilidade, limitando a 3
        return [...currentSkills, skill];
      }
      return currentSkills;
    });
  };

  const isSelected = (skill) => selectedSkills.includes(skill);

  const handleGetRecommendations = () => {
    if (selectedSkills.length < 2) {
      alert('Por favor, selecione 2 ou 3 habilidades.');
      return;
    }
    console.log('Skills selecionadas:', selectedSkills);
    // Aqui você adicionaria a lógica de navegação para a próxima tela de resultados/recomendações.
    // Ex: router.push('/recommendations', { skills: selectedSkills });
  };

  const renderSkillButton = (skill) => {
    const selected = isSelected(skill);
    
    // Define cores com base no tema e seleção, imitando o estilo da imagem (azul forte para selecionado, branco para não selecionado)
    const buttonStyle = {
      ...styles.skillButton,
      backgroundColor: selected ? '#187498' : Colors[colorScheme].background,
      borderColor: selected ? '#187498' : '#ccc',
    };

    const textStyle = {
      ...styles.skillText,
      color: selected ? '#fff' : Colors[colorScheme].text,
    };

    return (
      <TouchableOpacity
        key={skill}
        style={buttonStyle}
        onPress={() => toggleSkill(skill)}
        activeOpacity={0.7}
      >
        <ThemedText style={textStyle}>{skill}</ThemedText>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        
        {/* Título e Subtítulos */}
        <ThemedText style={styles.smallTitle}>
          Seu objetivo: Recolocação
        </ThemedText>
        <ThemedText type="title" style={styles.mainTitle}>
          Quais habilidades você mais se destacam em você?
        </ThemedText>
        <ThemedText style={styles.subtitle}>
          Selecione 2 ou 3 habilidades.
        </ThemedText>

        {/* Botões de Habilidades */}
        <View style={styles.skillsContainer}>
          {ALL_SKILLS.map(renderSkillButton)}
        </View>

        {/* Botão de Ação */}
        <TouchableOpacity
          style={[
            styles.actionButton,
            { opacity: selectedSkills.length >= 2 ? 1 : 0.5 },
          ]}
          onPress={handleGetRecommendations}
          disabled={selectedSkills.length < 2}
        >
          <ThemedText style={styles.actionButtonText}>
            Receber Minhas Recomendações
          </ThemedText>
        </TouchableOpacity>

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
    paddingHorizontal: 24,
    paddingTop: 40,
    paddingBottom: 32,
    backgroundColor: '#E6F4FE', // Cor de fundo da imagem "tela2.jpg"
  },
  smallTitle: {
    fontSize: 14,
    color: '#7a7f87', // Cor similar ao cinza da imagem
    marginBottom: 8,
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 10,
  },
  title: {

  },
  subtitle: {
    fontSize: 16,
    color: '#6b7280',
    marginBottom: 40,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 15, // Espaçamento entre os botões
    marginBottom: 40,
    width: '100%',
  },
  skillButton: {
    borderRadius: 50,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderWidth: 1,
    // Cor de fundo e borda são definidos no componente com base na seleção
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  skillText: {
    fontSize: 16,
    fontWeight: '600',
    // Cor do texto é definida no componente com base na seleção
  },
  actionButton: {
    backgroundColor: '#187498', // Azul forte para o botão de ação
    borderRadius: 50,
    paddingVertical: 18,
    width: '100%',
    alignItems: 'center',
  },
  actionButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
});