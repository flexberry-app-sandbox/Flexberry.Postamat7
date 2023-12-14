import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-postamat7-служба-доставки', 'Unit | Serializer | i-i-s-postamat7-служба-доставки', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-postamat7-служба-доставки',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-postamat7-оплата',
    'transform:i-i-s-postamat7-состояние',
    'transform:i-i-s-postamat7-статус',
    'transform:i-i-s-postamat7-статусы',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
