const userLang = navigator.language || navigator.userLang || navigator.userLanguage
document.documentElement.lang = userLang

export default userLang.substring(0, 2)