// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import DownloadOutlinedSVG from '../icons-svg/lib/DownloadOutlined'
import Icon, { type BaseIconProps } from '../components'

const DownloadOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={DownloadOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    DownloadOutlined.displayName = 'DownloadOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(DownloadOutlined)