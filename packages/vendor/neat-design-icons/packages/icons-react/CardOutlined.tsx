// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import CardOutlinedSVG from '../icons-svg/lib/CardOutlined'
import Icon, { type BaseIconProps } from '../components'

const CardOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={CardOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    CardOutlined.displayName = 'CardOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(CardOutlined)