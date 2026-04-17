// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import WarningCircleFilledSVG from '../icons-svg/lib/WarningCircleFilled'
import Icon, { type BaseIconProps } from '../components'

const WarningCircleFilled = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={WarningCircleFilledSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    WarningCircleFilled.displayName = 'WarningCircleFilled'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(WarningCircleFilled)