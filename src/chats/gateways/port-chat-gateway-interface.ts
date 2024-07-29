import { Chat } from '../entities/chat.entity';

/**
 * Aqui tenho minha porta que estabelece esse contrato
 * Sempre receber como parametro uma entidade de chat e retornar a promise da mesma
 */
export interface PortChatGatewayInterface {
    startChat(chat: Chat): Promise<Chat>;
}
