// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import DoorOpenOutlinedSVG from '../icons-svg/lib/DoorOpenOutlined'
import Icon, { type BaseIconProps } from '../components'

const DoorOpenOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={DoorOpenOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    DoorOpenOutlined.displayName = 'DoorOpenOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(DoorOpenOutlined)