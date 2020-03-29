import { IsString, MinLength, MaxLength, Matches, IsEmail } from 'class-validator';

export class AuthCredencialsDto {
    @IsEmail()
    email: string;

    @IsString()
    @MinLength(4)
    @MaxLength(20)
    username: string;

    @IsString()
    @MinLength(8)
    @MaxLength(20)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
        {message: 'Minimo 1 letra maiuscula, 1 minuscula, 1 caracter especial ou 1 numero'})
    password: string;
}