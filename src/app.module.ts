import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatalogoModule } from './catalogo/catalogo.module';
import { ProdutoMapper } from './catalogo/data/produto.mapper';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost', //TODO: alterar para arquivo de ambiente
      port: 3306, //TODO: alterar para arquivo de ambiente
      username: 'user', //TODO: alterar para arquivo de ambiente
      password: 'user', //TODO: alterar para arquivo de ambiente
      database: 'loja', //TODO: alterar para arquivo de ambiente
      entities: [ProdutoMapper],
      synchronize: true, //TODO: alterar para arquivo de ambiente
    }),
    CatalogoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
