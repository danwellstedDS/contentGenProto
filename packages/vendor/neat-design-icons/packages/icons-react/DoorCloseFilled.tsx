// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import DoorCloseFilledSVG from '../icons-svg/lib/DoorCloseFilled'
import Icon, { type BaseIconProps } from '../components'

const DoorCloseFilled = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={DoorCloseFilledSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    DoorCloseFilled.displayName = 'DoorCloseFilled'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(DoorCloseFilled)