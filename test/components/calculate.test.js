const fixtures = require('../fixtures/calculatorValues')
const calculate = require('../../components/calculate')

it('works with simple example', () => {
  expect(calculate(fixtures.simpleAchievementCodes)).toEqual(fixtures.simpleSecretCodes);
});

it('works with actual example', () => {
  expect(calculate(fixtures.actualAchievementCodes)).toEqual(fixtures.actualSecretCodes);
});
