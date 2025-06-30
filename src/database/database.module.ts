import { Module, Global, Provider, Logger } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as mysql from 'mysql2/promise';

export const MYSQL_CONNECTION = 'MYSQL_CONNECTION';

const dbProvider: Provider = {
  provide: MYSQL_CONNECTION,
  inject: [ConfigService],
  useFactory: async (configService: ConfigService): Promise<mysql.Pool> => {
    try {
      const pool = mysql.createPool({
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT', 3306),
        user: configService.get<string>('DB_USER'),
        password: configService.get<string>('DB_PASS'),
        database: configService.get<string>('DB_NAME'),
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0,
      });

      await pool.query('SELECT 1');
      Logger.log('✅ Database connection established successfully!');

      return pool;
    } catch (error) {
      Logger.error('❌ Database connection failed:', error);
      throw error;
    }
  },
};

@Global()
@Module({
  imports: [ConfigModule],
  providers: [dbProvider],
  exports: [dbProvider],
})
export class DatabaseModule {}
