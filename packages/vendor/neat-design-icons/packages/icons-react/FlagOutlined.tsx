// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import FlagOutlinedSVG from '../icons-svg/lib/FlagOutlined'
import Icon, { type BaseIconProps } from '../components'

const FlagOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={FlagOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    FlagOutlined.displayName = 'FlagOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(FlagOutlined)