// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import ViewFilledSVG from '../icons-svg/lib/ViewFilled'
import Icon, { type BaseIconProps } from '../components'

const ViewFilled = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={ViewFilledSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    ViewFilled.displayName = 'ViewFilled'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(ViewFilled)