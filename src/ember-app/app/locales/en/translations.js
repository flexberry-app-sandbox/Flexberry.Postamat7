import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISPostamat7ЛогистикаLForm from './forms/i-i-s-postamat7-логистика-l';
import IISPostamat7ПользовательLForm from './forms/i-i-s-postamat7-пользователь-l';
import IISPostamat7ПостаматLForm from './forms/i-i-s-postamat7-постамат-l';
import IISPostamat7СлужбаДоставкиLForm from './forms/i-i-s-postamat7-служба-доставки-l';
import IISPostamat7ТранзакцияLForm from './forms/i-i-s-postamat7-транзакция-l';
import IISPostamat7ХранениеLForm from './forms/i-i-s-postamat7-хранение-l';
import IISPostamat7ЛогистикаEForm from './forms/i-i-s-postamat7-логистика-e';
import IISPostamat7ПользовательEForm from './forms/i-i-s-postamat7-пользователь-e';
import IISPostamat7ПостаматEForm from './forms/i-i-s-postamat7-постамат-e';
import IISPostamat7СлужбаДоставкиEForm from './forms/i-i-s-postamat7-служба-доставки-e';
import IISPostamat7ТранзакцияEForm from './forms/i-i-s-postamat7-транзакция-e';
import IISPostamat7ХранениеEForm from './forms/i-i-s-postamat7-хранение-e';
import IISPostamat7ЛогистикаModel from './models/i-i-s-postamat7-логистика';
import IISPostamat7ПользовательModel from './models/i-i-s-postamat7-пользователь';
import IISPostamat7ПостаматModel from './models/i-i-s-postamat7-постамат';
import IISPostamat7ПосылкаModel from './models/i-i-s-postamat7-посылка';
import IISPostamat7СлужбаДоставкиModel from './models/i-i-s-postamat7-служба-доставки';
import IISPostamat7ТранзакцияModel from './models/i-i-s-postamat7-транзакция';
import IISPostamat7ХранениеModel from './models/i-i-s-postamat7-хранение';
import IISPostamat7ЯчейкаModel from './models/i-i-s-postamat7-ячейка';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-postamat7-логистика': IISPostamat7ЛогистикаModel,
    'i-i-s-postamat7-пользователь': IISPostamat7ПользовательModel,
    'i-i-s-postamat7-постамат': IISPostamat7ПостаматModel,
    'i-i-s-postamat7-посылка': IISPostamat7ПосылкаModel,
    'i-i-s-postamat7-служба-доставки': IISPostamat7СлужбаДоставкиModel,
    'i-i-s-postamat7-транзакция': IISPostamat7ТранзакцияModel,
    'i-i-s-postamat7-хранение': IISPostamat7ХранениеModel,
    'i-i-s-postamat7-ячейка': IISPostamat7ЯчейкаModel
  },

  'application-name': 'Postamat7',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Postamat7',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Postamat7',
          title: 'Postamat7'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        postamat7: {
          caption: 'Postamat7',
          title: 'Postamat7',
          'i-i-s-postamat7-пользователь-l': {
            caption: 'Пользователь',
            title: ''
          },
          'i-i-s-postamat7-транзакция-l': {
            caption: 'Транзакция',
            title: ''
          },
          'i-i-s-postamat7-служба-доставки-l': {
            caption: 'Служба доставки',
            title: ''
          },
          'i-i-s-postamat7-логистика-l': {
            caption: 'Логистика',
            title: ''
          },
          'i-i-s-postamat7-постамат-l': {
            caption: 'Постамат',
            title: ''
          },
          'i-i-s-postamat7-хранение-l': {
            caption: 'Хранение',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-postamat7-логистика-l': IISPostamat7ЛогистикаLForm,
    'i-i-s-postamat7-пользователь-l': IISPostamat7ПользовательLForm,
    'i-i-s-postamat7-постамат-l': IISPostamat7ПостаматLForm,
    'i-i-s-postamat7-служба-доставки-l': IISPostamat7СлужбаДоставкиLForm,
    'i-i-s-postamat7-транзакция-l': IISPostamat7ТранзакцияLForm,
    'i-i-s-postamat7-хранение-l': IISPostamat7ХранениеLForm,
    'i-i-s-postamat7-логистика-e': IISPostamat7ЛогистикаEForm,
    'i-i-s-postamat7-пользователь-e': IISPostamat7ПользовательEForm,
    'i-i-s-postamat7-постамат-e': IISPostamat7ПостаматEForm,
    'i-i-s-postamat7-служба-доставки-e': IISPostamat7СлужбаДоставкиEForm,
    'i-i-s-postamat7-транзакция-e': IISPostamat7ТранзакцияEForm,
    'i-i-s-postamat7-хранение-e': IISPostamat7ХранениеEForm
  },

});

export default translations;
