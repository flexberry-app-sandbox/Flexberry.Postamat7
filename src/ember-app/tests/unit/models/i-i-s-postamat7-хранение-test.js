import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-postamat7-хранение', 'Unit | Model | i-i-s-postamat7-хранение', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-postamat7-логистика',
    'model:i-i-s-postamat7-пользователь',
    'model:i-i-s-postamat7-постамат',
    'model:i-i-s-postamat7-посылка',
    'model:i-i-s-postamat7-служба-доставки',
    'model:i-i-s-postamat7-транзакция',
    'model:i-i-s-postamat7-хранение',
    'model:i-i-s-postamat7-ячейка',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
