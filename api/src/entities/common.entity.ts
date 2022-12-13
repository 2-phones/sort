import { CreateDateColumn, PrimaryColumn } from 'typeorm';

export class CommonEntity {
  @PrimaryColumn()
  user_id: string;

  @CreateDateColumn()
  created_at: Date;
}
