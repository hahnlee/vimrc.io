function getDefaultLang() {
  if (navigator.languages !== undefined) {
    return navigator.languages[0];
  }
  return navigator.language;
}

function getLang() {
  return getDefaultLang().split('-')[0];
}

export default getLang;
