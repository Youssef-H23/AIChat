import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  getAll() {
    return this.productService.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.productService.getById(id);
  }

  @Post()
  create(@Body() data: { name: string; description?: string; price: number }) {
    return this.productService.create(data);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: { name?: string; description?: string; price?: number }) {
    return this.productService.update(id, data);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.productService.delete(id);
  }
}
