enum Modes {
  LIGHT = "light",
  DARK = "dark",
  SYSTEM = "system",
}

enum LocalStorageItems {
  THEME = "theme",
}

enum FooterText {
  CURRENT_YEAR = new Date().getFullYear(),
  WEBSITE_NAME = "Todoist",
}

export { Modes, LocalStorageItems, FooterText };
