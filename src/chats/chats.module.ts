import { Module } from '@nestjs/common';
import { ChatsService } from './chats.service';
import { ChatsController } from './chats.controller';
import { HttpModule } from '@nestjs/axios';
import { AdapterGptChatGateway } from './gateways/adapter-gpt-chat-gateway';

@Module({
    imports: [
        HttpModule.register({
            baseURL: 'http://localhost:8000', // Basta trocar a baseUrl pela base url da nova API
        }),
    ],
    controllers: [ChatsController],
    providers: [
        ChatsService,
        AdapterGptChatGateway,
        {
            // Nao posso registrar uma interface entao eu vou usar um serviço existente,
            // o token ChatGatewayInterface referencia ele
            provide: 'ChatGatewayInterface',
            useExisting: AdapterGptChatGateway, // Basta registrar outro adapter aqui para trocar a tecnologia
        },
    ],
})
export class ChatsModule {}
