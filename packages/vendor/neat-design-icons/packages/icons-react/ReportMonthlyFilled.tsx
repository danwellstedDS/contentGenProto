// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import ReportMonthlyFilledSVG from '../icons-svg/lib/ReportMonthlyFilled'
import Icon, { type BaseIconProps } from '../components'

const ReportMonthlyFilled = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={ReportMonthlyFilledSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    ReportMonthlyFilled.displayName = 'ReportMonthlyFilled'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(ReportMonthlyFilled)