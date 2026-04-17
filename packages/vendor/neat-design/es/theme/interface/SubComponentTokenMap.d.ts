/**
 * @file SubComponentTokenMap.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
import type { ActionToken } from '../../Action/token';
import type { ArrowIconToken } from '../../ArrowIcon/token';
import type { CloseButtonToken } from '../../CloseButton/token';
import type { ScrollToken } from '../../ConfigProvider/token/ScrollToken';
import type { LabelToken } from '../../Label/token';
export default interface SubComponentTokenMap {
    Action: ActionToken;
    ArrowIcon: ArrowIconToken;
    CloseButton: CloseButtonToken;
    Label: LabelToken;
    Scroll: ScrollToken;
}
