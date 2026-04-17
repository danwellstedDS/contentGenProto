// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import MuteOutlinedSVG from '../icons-svg/lib/MuteOutlined'
import Icon, { type BaseIconProps } from '../components'

const MuteOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={MuteOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    MuteOutlined.displayName = 'MuteOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(MuteOutlined)