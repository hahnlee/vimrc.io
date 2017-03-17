import enOptionInfo from './en/optioninfo.json';
import koOptionInfo from './ko/optioninfo.json';

function getOptionInfo(lang) {
  switch (lang) {
    case 'ko':
      return koOptionInfo;
    default:
      return enOptionInfo;
  }
}

export {getOptionInfo};
