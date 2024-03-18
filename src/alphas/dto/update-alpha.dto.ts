import { PartialType } from '@nestjs/mapped-types';
import { CreateAlphaDto } from './create-alpha.dto';

export class UpdateAlphaDto extends PartialType(CreateAlphaDto) {}
