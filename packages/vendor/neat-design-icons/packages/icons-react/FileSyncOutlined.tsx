// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import FileSyncOutlinedSVG from '../icons-svg/lib/FileSyncOutlined'
import Icon, { type BaseIconProps } from '../components'

const FileSyncOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={FileSyncOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    FileSyncOutlined.displayName = 'FileSyncOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(FileSyncOutlined)