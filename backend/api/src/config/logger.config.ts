import * as winston from 'winston';
import * as winstonDaily from 'winston-daily-rotate-file';
import { format, transports } from 'winston';
const { combine, timestamp, colorize, printf } = format;

const formatfile = combine(
  timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
  printf(({ timestamp, level, message }) => {
    return `${timestamp} ${level} : ${message}`;
  }),
);

const formatConsole = combine(
  colorize(),
  printf(({ level, message }) => {
    return `[${level}] : ${message}`;
  }),
);

export const winstonLogger = winston.createLogger({
  transports: [
    new winstonDaily({
      level: 'info',
      dirname: './logs',
      filename: `%DATE%.log`,
      maxFiles: 30,
      format: formatfile,
    }),
    new winstonDaily({
      level: 'error',
      datePattern: 'YYYY-MM-DD',
      dirname: './logs/error',
      filename: `%DATE%.error.log`,
      maxFiles: 30,
      zippedArchive: true,
    }),
  ],
});

if (process.env.NODE_ENV !== 'production') {
  winstonLogger.add(
    new transports.Console({
      format: formatConsole,
    }),
  );
}
