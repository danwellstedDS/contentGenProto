// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import FileHistoryOutlinedSVG from '../icons-svg/lib/FileHistoryOutlined'
import Icon, { type BaseIconProps } from '../components'

const FileHistoryOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={FileHistoryOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    FileHistoryOutlined.displayName = 'FileHistoryOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(FileHistoryOutlined)