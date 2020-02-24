const expect = require('chai').expect;
const { Province, sampleProvinceData } = require('../4/productionPlan');

describe('province', function () {
  let asia;
  beforeEach(function () {
    asia = new Province(sampleProvinceData);
  });


  it('shortfall', function () {
    expect(asia.shortfall).equal(5);
  });

  it('profit', function () {
    expect(asia.profit).equal(230);
  });

  it('change production', function () {
    asia.producers[0].production = 20;
    expect(asia.shortfall).equal(-6);
    expect(asia.profit).equal(292);
  });
});

describe('no producers', function () {
  let noProducers;

  beforeEach(function () {
    const data = {
      name: "No producers",
      producers: [],
      demand: 30,
      price: 20
    };
    noProducers = new Province(data);
  });

  it('shortfall', function () {
    expect(noProducers.shortfall).equal(30);
  });

  it('profit', function () {
    expect(noProducers.profit).equal(0);
  });
});
