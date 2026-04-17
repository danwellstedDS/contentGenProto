// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import HeartOutlinedSVG from '../icons-svg/lib/HeartOutlined'
import Icon, { type BaseIconProps } from '../components'

const HeartOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={HeartOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    HeartOutlined.displayName = 'HeartOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(HeartOutlined)