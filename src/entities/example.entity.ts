import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Example {
  @PrimaryGeneratedColumn()
  readonly id: string;

  @Column()
  col_name_1: string;

  @Column()
  ccol_name_2: number;

  @Column()
  col_name_3: boolean;
}
