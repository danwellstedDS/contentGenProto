// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import ReportOutlinedSVG from '../icons-svg/lib/ReportOutlined'
import Icon, { type BaseIconProps } from '../components'

const ReportOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={ReportOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    ReportOutlined.displayName = 'ReportOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(ReportOutlined)