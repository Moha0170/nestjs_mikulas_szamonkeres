import { IsBoolean, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateChildDto {

    @IsNotEmpty()
    @IsString()
    name: string

    @IsNotEmpty()
    @IsString()
    country: string

    @IsNotEmpty()
    @IsString()
    city: string

    @IsNotEmpty()
    @IsNumber()
    zipCode: number

    @IsNotEmpty()
    @IsString()
    streetName: string

    @IsNotEmpty()
    @IsString()
    streetType: string

    @IsNotEmpty()
    @IsNumber()
    houseNumber: number

    @IsNotEmpty()
    @IsNumber()
    floor: number

    @IsNotEmpty()
    @IsNumber()
    apartmant: number

    @IsNotEmpty()
    @IsBoolean()
    wasGood: boolean
}
