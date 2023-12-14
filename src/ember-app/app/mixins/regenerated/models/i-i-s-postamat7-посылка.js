import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номер: DS.attr('number'),
  статус: DS.attr('i-i-s-postamat7-статусы'),
  логистика: DS.belongsTo('i-i-s-postamat7-логистика', { inverse: null, async: false }),
  транзакция: DS.belongsTo('i-i-s-postamat7-транзакция', { inverse: null, async: false }),
  хранение: DS.belongsTo('i-i-s-postamat7-хранение', { inverse: 'посылка', async: false })
});

export let ValidationRules = {
  номер: {
    descriptionKey: 'models.i-i-s-postamat7-посылка.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  статус: {
    descriptionKey: 'models.i-i-s-postamat7-посылка.validations.статус.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  логистика: {
    descriptionKey: 'models.i-i-s-postamat7-посылка.validations.логистика.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  транзакция: {
    descriptionKey: 'models.i-i-s-postamat7-посылка.validations.транзакция.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  хранение: {
    descriptionKey: 'models.i-i-s-postamat7-посылка.validations.хранение.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПосылкаE', 'i-i-s-postamat7-посылка', {
    номер: attr('Номер', { index: 0 }),
    статус: attr('Статус', { index: 1 })
  });
};
