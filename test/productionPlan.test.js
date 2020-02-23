const expect = require('chai').expect;
const { Province, sampleProvinceData } = require('../4/productionPlan');

describe('province', function () {
  it('shortfall', function () {
    let asia = new Province(sampleProvinceData);
    expect(asia.shortfall).equal(5);
  });
});

