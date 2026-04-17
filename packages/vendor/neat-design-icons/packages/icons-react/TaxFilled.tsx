// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import TaxFilledSVG from '../icons-svg/lib/TaxFilled'
import Icon, { type BaseIconProps } from '../components'

const TaxFilled = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={TaxFilledSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    TaxFilled.displayName = 'TaxFilled'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(TaxFilled)