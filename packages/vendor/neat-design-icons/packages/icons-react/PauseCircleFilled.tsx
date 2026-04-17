// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import PauseCircleFilledSVG from '../icons-svg/lib/PauseCircleFilled'
import Icon, { type BaseIconProps } from '../components'

const PauseCircleFilled = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={PauseCircleFilledSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    PauseCircleFilled.displayName = 'PauseCircleFilled'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(PauseCircleFilled)