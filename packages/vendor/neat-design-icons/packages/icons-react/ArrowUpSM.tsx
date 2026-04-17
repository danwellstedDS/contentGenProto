// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import ArrowUpSMSVG from '../icons-svg/lib/ArrowUpSM'
import Icon, { type BaseIconProps } from '../components'

const ArrowUpSM = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={ArrowUpSMSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    ArrowUpSM.displayName = 'ArrowUpSM'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(ArrowUpSM)