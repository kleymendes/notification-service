import { Injectable } from "@nestjs/common";
import { Console } from "console";
import { NotificationsRepository } from "../repositories/notification-repository";
import { NotificationNotFound } from "./erros/notification-not-found";

interface CancelNotificationRequest {
    notificationId: string;
}

type CancelNotificationResponse = void

@Injectable()
export class CancelNotification {

    constructor(private notificationsRepository: NotificationsRepository) { }

    async execute(request: CancelNotificationRequest): Promise<CancelNotificationResponse> {
        const { notificationId } = request;

        const notification = await this.notificationsRepository.findById(notificationId);

        if (!notification) {
            throw new NotificationNotFound();
        }


        console.log({ notification: notification.id })

        notification.cancel();

        console.log('passou aqui - 2', notification.cancel())
        console.log('passou aqui - save', await this.notificationsRepository.save(notification))

        await this.notificationsRepository.save(notification);
    }
}