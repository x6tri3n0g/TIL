var userData = [
    {
        email: 'john@coldmail.com',
        recommandCount: 2
    },
    {
        email: 'sam@pmail.com',
        recommandCount: 16
    },
    {
        email: 'linda1989@oal.com',
        recommandCount: 1
    },
    {
        email: 'jan1940@ahoy.com',
        recommandCount: 0
    },
    {
        email: 'mrbig@pmail.com',
        recommandCount: 25
    },
    {
        email: 'olo@lol.co',
        recommandCount: 0
    },
];
var couponData = [
    {
        coupon: 'MAYDISCOUNT',
        rank: 'good'
    },
    {
        coupon: '10PERCENT',
        rank: 'bad'
    },
    {
        coupon: 'PROMOTION45',
        rank: 'best'
    },
    {
        coupon: 'IHEARTYOU',
        rank: 'bad'
    },
    {
        coupon: 'GETADEAL',
        rank: 'best'
    },
    {
        coupon: 'ILIKEDISCOUNTS',
        rank: 'good'
    },
];
var RANK = {
    best: 'best',
    good: 'good',
    bad: 'bad'
};
function getUserData() {
    return userData;
}
function getCounponData() {
    return couponData;
}
function subCouponRank(subscriber) {
    if (subscriber.recommandCount >= 10) {
        return RANK.best;
    }
    return RANK.good;
}
function selectCouponsByRank(coupons, rank) {
    var filteredRankCoupons = coupons.filter(function (coupon) { return coupon.rank === rank; });
    return filteredRankCoupons;
}
var ADMIN_EMAIL = 'newsletter@coupondog.co';
function emailForSubscriber(subscriber, coupons) {
    var userRank = subCouponRank(subscriber);
    var userEmail = subscriber.email;
    console.log(userEmail + " sended Coupon email! SUCCESS [" + userRank + "] Coupon");
    if (userRank === RANK.best) {
        return {
            from: ADMIN_EMAIL,
            to: userEmail,
            title: userEmail + "! [BEST] user Coupon Arrived",
            subject: 'Your weekly coupons inside!',
            body: 'Ex anim sint magna mollit est dolor do in Lorem dolor. Ut labore voluptate eu Lorem duis sit laborum officia dolor elit irure exercitation exercitation. Proident officia adipisicing quis cillum minim incididunt laboris eu nisi. Fugiat elit et labore culpa nulla quis nulla pariatur deserunt ex ipsum fugiat. Culpa duis exercitation incididunt. Do ex reprehenderit culpa non ad eiusmod culpa culpa proident duis. Amet pariatur sit adipisicing aliqua officia. Minim enim minim proident sit enim nostrud proident Lorem consequat esse ullamco in.',
            coupons: coupons
        };
    }
    else if (userRank === RANK.good) {
        return {
            from: ADMIN_EMAIL,
            to: userEmail,
            title: userEmail + "! [Good] user Coupon Arrived",
            subject: 'Your weekly coupons inside!',
            body: 'Ex anim sint magna mollit est dolor do in Lorem dolor. Ut labore voluptate eu Lorem duis sit laborum officia dolor elit irure exercitation exercitation. Proident officia adipisicing quis cillum minim incididunt laboris eu nisi. Fugiat elit et labore culpa nulla quis nulla pariatur deserunt ex ipsum fugiat. Culpa duis exercitation incididunt. Do ex reprehenderit culpa non ad eiusmod culpa culpa proident duis. Amet pariatur sit adipisicing aliqua officia. Minim enim minim proident sit enim nostrud proident Lorem consequat esse ullamco in.',
            coupons: coupons
        };
    }
    return {
        from: ADMIN_EMAIL,
        to: userEmail,
        title: userEmail + "! User Coupon Arrived",
        subject: 'Your weekly coupons inside!',
        body: 'Ex anim sint magna mollit est dolor do in Lorem dolor. Ut labore voluptate eu Lorem duis sit laborum officia dolor elit irure exercitation exercitation. Proident officia adipisicing quis cillum minim incididunt laboris eu nisi. Fugiat elit et labore culpa nulla quis nulla pariatur deserunt ex ipsum fugiat. Culpa duis exercitation incididunt. Do ex reprehenderit culpa non ad eiusmod culpa culpa proident duis. Amet pariatur sit adipisicing aliqua officia. Minim enim minim proident sit enim nostrud proident Lorem consequat esse ullamco in.',
        coupons: coupons
    };
}
/*
  Coupon 발급 완료 이메일 알림 시스템
*/
function main() {
    var userList = getUserData();
    var couponList = getCounponData();
    var bestCounpons = couponList.filter(function (coupon) { return coupon.rank === RANK.best; });
    var goodCounpons = couponList.filter(function (coupon) { return coupon.rank === RANK.good; });
    var bestUserMessages = userList.map(function (user) { return emailForSubscriber(user, bestCounpons); });
    var goodUserMessages = userList.map(function (user) { return emailForSubscriber(user, goodCounpons); });
}
main();
