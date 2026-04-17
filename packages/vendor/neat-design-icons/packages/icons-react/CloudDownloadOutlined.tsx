// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import CloudDownloadOutlinedSVG from '../icons-svg/lib/CloudDownloadOutlined'
import Icon, { type BaseIconProps } from '../components'

const CloudDownloadOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={CloudDownloadOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    CloudDownloadOutlined.displayName = 'CloudDownloadOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(CloudDownloadOutlined)