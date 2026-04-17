// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import RowCompactFilledSVG from '../icons-svg/lib/RowCompactFilled'
import Icon, { type BaseIconProps } from '../components'

const RowCompactFilled = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={RowCompactFilledSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    RowCompactFilled.displayName = 'RowCompactFilled'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(RowCompactFilled)