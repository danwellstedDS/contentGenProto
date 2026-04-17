/**
 * @file index.ts
 * @author pipi(peter.rao@derbysoft.net)
 */
import { notification as AntNotification } from 'antd';
import type { NotificationInstance } from 'antd/lib/notification/interface';
export type NoticeMethods = Pick<NotificationInstance, 'success' | 'info' | 'warning' | 'error'>;
export type NotificationType = typeof AntNotification;
declare const notification: NotificationType;
export default notification;
