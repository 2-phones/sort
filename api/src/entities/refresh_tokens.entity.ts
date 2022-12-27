import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';

@Entity('REFRESH_TOKENS')
export class RefreshTokensEntity {
  @PrimaryColumn({ type: 'varchar', length: 6 })
  user_id: string;

  @Column({ type: 'varchar', length: 255 })
  token: string;

  @Column({ type: 'datetime', precision: 6 })
  expired_at: Date;

  @Column({ type: 'datetime', precision: 6 })
  created_at: Date;

  @Column({ type: 'datetime', precision: 6, default: null })
  updated_at: Date | null;
}
