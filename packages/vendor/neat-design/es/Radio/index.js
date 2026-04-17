/**
 * @file index.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 * @author pipi(peter.rao@derbysoft.net)
 */

import { Radio as AntRadio } from 'antd';
import InternalRadio from "./Radio";
import Group from "./Group";
var Radio = InternalRadio;
Radio.Group = Group;
Radio.Button = AntRadio.Button;
export default Radio;