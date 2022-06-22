import { Prop, Schema, SchemaFactory, SchemaOptions } from '@nestjs/mongoose';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

const options: SchemaOptions = {
  timestamps: true,
};

@Schema(options)
export class Cat extends Document {
  @Prop({
    required: true,
    unique: true,
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @Prop()
  @IsString()
  @IsNotEmpty()
  name: string;

  @Prop()
  @IsString()
  @IsNotEmpty()
  passWord: string;

  @Prop()
  imgUrl: string;
}

export const CatSchema = SchemaFactory.createForClass(Cat);
