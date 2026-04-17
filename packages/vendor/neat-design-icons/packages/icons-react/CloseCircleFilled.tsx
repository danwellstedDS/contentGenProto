// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import CloseCircleFilledSVG from '../icons-svg/lib/CloseCircleFilled'
import Icon, { type BaseIconProps } from '../components'

const CloseCircleFilled = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={CloseCircleFilledSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    CloseCircleFilled.displayName = 'CloseCircleFilled'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(CloseCircleFilled)