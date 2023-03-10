import { ConsoleLogger, Injectable, Logger } from '@nestjs/common';

@Injectable()
export class LoggerService extends ConsoleLogger {
  private readonly logger = new Logger();

  method(message: string) {
    this.logger.debug('Debug log message');
    this.logger.verbose('Verbose log message');
    this.logger.log('Info log message');
    this.logger.warn('Warning log message');
  }
}
