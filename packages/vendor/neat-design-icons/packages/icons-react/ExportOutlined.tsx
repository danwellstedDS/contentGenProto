// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import ExportOutlinedSVG from '../icons-svg/lib/ExportOutlined'
import Icon, { type BaseIconProps } from '../components'

const ExportOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={ExportOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    ExportOutlined.displayName = 'ExportOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(ExportOutlined)