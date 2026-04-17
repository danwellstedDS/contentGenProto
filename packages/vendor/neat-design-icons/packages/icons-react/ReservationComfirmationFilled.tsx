// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import ReservationComfirmationFilledSVG from '../icons-svg/lib/ReservationComfirmationFilled'
import Icon, { type BaseIconProps } from '../components'

const ReservationComfirmationFilled = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={ReservationComfirmationFilledSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    ReservationComfirmationFilled.displayName = 'ReservationComfirmationFilled'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(ReservationComfirmationFilled)