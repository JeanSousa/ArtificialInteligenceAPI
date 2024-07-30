import { Inject, Injectable } from '@nestjs/common';
import { StartChatDTO } from './dto/start-chat.dto';
import { PortChatGatewayInterface } from './gateways/port-chat-gateway-interface';
import { Chat } from './entities/chat.entity';

@Injectable()
export class ChatsService {
    // No nestjs não podemos injetar interfaces typescript/js diretamente
    // inject do nest para injetar uma interface da implementação que usa o token ChatGatewayInterface
    // estou utilizando a implementação embora tipo a interface
    constructor(
        @Inject('ChatGatewayInterface')
        private chatIntegrationGateway: PortChatGatewayInterface, // chatIntegrationGateway é a implementação desconhecida, podendo ser trocada no module
    ) {}
    async startChat(startChatDTO: StartChatDTO) {
        const { userUuid, message } = startChatDTO;
        const chat = new Chat(userUuid, message);
        await this.chatIntegrationGateway.startChat(chat);
        return chat;
    }
}
