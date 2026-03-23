import { IsString, IsArray, IsOptional, IsInt, Min, ArrayMinSize, ArrayMaxSize, IsEnum } from 'class-validator';

enum GameType {
  SINGLES = 'SINGLES',
  DOUBLES = 'DOUBLES',
}

export class CreateGameDto {
  @IsString()
  sessionId: string;

  @IsEnum(GameType)
  type: GameType;

  @IsArray()
  @IsString({ each: true })
  @ArrayMinSize(1)
  @ArrayMaxSize(2)
  teamAPlayerIds: string[];

  @IsArray()
  @IsString({ each: true })
  @ArrayMinSize(1)
  @ArrayMaxSize(2)
  teamBPlayerIds: string[];
}

export class CompleteGameDto {
  @IsInt()
  @Min(0)
  shuttlesUsed: number;

  @IsString() // Either 'TeamA' or 'TeamB'
  winner: string; 
}

export class AssignCourtDto {
  @IsString()
  courtId: string;
}
