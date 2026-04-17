// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import SadOutlinedSVG from '../icons-svg/lib/SadOutlined'
import Icon, { type BaseIconProps } from '../components'

const SadOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={SadOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    SadOutlined.displayName = 'SadOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(SadOutlined)