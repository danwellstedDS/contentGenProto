/**
 * @file size.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Vendors
import { formatBoundsGap } from "./position";

// Types

export var getBarMaxWidth = function getBarMaxWidth(boundSize, boundsGap) {
  var boundsGapArr = formatBoundsGap(boundsGap);
  return boundSize.offsetWidth - boundsGapArr[1] - boundsGapArr[3];
};