// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import MoveColumnOutlinedSVG from '../icons-svg/lib/MoveColumnOutlined'
import Icon, { type BaseIconProps } from '../components'

const MoveColumnOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={MoveColumnOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    MoveColumnOutlined.displayName = 'MoveColumnOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(MoveColumnOutlined)