// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import PresellOutlinedSVG from '../icons-svg/lib/PresellOutlined'
import Icon, { type BaseIconProps } from '../components'

const PresellOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={PresellOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    PresellOutlined.displayName = 'PresellOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(PresellOutlined)