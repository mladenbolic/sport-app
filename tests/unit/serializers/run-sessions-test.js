import { moduleForModel, test } from 'ember-qunit';

moduleForModel('run-sessions', 'Unit | Serializer | run sessions', {
  // Specify the other units that are required for this test.
  needs: ['serializer:run-sessions']
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  var record = this.subject();

  var serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
