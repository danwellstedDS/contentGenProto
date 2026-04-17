// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import MoveOutlinedSVG from '../icons-svg/lib/MoveOutlined'
import Icon, { type BaseIconProps } from '../components'

const MoveOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={MoveOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    MoveOutlined.displayName = 'MoveOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(MoveOutlined)