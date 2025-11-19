import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { MaterialIcons, Feather, FontAwesome5 } from "@expo/vector-icons";

const cards = [
  {
    id: 1,
    title: "Profissões do Futuro",
    subtitle: "Atendimento Digital",
    iconType: "book",
  },
  {
    id: 2,
    title: "IA e o Trabalho",
    subtitle: "Atendimento Digital",
    iconType: "bolt",
  },
  {
    id: 3,
    title: "IA e o Trabalho Humano",
    subtitle: "Domínio Básico de IA",
    iconType: "cog",
  },
  {
    id: 4,
    title: "Como se Preparar para Entrevistas",
    subtitle: "Modernas",
    iconType: "chart",
  },
];

function CardItem({ title, subtitle, iconType }) {
  function renderIcon() {
    if (iconType === "book") return <FontAwesome5 name="book-open" size={24} />;
    if (iconType === "bolt") return <Feather name="zap" size={24} />;
    if (iconType === "cog") return <FontAwesome5 name="cogs" size={24} />;
    if (iconType === "chart") return <MaterialIcons name="bar-chart" size={24} />;
    return <Feather name="circle" size={24} />;
  }

  return (
    <TouchableOpacity style={styles.card}>
      <View style={styles.cardLeft}>
        <View style={styles.iconContainer}>{renderIcon()}</View>
        <View>
          <Text style={styles.cardTitle}>{title}</Text>
          <Text style={styles.cardSubtitle}>{subtitle}</Text>
        </View>
      </View>
      <MaterialIcons name="arrow-forward-ios" size={18} />
    </TouchableOpacity>
  );
}

export default function BibliotecaScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.smallTitle}>Seu objetivo: Recolocação</Text>

        <Text style={styles.mainTitle}>Sua Biblioteca de Preparação</Text>

        <Text style={styles.description}>
          Artigos curtos e essenciais para você se preparar.
        </Text>

        <View style={styles.cardsWrapper}>
          {cards.map((card) => (
            <CardItem key={card.id} {...card} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f1f3f6",
  },
  container: {
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 32,
  },
  smallTitle: {
    fontSize: 14,
    color: "#7a7f87",
    marginBottom: 8,
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: "#6b7280",
    marginBottom: 24,
  },
  cardsWrapper: {
    gap: 12,
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
    elevation: 3,
  },
  cardLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: "#e5f0ff",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
  },
  cardSubtitle: {
    fontSize: 13,
    color: "#6b7280",
    marginTop: 2,
  },
});
