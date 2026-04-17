// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import BedFilledSVG from '../icons-svg/lib/BedFilled'
import Icon, { type BaseIconProps } from '../components'

const BedFilled = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={BedFilledSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    BedFilled.displayName = 'BedFilled'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(BedFilled)