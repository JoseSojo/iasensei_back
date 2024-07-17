import { Module } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [NotificationService, PrismaService]
})
export class NotificationModule {}
