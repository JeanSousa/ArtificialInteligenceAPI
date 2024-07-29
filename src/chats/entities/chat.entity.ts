export class Chat {
    userUuid: string;
    message: string;

    constructor(userUuid: string, message: string) {
        this.userUuid = userUuid;
        this.message = message;
    }
}
