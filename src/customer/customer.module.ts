import { TypeOrmModule } from '@nestjs/typeorm';
import { Module, forwardRef } from '@nestjs/common';
import { InvoiceModule } from '../invoice/invoice.module';
import { CustomerModel } from './customer.model';
import { CustomerService } from './customer.service';
import { CustomerResolver } from './customer.resolver';

@Module({
  imports: [forwardRef(() => InvoiceModule), TypeOrmModule.forFeature([CustomerModel])],
  providers: [CustomerService, CustomerResolver],
  exports: [CustomerService],
})
export class CustomerModule {}
