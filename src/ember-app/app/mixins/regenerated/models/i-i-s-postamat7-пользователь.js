import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номер: DS.attr('number'),
  номерТелефона: DS.attr('number'),
  фИО: DS.attr('string')
});

export let ValidationRules = {
  номер: {
    descriptionKey: 'models.i-i-s-postamat7-пользователь.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  номерТелефона: {
    descriptionKey: 'models.i-i-s-postamat7-пользователь.validations.номерТелефона.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  фИО: {
    descriptionKey: 'models.i-i-s-postamat7-пользователь.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПользовательE', 'i-i-s-postamat7-пользователь', {
    фИО: attr('ФИО', { index: 0 }),
    номер: attr('Номер', { index: 1 }),
    номерТелефона: attr('Номер телефона', { index: 2 })
  });

  modelClass.defineProjection('ПользовательL', 'i-i-s-postamat7-пользователь', {
    фИО: attr('ФИО', { index: 0 }),
    номер: attr('Номер', { index: 1 }),
    номерТелефона: attr('Номер телефона', { index: 2 })
  });
};
