import { Content } from "../../src/application/entities/content";
import { Notification, NotificationProps } from "../../src/application/entities/notification";


type Override = Partial<NotificationProps>;

export function MakeNotification(Override: Override = {}) {
    return new Notification({
        category: 'social',
        content: new Content('Nova solicitação de amizade!'),
        recipientId: 'recipient-2',
        ...Override
    })
}