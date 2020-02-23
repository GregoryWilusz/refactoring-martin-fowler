const assert = require('assert');
const { Province, sampleProvinceData } = require('../4/productionPlan');

describe('province', function () {
  it('shortfall', function () {
    let asia = new Province(sampleProvinceData);
    assert.equal(asia.shortfall, 5);
  });
});

