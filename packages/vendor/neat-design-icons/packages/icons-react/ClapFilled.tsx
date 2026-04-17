// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import ClapFilledSVG from '../icons-svg/lib/ClapFilled'
import Icon, { type BaseIconProps } from '../components'

const ClapFilled = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={ClapFilledSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    ClapFilled.displayName = 'ClapFilled'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(ClapFilled)