import { Material } from "@prisma/client";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateToyDto {
    @IsNotEmpty()
    @IsString()
    name: string

    @IsNotEmpty()
    material: Material

    @IsNotEmpty()
    @IsNumber()
    weight: number
}
