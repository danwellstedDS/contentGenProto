/**
 * @file genSubComponentsToken.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Vendors
import { genToken as genActionIconToken } from "../../Action/token";
import { genToken as genArrowIconToken } from "../../ArrowIcon/token";
import { genToken as genCloseButtonToken } from "../../CloseButton/token";
import { default as genScrollToken } from "../../ConfigProvider/token/genScrollToken";
import { genToken as genLabelToken } from "../../Label/token";

// Types

export function genSubComponentsToken(token) {
  return {
    Action: genActionIconToken(token),
    ArrowIcon: genArrowIconToken(token),
    CloseButton: genCloseButtonToken(token),
    Label: genLabelToken(token),
    Scroll: genScrollToken(token)
  };
}