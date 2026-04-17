/**
 * @file neatToken2AntToken.ts
 * @author pipi(peter.rao@derbysoft.net)
 */

// Types

export default function neatToken2AntToken(theme) {
  var token = theme.components.Breadcrumb;
  return {
    iconFontSize: token['breadcrumbs-font-size'],
    itemColor: token['breadcrumbs-color-text'],
    lastItemColor: token['breadcrumbs-color-text-active'],
    linkColor: token['breadcrumbs-color-text'],
    linkHoverColor: token['breadcrumbs-color-text-hover'],
    separatorColor: token['breadcrumbs-color-icon'],
    separatorMargin: token['breadcrumbs-gap']
  };
}