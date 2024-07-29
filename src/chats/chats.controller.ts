import { Controller, Post, Body } from '@nestjs/common';
import { ChatsService } from './chats.service';
import { StartChatDTO } from './dto/start-chat.dto';

@Controller('chats')
export class ChatsController {
    constructor(private readonly chatsService: ChatsService) {}

    @Post()
    startChat(@Body() startChatDTO: StartChatDTO) {
        return this.chatsService.startChat(startChatDTO);
    }
}
