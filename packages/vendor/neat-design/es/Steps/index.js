/**
 * @file index.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

import { Steps as AntSteps } from 'antd';
import HorizontalSteps from "./HorizontalSteps";
import NavigationSteps from "./NavigationSteps";
import InternalSteps from "./Steps";
import VerticalSteps from "./VerticalSteps";
var Steps = InternalSteps;
Steps.Step = AntSteps.Step;
Steps.Horizontal = HorizontalSteps;
Steps.Navigation = NavigationSteps;
Steps.Vertical = VerticalSteps;
export default Steps;