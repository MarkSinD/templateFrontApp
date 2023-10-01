import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector'
import {main, snackbar, validation} from './ru'

export const resources = {
	ru: {
		main,
		snackbar,
		validation,
	}
};

void i18n
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		debug: true,
		resources,
	});

export default i18n;