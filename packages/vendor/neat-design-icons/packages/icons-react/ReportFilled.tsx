// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import ReportFilledSVG from '../icons-svg/lib/ReportFilled'
import Icon, { type BaseIconProps } from '../components'

const ReportFilled = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={ReportFilledSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    ReportFilled.displayName = 'ReportFilled'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(ReportFilled)