// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import InfoCircleFilledSVG from '../icons-svg/lib/InfoCircleFilled'
import Icon, { type BaseIconProps } from '../components'

const InfoCircleFilled = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={InfoCircleFilledSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    InfoCircleFilled.displayName = 'InfoCircleFilled'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(InfoCircleFilled)