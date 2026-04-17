// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import HelpCircleFilledSVG from '../icons-svg/lib/HelpCircleFilled'
import Icon, { type BaseIconProps } from '../components'

const HelpCircleFilled = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={HelpCircleFilledSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    HelpCircleFilled.displayName = 'HelpCircleFilled'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(HelpCircleFilled)