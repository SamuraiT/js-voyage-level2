function selectOptimalCoupons(payment, coupons){
    ans_with_cou500 = calcComibinationOfCoupons(payment, coupons)
    ans = calcComibinationOfCoupons(payment, coupons.slice(0,2).concat(0))

    if (ans_with_cou500[0] < ans[0])
        return ans_with_cou500[1]
    else
        return ans[1]
}

function calcComibinationOfCoupons(payment, coupons){
    var coupons = couponLists(coupons)
    for (c in coupons){
        coupon = coupons[c]
        for (var i = 1; i <= coupon.currentNumber; i++){
            if (coupon.number >= coupon.max) break;
            if (payment >= coupon.cost){
                coupon.number += 1
                payment -= coupon.cost
            } else { break }
        }
        coupons[c] = coupon
        if ((!coupon.is_combinable) && coupon.number > 0)
            return [payment, coupons]
    }
    return [payment, coupons]
}

function couponLists(coupons, set_coupon_number){
    if(typeof(set_coupon_number)==='undefined') set_coupon_number= false;

    if (set_coupon_number){
        return {
        "coupon500":constrain(coupons[2], 1, false, 500, coupons[2]),
        "coupon100":constrain(coupons[1], 3, true, 100, coupons[1]),
        "coupon50":constrain(coupons[0],Infinity, true, 50, coupons[0]),
        }
    } else {
        return {
        "coupon500":constrain(coupons[2], 1, false, 500, 0),
        "coupon100":constrain(coupons[1], 3, true, 100, 0),
        "coupon50":constrain(coupons[0],Infinity, true, 50, 0),
        }
    }
}

function constrain(coupons, max, is_combinable, cost, number){
    return {
        "max":max,
        "currentNumber":coupons,
        "is_combinable":is_combinable,
        "number":number,
        "cost":cost
    }
}

function coupon2array(coupons){
    var t = [];
    for (c in coupons)
        t.push(coupons[c].number)
    return t
}

module.exports = {
    selectOptimalCoupons: selectOptimalCoupons,
    couponLists: couponLists,
    coupon2array: coupon2array
}
