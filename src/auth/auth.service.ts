import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto/auth.dto';

@Injectable({})
export class AuthService {
  constructor(private prisma : PrismaService){}
  signup(dt0 :AuthDto) {
    return { msg: 'signup' };
  }
  signin() {
    return { msg: 'signin' };
  }
}
