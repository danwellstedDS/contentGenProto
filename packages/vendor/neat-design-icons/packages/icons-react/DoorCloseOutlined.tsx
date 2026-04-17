// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import DoorCloseOutlinedSVG from '../icons-svg/lib/DoorCloseOutlined'
import Icon, { type BaseIconProps } from '../components'

const DoorCloseOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={DoorCloseOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    DoorCloseOutlined.displayName = 'DoorCloseOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(DoorCloseOutlined)