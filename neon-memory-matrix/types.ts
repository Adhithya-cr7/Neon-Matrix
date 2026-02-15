export enum Screen {
  START = 'START',
  GAME = 'GAME',
  GAME_OVER = 'GAME_OVER'
}

export interface GameConfig {
  gridSize: number;
  speed: number;
}

export interface ScoreData {
  points: number;
  level: number;
}
