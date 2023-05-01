import { CounponData, UserData, RANK, RankType  } from "./types";
import { getUserData, getCounponData } from './services' ;

function subCouponRank(subscriber: UserData): RankType {
  if (subscriber.recommandCount >= 10) {
    return RANK.best;
  }

  return RANK.good;
}

function selectCouponsByRank(coupons: CounponData[], rank: RankType) {
  const filteredRankCoupons = coupons.filter((coupon) => coupon.rank === rank);
  return filteredRankCoupons;
}

const ADMIN_EMAIL = 'newsletter@coupondog.co';

function emailForSubscriber(subscriber: UserData, coupons: CounponData[]) {
  const userRank = subCouponRank(subscriber);
  const userEmail = subscriber.email;

  console.log(`${userEmail} sended Coupon email! SUCCESS [${userRank}] Coupon`);
  
  if (userRank === RANK.best) {
    return {
      from: ADMIN_EMAIL,
      to: userEmail,
      title: `${userEmail}! [BEST] user Coupon Arrived`,
      subject: 'Your weekly coupons inside!',
      body: 'Ex anim sint magna mollit est dolor do in Lorem dolor. Ut labore voluptate eu Lorem duis sit laborum officia dolor elit irure exercitation exercitation. Proident officia adipisicing quis cillum minim incididunt laboris eu nisi. Fugiat elit et labore culpa nulla quis nulla pariatur deserunt ex ipsum fugiat. Culpa duis exercitation incididunt. Do ex reprehenderit culpa non ad eiusmod culpa culpa proident duis. Amet pariatur sit adipisicing aliqua officia. Minim enim minim proident sit enim nostrud proident Lorem consequat esse ullamco in.',
      coupons,
    }
  } else if (userRank === RANK.good) {
    return {
      from: ADMIN_EMAIL,
      to: userEmail,
      title: `${userEmail}! [Good] user Coupon Arrived`,
      subject: 'Your weekly coupons inside!',
      body: 'Ex anim sint magna mollit est dolor do in Lorem dolor. Ut labore voluptate eu Lorem duis sit laborum officia dolor elit irure exercitation exercitation. Proident officia adipisicing quis cillum minim incididunt laboris eu nisi. Fugiat elit et labore culpa nulla quis nulla pariatur deserunt ex ipsum fugiat. Culpa duis exercitation incididunt. Do ex reprehenderit culpa non ad eiusmod culpa culpa proident duis. Amet pariatur sit adipisicing aliqua officia. Minim enim minim proident sit enim nostrud proident Lorem consequat esse ullamco in.',
      coupons,
    }
  }

  return  {
    from: ADMIN_EMAIL,
    to: userEmail,
    title: `${userEmail}! User Coupon Arrived`,
    subject: 'Your weekly coupons inside!',
    body: 'Ex anim sint magna mollit est dolor do in Lorem dolor. Ut labore voluptate eu Lorem duis sit laborum officia dolor elit irure exercitation exercitation. Proident officia adipisicing quis cillum minim incididunt laboris eu nisi. Fugiat elit et labore culpa nulla quis nulla pariatur deserunt ex ipsum fugiat. Culpa duis exercitation incididunt. Do ex reprehenderit culpa non ad eiusmod culpa culpa proident duis. Amet pariatur sit adipisicing aliqua officia. Minim enim minim proident sit enim nostrud proident Lorem consequat esse ullamco in.',
    coupons,
  }
}

/*
  Coupon 발급 완료 이메일 알림 시스템
*/
function main() {
  const userList = getUserData();
  const couponList = getCounponData();

  const bestCounpons = couponList.filter((coupon) => coupon.rank === RANK.best);
  const goodCounpons = couponList.filter((coupon) => coupon.rank === RANK.good);

  const bestUserMessages = userList.map((user) => emailForSubscriber(user, bestCounpons));
  const goodUserMessages = userList.map((user) => emailForSubscriber(user, goodCounpons));
}

main();