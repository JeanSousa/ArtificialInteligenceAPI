import { Inject, Injectable } from '@nestjs/common';
import { Chat } from '../entities/chat.entity';
import { PortChatGatewayInterface } from './port-chat-gateway-interface';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';

/**
 * Aqui tenho o adapter que faz o envio de uma request ao chat gpt
 */
@Injectable()
export class AdapterGptChatGateway implements PortChatGatewayInterface {
    constructor(
        @Inject(HttpService)
        private httpService: HttpService,
    ) {}
    async startChat(chat: Chat): Promise<Chat> {
        await lastValueFrom(
            this.httpService.post('chatgpt', {
                userUuid: chat.userUuid,
                message: chat.message,
            }),
        );
        return chat;
    }
}
