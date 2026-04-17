// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import ReportMonthlyOutlinedSVG from '../icons-svg/lib/ReportMonthlyOutlined'
import Icon, { type BaseIconProps } from '../components'

const ReportMonthlyOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={ReportMonthlyOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    ReportMonthlyOutlined.displayName = 'ReportMonthlyOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(ReportMonthlyOutlined)