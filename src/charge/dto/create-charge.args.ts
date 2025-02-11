import { ArgsType, Field, ID, registerEnumType } from "@nestjs/graphql";
import { Charge } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime/library";
import {
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
} from "class-validator";

export enum ChargeEnumType {
  TAX = "TAX",
  FEE = "FEE",
  DISCOUNT = "DISCOUNT",
}

registerEnumType(ChargeEnumType, {
  name: "ChargeEnumType",
});

@ArgsType()
export class CreateChargeArgs
  implements Omit<Charge, "id" | "createdAt" | "updatedAt">
{
  @Field(() => String)
  @IsString()
  name: string;

  @Field(() => String)
  @IsString()
  acronym: string;

  @Field(() => Number)
  @IsNumber()
  percentage: Decimal;

  @Field(() => ChargeEnumType)
  @IsEnum(["TAX", "FEE", "DISCOUNT"])
  type: string;

  @Field(() => ID)
  @IsUUID()
  @IsOptional()
  storeId: string;

  @Field(() => ID, {
    nullable: true,
  })
  @IsUUID()
  @IsOptional()
  categoryId: string;

  @Field(() => ID, {
    nullable: true,
  })
  @IsUUID()
  @IsOptional()
  serviceId: string;

  @Field(() => ID, {
    nullable: true,
  })
  @IsUUID()
  @IsOptional()
  productId: string;
}
