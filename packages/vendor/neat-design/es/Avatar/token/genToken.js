// Vendors
import isNumber from 'lodash/isNumber';

// Types

export default function genToken(token) {
  return {
    /**
     * Color
     */
    'avatar-color-text': token['color-primary'],
    'avatar-color-icon': token['color-primary'],
    'avatar-color-bg': token['color-bg-enhance'],
    'avatar-color-bg-link': token['color-bg-press'],
    'avatar-color-border': token['color-border-inverse'],
    /**
     * Font Size
     */
    'avatar-font-size-small': token['font-size-body-medium'],
    'avatar-font-size-medium': token['font-size-header-5'],
    'avatar-font-size-large': token['font-size-header-3'],
    /**
     * Size
     */
    'avatar-size-small': token['size-4x'],
    'avatar-size-medium': token['size-5x'],
    'avatar-size-large': token['size-8x'],
    'avatar-size-icon-small': token['size-static-20'],
    'avatar-size-icon-medium': token['size-3x'],
    'avatar-size-icon-large': token['size-5x'],
    /**
     * Border Radius
     */
    'avatar-border-radius': token['border-radius-circle'],
    /**
     * Group Gap
     * (no docs)
     */

    'avatar-group-gap': -(isNumber(token['size-static-10']) ? token['size-static-10'] : 10)
  };
}