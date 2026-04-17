// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import WarningTriangleFilledSVG from '../icons-svg/lib/WarningTriangleFilled'
import Icon, { type BaseIconProps } from '../components'

const WarningTriangleFilled = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={WarningTriangleFilledSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    WarningTriangleFilled.displayName = 'WarningTriangleFilled'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(WarningTriangleFilled)