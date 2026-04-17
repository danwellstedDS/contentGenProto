// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import VSSquareFilledSVG from '../icons-svg/lib/VSSquareFilled'
import Icon, { type BaseIconProps } from '../components'

const VSSquareFilled = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={VSSquareFilledSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    VSSquareFilled.displayName = 'VSSquareFilled'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(VSSquareFilled)