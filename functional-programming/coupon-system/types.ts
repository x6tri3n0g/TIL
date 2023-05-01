export type RankType = 'best' | 'good' | 'bad';

interface RankTypeObject {
  [key: string]: RankType;
}

export const RANK: RankTypeObject = {
  best: 'best',
  good: 'good',
  bad: 'bad',
}

export interface UserData {
  email: string;
  recommandCount: number;
}

export interface CounponData {
  coupon: string;
  rank: RankType;
}