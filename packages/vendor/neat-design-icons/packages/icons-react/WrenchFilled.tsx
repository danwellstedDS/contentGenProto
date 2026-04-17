// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import WrenchFilledSVG from '../icons-svg/lib/WrenchFilled'
import Icon, { type BaseIconProps } from '../components'

const WrenchFilled = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={WrenchFilledSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    WrenchFilled.displayName = 'WrenchFilled'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(WrenchFilled)