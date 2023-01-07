import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity('POSTS')
export class PostsEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  post_id: number;
  @PrimaryColumn({ type: 'varchar', length: 30, default: null })
  user_id: string | null;

  @Column({ type: 'varchar', length: 45 })
  title: string;

  @Column({ type: 'varchar', length: 255 })
  body: string;

  @Column({ type: 'varchar', length: 15 })
  price: string;

  @Column({ type: 'varchar', length: 30 })
  end_date: string;

  @Column({ type: 'varchar', length: 15, default: null })
  seat_number: string | null;

  @Column({ type: 'varchar', length: 25 })
  region: string;

  @Column({ type: 'varchar', length: 300, default: null })
  img_url: string | null;

  @Column({ type: 'varchar', length: 10 })
  status: string;

  @Column({ type: 'int' })
  views: number;

  @Column({ type: 'datetime', precision: 6 })
  created_at: Date;
}
