/**
 * @file genToken.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Statics
import { ladderColor } from '@derbysoft/neat-design-token';

// Vendors
import { rgba } from '@derbysoft/neat-design-token';

// Types

export default function genToken(token) {
  return {
    'close-btn-color': rgba(ladderColor['neutral-29'], 0.2),
    'close-btn-color-hover': rgba(ladderColor['neutral-29'], 0.4),
    'close-btn-color-inverse': rgba(ladderColor['neutral-0'], 0.8),
    'close-btn-color-inverse-hover': ladderColor['neutral-0'],
    'close-btn-size': token['size-2x']
  };
}