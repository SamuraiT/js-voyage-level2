var assert = require("assert")
var coupon = require("./coupon.js")

describe('selectOptimalCoupons', function(){
    it('should return opitimal coupon lists', function(){
            assert.deepEqual(
                coupon.coupon2array(coupon.couponLists([0,0,0], true)),
                coupon.coupon2array(coupon.selectOptimalCoupons(100,[0,0,0]))
            );
            assert.deepEqual(
                coupon.coupon2array(coupon.couponLists([0,1,0], true)),
                coupon.coupon2array(coupon.selectOptimalCoupons(100,[2,1,0]))
            );
            assert.deepEqual(
                coupon.coupon2array(coupon.couponLists([3,3,0], true)),
                coupon.coupon2array(coupon.selectOptimalCoupons(470,[3,5,1]))
            );
            assert.deepEqual(
                coupon.coupon2array(coupon.couponLists([0,0,1], true)),
                coupon.coupon2array(coupon.selectOptimalCoupons(590,[1,4,2]))
            );
            assert.deepEqual(
                coupon.coupon2array(coupon.couponLists([6,3,0], true)),
                coupon.coupon2array(coupon.selectOptimalCoupons(1230,[6,5,2]))
            );


    })
})

