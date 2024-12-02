import { IsBoolean, IsNotEmpty, IsString } from "class-validator";

export class CreateChildDto {

    @IsNotEmpty()
    @IsString()
    name: string

    @IsNotEmpty()
    @IsString()
    adress: string

    @IsNotEmpty()
    @IsBoolean()
    wasGood: boolean
}
