// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import ArrowDownSMSVG from '../icons-svg/lib/ArrowDownSM'
import Icon, { type BaseIconProps } from '../components'

const ArrowDownSM = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={ArrowDownSMSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    ArrowDownSM.displayName = 'ArrowDownSM'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(ArrowDownSM)