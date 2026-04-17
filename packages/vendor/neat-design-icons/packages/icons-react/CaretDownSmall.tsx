// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import CaretDownSmallSVG from '../icons-svg/lib/CaretDownSmall'
import Icon, { type BaseIconProps } from '../components'

const CaretDownSmall = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={CaretDownSmallSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    CaretDownSmall.displayName = 'CaretDownSmall'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(CaretDownSmall)