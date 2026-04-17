// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import RowMediumFilledSVG from '../icons-svg/lib/RowMediumFilled'
import Icon, { type BaseIconProps } from '../components'

const RowMediumFilled = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={RowMediumFilledSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    RowMediumFilled.displayName = 'RowMediumFilled'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(RowMediumFilled)