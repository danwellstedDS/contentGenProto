/**
 * @file genToken.ts
 * @author pipi(peter.rao@derbysoft.net)
 */

// Types

export default function genToken(token) {
  return {
    /**
     * Color
     */
    'notification-color-text': token['color-text-primary'],
    'notification-color-text-link': token['color-text-link'],
    'notification-color-text-link-hover': token['color-text-link-hover'],
    'notification-color-text-link-disabled': token['color-text-link-disabled'],
    'notification-color-icon-info': token['color-info'],
    'notification-color-icon-success': token['color-positive'],
    'notification-color-icon-warning': token['color-notice'],
    'notification-color-icon-error': token['color-negative'],
    'notification-color-bg-info': token['color-info-sunken'],
    'notification-color-bg-success': token['color-positive-sunken'],
    'notification-color-bg-warning': token['color-notice-sunken'],
    'notification-color-bg-error': token['color-negative-sunken'],
    'notification-color-border-info': token['color-info-enhance'],
    'notification-color-border-success': token['color-positive-enhance'],
    'notification-color-border-warning': token['color-notice-enhance'],
    'notification-color-border-error': token['color-negative-enhance'],
    'notification-color-border-info-hover': token['color-info'],
    'notification-color-border-success-hover': token['color-positive'],
    'notification-color-border-warning-hover': token['color-notice'],
    'notification-color-border-error-hover': token['color-negative'],
    /**
     * Font Size
     */
    'notification-font-size': token['font-size-body-medium'],
    'notification-font-size-link': token['font-size-body-small'],
    /**
     * Line Height
     */
    'notification-line-height': token['line-height-static-20'],
    /**
     * Size
     */
    'notification-size-icon': token['size-static-20'],
    /**
     * Spacing
     */
    'notification-gap': token['spacing-base'],
    'notification-gap-text': token['spacing-extra-tight'],
    'notification-gap-action': token['spacing-loose'],
    'notification-padding-v': token['spacing-base'],
    'notification-padding-h': token['spacing-base'],
    /**
     * Border Radius
     */
    'notification-border-radius': token['border-radius-base']
  };
}