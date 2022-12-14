import { StyleSheet } from "react-native"
const styles = StyleSheet.create({
  hr: {
    marginTop: 25,
    marginBottom: 20,
    borderBottomColor: "black",
    borderBottomWidth: 1
  },
  container: { flex: 1, height: 100, padding: 13 },
  text: { color: "black", fontSize: 20 },
  buttonPressed: { backgroundColor: "aquamarine" },
  buttonNotPressed: { backgroundColor: "blue" },
  button: { borderRadius: 4, padding: 15, marginTop: 10 },
  buttonText: { color: "white", textAlign: "center", fontSize: 16 }
})

export const globalOptions = {
  name: "danp202210117_dev_38147",
  url: "https://danp202210117_dev_38147.botics.co",
  api: "https://danp202210117_dev_38147.botics.co/api/v1"
}

export const modulesOptions = {
  "@modules/app-menu": { title: "Ap33", copy: "Rou44", styles: styles }
}
