// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import DoorOpenFilledSVG from '../icons-svg/lib/DoorOpenFilled'
import Icon, { type BaseIconProps } from '../components'

const DoorOpenFilled = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={DoorOpenFilledSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    DoorOpenFilled.displayName = 'DoorOpenFilled'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(DoorOpenFilled)