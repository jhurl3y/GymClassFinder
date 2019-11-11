import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    borderColor: "#eee",
    borderTopWidth: 1,
    ...Platform.select({
      ios: {
        marginTop: 120
      },
      android: {
        marginTop: 0
      }
    })
  },
  gymClass: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  listItemContainer: {
    borderColor: "#eee",
    borderBottomWidth: 1
  },
  listItemWrapper: {
    borderColor: "#eee"
  },
  title: {
    fontSize: 16
  },
  rightTitle: {
    fontSize: 14
  },
  rightSubtitle: {
    fontSize: 12
  }
});

export { styles };
