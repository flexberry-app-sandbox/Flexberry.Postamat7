import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номерЯчейки: DS.attr('number'),
  хранение: DS.belongsTo('i-i-s-postamat7-хранение', { inverse: null, async: false }),
  постамат: DS.belongsTo('i-i-s-postamat7-постамат', { inverse: 'ячейка', async: false })
});

export let ValidationRules = {
  номерЯчейки: {
    descriptionKey: 'models.i-i-s-postamat7-ячейка.validations.номерЯчейки.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  хранение: {
    descriptionKey: 'models.i-i-s-postamat7-ячейка.validations.хранение.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  постамат: {
    descriptionKey: 'models.i-i-s-postamat7-ячейка.validations.постамат.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЯчейкаE', 'i-i-s-postamat7-ячейка', {
    номерЯчейки: attr('Номер ячейки', { index: 0 }),
    хранение: belongsTo('i-i-s-postamat7-хранение', 'Хранение', {
      номер: attr('Номер', { index: 2, hidden: true }),
      датаНачала: attr('нач', { index: 3, hidden: true }),
      датаЗавершения: attr('зав', { index: 4, hidden: true }),
      продление: attr('про', { index: 5, hidden: true })
    }, { index: 1, displayMemberPath: 'номер' })
  });
};
