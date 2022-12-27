import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';

@Entity('USERS')
export class UsersEntity {
  @PrimaryColumn({ type: 'varchar', length: 30 })
  user_id: string;

  @Column({ type: 'varchar', length: 30, default: null })
  social_id: string | null;

  @Column({ type: 'varchar', length: 10 })
  login_type: string;

  @Column({ type: 'varchar', length: 30 })
  email: string;

  @Column({ type: 'varchar', length: 30 })
  password: string;

  @Column({ type: 'varchar', length: 30, default: null })
  user_name: string | null;

  @Column({ type: 'varchar', length: 255, default: null })
  profile_url: string | null;

  @CreateDateColumn({ type: 'datetime', precision: 6 })
  created_at: Date;

  @Column({ type: 'datetime', precision: 6, default: null })
  deleted_at: Date;
}
