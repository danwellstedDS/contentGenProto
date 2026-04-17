/**
 * @file NotificationToken.ts
 * @author pipi(peter.rao@derbysoft.net)
 */
export interface NotificationToken {
    /**
     * Color
     */
    'notification-color-text': string;
    'notification-color-text-link': string;
    'notification-color-text-link-hover': string;
    'notification-color-text-link-disabled': string;
    'notification-color-icon-info': string;
    'notification-color-icon-success': string;
    'notification-color-icon-warning': string;
    'notification-color-icon-error': string;
    'notification-color-bg-info': string;
    'notification-color-bg-success': string;
    'notification-color-bg-warning': string;
    'notification-color-bg-error': string;
    'notification-color-border-info': string;
    'notification-color-border-success': string;
    'notification-color-border-warning': string;
    'notification-color-border-error': string;
    'notification-color-border-info-hover': string;
    'notification-color-border-success-hover': string;
    'notification-color-border-warning-hover': string;
    'notification-color-border-error-hover': string;
    /**
     * Font Size
     */
    'notification-font-size': number;
    'notification-font-size-link': number;
    /**
     * Line Height
     */
    'notification-line-height': string;
    /**
     * Size
     */
    'notification-size-icon': number;
    /**
     * Spacing
     */
    'notification-gap': number;
    'notification-gap-text': number;
    'notification-gap-action': number;
    'notification-padding-v': number;
    'notification-padding-h': number;
    /**
     * Border Radius
     */
    'notification-border-radius': number;
}
