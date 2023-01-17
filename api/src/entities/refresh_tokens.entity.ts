import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';

@Entity('REFRESH_TOKENS')
export class RefreshTokensEntity {
  @PrimaryColumn({ type: 'varchar', length: 30 })
  user_id: string;

  @Column({ type: 'varchar', length: 255 })
  refresh_token: string;

  @Column({ type: 'datetime', precision: 6 })
  expired_at: Date;

  @Column({ type: 'datetime', precision: 6 })
  created_at: Date;

  @Column({ type: 'datetime', precision: 6 })
  updated_at: Date;
}
