// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import BetaFilledSVG from '../icons-svg/lib/BetaFilled'
import Icon, { type BaseIconProps } from '../components'

const BetaFilled = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={BetaFilledSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    BetaFilled.displayName = 'BetaFilled'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(BetaFilled)