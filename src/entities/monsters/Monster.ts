export interface MonsterData {
  id: string;
  name: string;
  type: 'normal' | 'elite' | 'boss';
  hp: number;
  speed: number;
  reward: number;
  isFlying: boolean;
  immuneToGroundTraps?: boolean;
  specialAbility?: string | null;
  unlockWave?: number;
}